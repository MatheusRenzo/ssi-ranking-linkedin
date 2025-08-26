// LinkedIn SSI Dashboard - Configuration

const CONFIG = {
    // URLs da API
    API: {
        SSI_ENDPOINT: 'https://www.linkedin.com/sales-api/salesApiSsi',
        LINKEDIN_BASE: 'https://www.linkedin.com/'
    },
    
    // Configurações de cache
    CACHE: {
        EXPIRY_HOURS: 1,
        STORAGE_KEYS: {
            SSI_DATA: 'ssiData',
            LAST_FETCH: 'lastFetch'
        }
    },
    
    // Configurações de UI
    UI: {
        POPUP_WIDTH: 500,
        ANIMATION_DURATION: 1000,
        LOADING_TIMEOUT: 1000
    },
    
    // Mapeamento dos pilares do SSI
    PILLARS: {
        PROFESSIONAL_BRAND: {
            name: 'Estabelecer sua marca profissional',
            color: '#ff6b35',
            maxScore: 25
        },
        FIND_RIGHT_PEOPLE: {
            name: 'Localizar as pessoas certas',
            color: '#8b5cf6',
            maxScore: 25
        },
        INSIGHT_ENGAGEMENT: {
            name: 'Interagir oferecendo insights',
            color: '#06b6d4',
            maxScore: 25
        },
        STRONG_RELATIONSHIP: {
            name: 'Criar relacionamentos',
            color: '#3b82f6',
            maxScore: 25
        }
    },
    
    // Cores do tema
    COLORS: {
        PRIMARY: '#0073b1',
        SUCCESS: '#d4edda',
        ERROR: '#f8d7da',
        INFO: '#d1ecf1',
        BACKGROUND: '#f5f5f5',
        CARD_BACKGROUND: '#ffffff',
        TEXT_PRIMARY: '#333333',
        TEXT_SECONDARY: '#666666'
    },
    
    // Mensagens de status
    MESSAGES: {
        READY: '🔄 Clique em "Buscar Dados SSI" para carregar suas métricas',
        LOADING: '⏳ Conectando ao LinkedIn...',
        LOADING_SSI: '⏳ Buscando dados do SSI...',
        SUCCESS: '✅ Dados carregados com sucesso!',
        ERROR_COOKIES: 'Cookies do LinkedIn não encontrados. Faça login no LinkedIn primeiro.',
        ERROR_API: 'Erro na API: ',
        ERROR_UNKNOWN: 'Falha ao buscar dados'
    },
    
    // Textos para a seção de análise
    ANALYSIS_TEXTS: {
        INDUSTRY_DESCRIPTION: 'Os profissionais de vendas do setor {industry} têm um SSI médio de {score}.',
        NETWORK_DESCRIPTION: 'As pessoas da sua rede têm um SSI médio de {score}.',
        RANKING_TEMPLATE: 'Você está entre os primeiros <strong>{percentage}%</strong>',
        CHANGE_STATUS: 'Sem alterações na última semana'
    },
    
    // Headers padrão para requisições
    DEFAULT_HEADERS: {
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'referer': 'https://www.linkedin.com/sales/ssi',
        'x-restli-protocol-version': '2.0.0'
    }
};

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
