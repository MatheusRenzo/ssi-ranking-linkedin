document.addEventListener('DOMContentLoaded', function() {
    // Verificar se CONFIG está disponível
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG não está disponível');
        return;
    }

    // Função para obter elementos de forma segura
    function getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Elemento com ID '${id}' não encontrado`);
        }
        return element;
    }

    const statusDiv = getElement('status');
    const fetchBtn = getElement('fetchSSI');
    const loadingDiv = getElement('loading');
    const dashboardDiv = getElement('dashboard');

    // Verificar se elementos essenciais existem
    if (!statusDiv || !fetchBtn || !loadingDiv || !dashboardDiv) {
        console.error('Elementos essenciais não encontrados');
        return;
    }

    // Elementos do dashboard
    const industryRank = getElement('industryRank');
    const networkRank = getElement('networkRank');
    const ssiScore = getElement('ssiScore');
    const donutFill = getElement('donutFill');
    const pillar1Score = getElement('pillar1Score');
    const pillar2Score = getElement('pillar2Score');
    const pillar3Score = getElement('pillar3Score');
    const pillar4Score = getElement('pillar4Score');
    const pillar1Bar = getElement('pillar1Bar');
    const pillar2Bar = getElement('pillar2Bar');
    const pillar3Bar = getElement('pillar3Bar');
    const pillar4Bar = getElement('pillar4Bar');
    
    // Elementos da nova seção de análise
    const industryDonutFill = getElement('industryDonutFill');
    const networkDonutFill = getElement('networkDonutFill');
    const industryScore = getElement('industryScore');
    const networkScore = getElement('networkScore');
    const industryDescription = getElement('industryDescription');
    const networkDescription = getElement('networkDescription');
    const industryRanking = getElement('industryRanking');
    const networkRanking = getElement('networkRanking');
    const industryChange = getElement('industryChange');
    const networkChange = getElement('networkChange');

    // Mapeamento dos pilares
    const pillarMap = {
        'PROFESSIONAL_BRAND': {
            name: CONFIG.PILLARS.PROFESSIONAL_BRAND.name,
            element: pillar1Score,
            bar: pillar1Bar,
            color: CONFIG.PILLARS.PROFESSIONAL_BRAND.color
        },
        'FIND_RIGHT_PEOPLE': {
            name: CONFIG.PILLARS.FIND_RIGHT_PEOPLE.name,
            element: pillar2Score,
            bar: pillar2Bar,
            color: CONFIG.PILLARS.FIND_RIGHT_PEOPLE.color
        },
        'INSIGHT_ENGAGEMENT': {
            name: CONFIG.PILLARS.INSIGHT_ENGAGEMENT.name,
            element: pillar3Score,
            bar: pillar3Bar,
            color: CONFIG.PILLARS.INSIGHT_ENGAGEMENT.color
        },
        'STRONG_RELATIONSHIP': {
            name: CONFIG.PILLARS.STRONG_RELATIONSHIP.name,
            element: pillar4Score,
            bar: pillar4Bar,
            color: CONFIG.PILLARS.STRONG_RELATIONSHIP.color
        }
    };

    // Função para mostrar dados da API no console e na interface
    function showAPIData(data) {
        console.log('🔍 === DADOS COMPLETOS DA API ===');
        console.log('📊 Dados brutos:', data);
        
        // Dados principais
        if (data.memberScore) {
            console.log('🎯 Score do membro:', data.memberScore);
            console.log('📈 Score geral:', data.memberScore.overall);
            console.log('🏗️ Sub-scores:', data.memberScore.subScores);
        }
        
        // Dados dos grupos
        if (data.groupScore) {
            console.log('👥 Dados dos grupos:', data.groupScore);
            data.groupScore.forEach((group, index) => {
                console.log(`📊 Grupo ${index + 1}:`, {
                    tipo: group.groupType,
                    score: group.score,
                    rank: group.rank,
                    tamanho: group.groupSize,
                    industria: group.industry
                });
            });
        }
        
        // Outros dados
        if (data.profileUrn) console.log('🆔 Profile URN:', data.profileUrn);
        if (data.profile) console.log('👤 Profile:', data.profile);
        if (data.activeSeat !== undefined) console.log('💺 Active Seat:', data.activeSeat);
        
        // Criar seção de debug na interface
        createDebugSection(data);
    }

    // Função para criar seção de debug visível
    function createDebugSection(data) {
        // Remover seção de debug anterior se existir
        const existingDebug = document.getElementById('debugSection');
        if (existingDebug) {
            existingDebug.remove();
        }

        // Criar nova seção de debug
        const debugSection = document.createElement('div');
        debugSection.id = 'debugSection';
        debugSection.style.cssText = `
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 16px;
            margin-top: 16px;
            font-family: monospace;
            font-size: 12px;
            max-height: 300px;
            overflow-y: auto;
        `;

        debugSection.innerHTML = `
            <h4 style="margin: 0 0 12px 0; color: #495057;">🔍 Debug - Dados da API</h4>
            <div style="margin-bottom: 8px;">
                <strong>Score Geral:</strong> ${data.memberScore?.overall || 'N/A'}
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Sub-scores:</strong>
                ${data.memberScore?.subScores?.map(ss => 
                    `${ss.pillar}: ${ss.score}`
                ).join(', ') || 'N/A'}
            </div>
            <div style="margin-bottom: 8px;">
                <strong>Grupos:</strong>
                ${data.groupScore?.map(gs => 
                    `${gs.groupType}: Score ${gs.score?.overall}, Rank ${gs.rank}`
                ).join(' | ') || 'N/A'}
            </div>
            <details style="margin-top: 12px;">
                <summary style="cursor: pointer; color: #0073b1;">📋 Ver dados completos (JSON)</summary>
                <pre style="background: white; padding: 8px; border-radius: 4px; margin-top: 8px; white-space: pre-wrap;">${JSON.stringify(data, null, 2)}</pre>
            </details>
        `;

        // Adicionar após o dashboard
        dashboardDiv.appendChild(debugSection);
    }

    // Função para atualizar o gráfico donut principal
    function updateDonutChart(score) {
        if (!donutFill || !ssiScore) return;
        
        const circumference = 2 * Math.PI * 45; // r = 45
        const percentage = score / 100;
        const dashArray = `${circumference * percentage} ${circumference}`;
        
        donutFill.style.strokeDasharray = dashArray;
        ssiScore.textContent = Math.round(score);
        
        // Adicionar animação suave
        donutFill.style.transition = 'stroke-dasharray 1s ease-in-out';
    }
    
    // Função para atualizar os gráficos donut da análise
    function updateAnalysisDonut(element, score) {
        if (!element) return;
        
        const circumference = 2 * Math.PI * 45; // r = 45
        const percentage = score / 100;
        const dashArray = `${circumference * percentage} ${circumference}`;
        
        element.style.strokeDasharray = dashArray;
        element.style.transition = 'stroke-dasharray 1s ease-in-out';
    }

    // Função para atualizar as barras de progresso
    function updateProgressBars(subscores) {
        console.log('🏗️ Atualizando barras de progresso com:', subscores);
        
        subscores.forEach(subscore => {
            const pillar = pillarMap[subscore.pillar];
            if (pillar && pillar.element && pillar.bar) {
                console.log(`📊 Atualizando ${subscore.pillar}:`, {
                    score: subscore.score,
                    elemento: pillar.element,
                    barra: pillar.bar
                });
                
                pillar.element.textContent = subscore.score.toFixed(1);
                const percentage = (subscore.score / 25) * 100; // Cada pilar vale até 25 pontos
                pillar.bar.style.width = `${Math.min(percentage, 100)}%`;
            } else {
                console.warn(`⚠️ Pilar não encontrado ou elementos ausentes:`, subscore.pillar);
            }
        });
    }

    // Função para exibir o dashboard
    function showDashboard(data) {
        console.log('🎯 Exibindo dashboard com dados:', data);
        
        // Atualizar rankings dos cards superiores
        const industryData = data.groupScore.find(gs => gs.groupType === 'INDUSTRY');
        const networkData = data.groupScore.find(gs => gs.groupType === 'NETWORK');
        
        console.log('🏭 Dados do setor:', industryData);
        console.log('🌐 Dados da rede:', networkData);
        
        if (industryData && industryRank) {
            // O rank já representa o percentil (ex: rank 41 = top 41%)
            console.log(`🏭 Ranking do setor: ${industryData.rank}% (rank ${industryData.rank})`);
            industryRank.textContent = `Primeiros ${industryData.rank}%`;
        }
        
        if (networkData && networkRank) {
            // O rank já representa o percentil (ex: rank 71 = top 71%)
            console.log(`🌐 Ranking da rede: ${networkData.rank}% (rank ${networkData.rank})`);
            networkRank.textContent = `Primeiros ${networkData.rank}%`;
        }

        // Atualizar score principal
        const memberScore = data.memberScore.overall;
        console.log('🎯 Score principal:', memberScore);
        updateDonutChart(memberScore);

        // Atualizar componentes
        console.log('🏗️ Sub-scores para barras:', data.memberScore.subScores);
        updateProgressBars(data.memberScore.subScores);
        
        // Atualizar nova seção de análise
        updateAnalysisSection(data);

        // Mostrar dashboard
        dashboardDiv.classList.add('show');
        
        // Mostrar dados da API para debug
        showAPIData(data);
    }
    
    // Função para atualizar a seção de análise
    function updateAnalysisSection(data) {
        console.log('🔍 Atualizando seção de análise');
        
        const industryData = data.groupScore.find(gs => gs.groupType === 'INDUSTRY');
        const networkData = data.groupScore.find(gs => gs.groupType === 'NETWORK');
        
        if (industryData) {
            console.log('🏭 Atualizando dados do setor:', industryData);
            
            // Atualizar gráfico donut do setor
            if (industryDonutFill) {
                updateAnalysisDonut(industryDonutFill, industryData.score.overall);
            }
            if (industryScore) {
                industryScore.textContent = Math.round(industryData.score.overall);
            }
            
            // Atualizar informações do setor
            if (industryDescription) {
                const industryName = industryData.industry || 'Comércio varejista';
                const industryScoreValue = Math.round(industryData.score.overall);
                industryDescription.textContent = CONFIG.ANALYSIS_TEXTS.INDUSTRY_DESCRIPTION
                    .replace('{industry}', industryName)
                    .replace('{score}', industryScoreValue);
            }
            
            if (industryRanking) {
                // O rank já representa o percentil
                industryRanking.innerHTML = CONFIG.ANALYSIS_TEXTS.RANKING_TEMPLATE
                    .replace('{percentage}', industryData.rank);
            }
            
            if (industryChange) {
                industryChange.textContent = CONFIG.ANALYSIS_TEXTS.CHANGE_STATUS;
            }
        }
        
        if (networkData) {
            console.log('🌐 Atualizando dados da rede:', networkData);
            
            // Atualizar gráfico donut da rede
            if (networkDonutFill) {
                updateAnalysisDonut(networkDonutFill, networkData.score.overall);
            }
            if (networkScore) {
                networkScore.textContent = Math.round(networkData.score.overall);
            }
            
            // Atualizar informações da rede
            if (networkDescription) {
                const networkScoreValue = Math.round(networkData.score.overall);
                networkDescription.textContent = CONFIG.ANALYSIS_TEXTS.NETWORK_DESCRIPTION
                    .replace('{score}', networkScoreValue);
            }
            
            if (networkRanking) {
                // O rank já representa o percentil
                networkRanking.innerHTML = CONFIG.ANALYSIS_TEXTS.RANKING_TEMPLATE
                    .replace('{percentage}', networkData.rank);
            }
            
            if (networkChange) {
                networkChange.textContent = CONFIG.ANALYSIS_TEXTS.CHANGE_STATUS;
            }
        }
    }

    // Função para buscar dados do SSI
    async function fetchSSIData() {
        console.log('🚀 Iniciando busca de dados do SSI...');
        
        fetchBtn.disabled = true;
        fetchBtn.textContent = '🔄 Buscando...';
        statusDiv.textContent = '⏳ Conectando ao LinkedIn...';
        statusDiv.className = 'status info';
        loadingDiv.style.display = 'block';
        dashboardDiv.classList.remove('show');
        
        // Simular progresso para melhor UX
        setTimeout(() => {
            if (loadingDiv.style.display !== 'none') {
                statusDiv.textContent = '⏳ Buscando dados do SSI...';
            }
        }, 1000);

        try {
            console.log('📡 Enviando mensagem para o background...');
            const response = await new Promise((resolve) => {
                chrome.runtime.sendMessage({ type: 'fetch-ssi' }, resolve);
            });

            console.log('📥 Resposta recebida:', response);

            if (response?.ok) {
                console.log('✅ Dados recebidos com sucesso:', response.data);
                statusDiv.textContent = '✅ Dados carregados com sucesso!';
                statusDiv.className = 'status success';
                showDashboard(response.data);
            } else {
                console.error('❌ Erro na resposta:', response);
                statusDiv.textContent = '❌ Erro: ' + (response?.error || 'Falha ao buscar dados');
                statusDiv.className = 'status error';
            }
        } catch (error) {
            console.error('💥 Erro durante a busca:', error);
            statusDiv.textContent = '❌ Erro: ' + error.message;
            statusDiv.className = 'status error';
        } finally {
            fetchBtn.disabled = false;
            fetchBtn.textContent = '📊 Buscar Dados SSI';
            loadingDiv.style.display = 'none';
        }
    }

    // Event listener
    fetchBtn.addEventListener('click', fetchSSIData);

    // Verificar se já temos dados salvos
    chrome.storage.local.get(['ssiData', 'lastFetch'], function(result) {
        if (result.ssiData && result.lastFetch) {
            console.log('💾 Dados em cache encontrados:', result.ssiData);
            const lastFetch = new Date(result.lastFetch);
            const now = new Date();
            const diffHours = (now - lastFetch) / (1000 * 60 * 60);
            
            // Se os dados têm menos de 1 hora, mostrar automaticamente
            if (diffHours < 1) {
                console.log('🔄 Carregando dados do cache...');
                statusDiv.textContent = '✅ Dados carregados automaticamente';
                statusDiv.className = 'status success';
                showDashboard(result.ssiData);
            }
        }
    });
});
