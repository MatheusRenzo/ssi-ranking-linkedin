// LinkedIn SSI Dashboard - background service worker (MV3)

// Configuração embutida (não podemos usar importScripts em service workers)
const CONFIG = {
    API: {
        SSI_ENDPOINT: 'https://www.linkedin.com/sales-api/salesApiSsi',
        LINKEDIN_BASE: 'https://www.linkedin.com/'
    },
    MESSAGES: {
        ERROR_COOKIES: 'Cookies do LinkedIn não encontrados. Faça login no LinkedIn primeiro.'
    },
    DEFAULT_HEADERS: {
        'accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'referer': 'https://www.linkedin.com/sales/ssi',
        'x-restli-protocol-version': '2.0.0'
    }
};

const COOKIE_NAMES = new Set(["li_at", "JSESSIONID"]);
const LINKEDIN_URL = CONFIG.API.LINKEDIN_BASE;
const SSI_API_URL = CONFIG.API.SSI_ENDPOINT;

function deriveCsrfToken(jsession) {
    if (!jsession) return null;
    // JSESSIONID costuma vir entre aspas, ex: "ajax:123..."
    // csrf-token = valor sem aspas
    const token = jsession.replace(/^"|"$/g, "");
    console.log('🔑 CSRF Token derivado:', token);
    return token;
}

async function readCookies() {
    try {
        console.log('🍪 Iniciando leitura de cookies...');
        
        const liAt = await chrome.cookies.get({ url: LINKEDIN_URL, name: "li_at" });
        const jsid = await chrome.cookies.get({ url: LINKEDIN_URL, name: "JSESSIONID" });
        
        console.log('🍪 Cookie li_at:', liAt);
        console.log('🍪 Cookie JSESSIONID:', jsid);
        
        const payload = {
            domain: "linkedin.com",
            li_at: liAt?.value || null,
            JSESSIONID: jsid?.value || null,
            csrf_token: deriveCsrfToken(jsid?.value || null),
            ts: new Date().toISOString(),
        };
        
        console.log("🍪 Cookies capturados:", payload);
        return payload;
    } catch (error) {
        console.error("❌ Erro ao ler cookies:", error);
        return null;
    }
}

async function fetchSSIData() {
    console.log("🚀 Iniciando busca de dados do SSI...");
    
    try {
        // Ler cookies primeiro
        const cookies = await readCookies();
        
        if (!cookies.li_at || !cookies.JSESSIONID) {
            console.error("❌ Cookies necessários não encontrados");
            return { ok: false, error: CONFIG.MESSAGES.ERROR_COOKIES };
        }

        // Gerar novo CSRF token baseado no JSESSIONID atual
        const csrfToken = cookies.csrf_token;
        console.log('🔑 CSRF Token para requisição:', csrfToken);
        
        // Preparar headers para a requisição
        const headers = {
            ...CONFIG.DEFAULT_HEADERS,
            'csrf-token': csrfToken,
            'cookie': `li_at=${cookies.li_at}; JSESSIONID="${cookies.JSESSIONID}"`
        };

        console.log('📋 Headers da requisição:', headers);
        console.log('🌐 URL da API:', SSI_API_URL);

        // Fazer requisição para a API do SSI
        console.log('📡 Fazendo requisição para a API...');
        const response = await fetch(SSI_API_URL, {
            method: 'GET',
            headers: headers,
            credentials: 'include'
        });

        console.log('📥 Resposta da API recebida:', {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries())
        });

        if (!response.ok) {
            console.error("❌ Erro na API:", response.status, response.statusText);
            return { ok: false, error: `Erro na API: ${response.status} ${response.statusText}` };
        }

        const data = await response.json();
        console.log("✅ Dados do SSI recebidos:", data);
        
        // Log detalhado dos dados
        if (data.memberScore) {
            console.log('🎯 Score do membro:', {
                overall: data.memberScore.overall,
                subScores: data.memberScore.subScores
            });
        }
        
        if (data.groupScore) {
            console.log('👥 Dados dos grupos:', data.groupScore.map(gs => ({
                type: gs.groupType,
                score: gs.score?.overall,
                rank: gs.rank,
                size: gs.groupSize,
                industry: gs.industry
            })));
        }

        // Salvar dados localmente para cache
        await chrome.storage.local.set({
            ssiData: data,
            lastFetch: new Date().toISOString()
        });
        console.log('💾 Dados salvos no cache local');

        return { ok: true, data: data };

    } catch (error) {
        console.error("💥 Erro ao buscar dados do SSI:", error);
        return { ok: false, error: error.message };
    }
}

// Listener para mensagens da popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('📨 Mensagem recebida:', message);
    
    if (message.type === "fetch-ssi") {
        console.log('🔄 Processando requisição fetch-ssi...');
        fetchSSIData().then(response => {
            console.log('📤 Enviando resposta:', response);
            sendResponse(response);
        });
        return true; // Indica que a resposta será assíncrona
    }
});

console.log("✅ LinkedIn SSI Dashboard iniciado");