# 🚀 SSI Ranking LinkedIn

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-4285F4?logo=google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/MatheusRenzo/ssi-ranking-linkedin)

> **Extensão para Chrome que exibe seu Social Selling Index (SSI) do LinkedIn em um dashboard visual completo, com métricas em tempo real, análise dos 4 pilares, gráficos interativos e dados armazenados localmente para segurança e praticidade.**

## 📊 O que é o SSI (Social Selling Index)?

O **Social Selling Index (SSI)** é uma métrica do LinkedIn que mede sua eficácia na venda social através de 4 pilares fundamentais:

- 🏠 **Estabelecer sua marca pessoal** - Construir uma presença profissional online
- 🎯 **Encontrar as pessoas certas** - Identificar e conectar com prospects qualificados
- 💬 **Engajar com insights** - Compartilhar conteúdo valioso e relevante
- 🤝 **Construir relacionamentos** - Desenvolver conexões duradouras

## ✨ Funcionalidades Principais

- 📈 **Dashboard Visual Completo**: Interface moderna e intuitiva para visualizar seu SSI
- 🔄 **Métricas em Tempo Real**: Atualizações automáticas dos dados do LinkedIn
- 📊 **Análise dos 4 Pilares**: Gráficos detalhados para cada componente do SSI
- 📱 **Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- 🔒 **Armazenamento Local**: Seus dados ficam seguros no seu navegador
- 🎨 **Temas Personalizáveis**: Múltiplas opções de visualização
- 📊 **Histórico de Progresso**: Acompanhe sua evolução ao longo do tempo
- 🔔 **Notificações Inteligentes**: Alertas para melhorar seu score

## 🛠️ Stack Tecnológica

### Frontend & UI/UX
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

### APIs & Integrações
![LinkedIn API](https://img.shields.io/badge/LinkedIn_API-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-FF6B6B?style=for-the-badge&logo=rest&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

### Desenvolvimento & Deploy
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Ferramentas & Bibliotecas
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Local Storage](https://img.shields.io/badge/Local_Storage-4A90E2?style=for-the-badge&logo=local-storage&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest_V3-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

## 🚀 Como Instalar

### 📥 Opção 1: Download do ZIP (Recomendado para Usuários Finais)

1. **Acesse o repositório**: [https://github.com/MatheusRenzo/ssi-ranking-linkedin](https://github.com/MatheusRenzo/ssi-ranking-linkedin)
2. **Clique no botão verde "Code"**
3. **Selecione "Download ZIP"**
4. **Extraia o arquivo ZIP** em uma pasta de sua preferência
5. **Siga os passos de instalação** abaixo

### 🔧 Opção 2: Clone via Git (Para Desenvolvedores)

```bash
git clone https://github.com/MatheusRenzo/ssi-ranking-linkedin.git
cd ssi-ranking-linkedin
```

## 📦 Instalação da Extensão

### Pré-requisitos
- ✅ Google Chrome 88+ ou navegador compatível
- ✅ Conta ativa no LinkedIn
- ✅ Permissões para extensões no navegador

### Passos para Instalação

1. **Abra o Chrome** e vá para `chrome://extensions/`
2. **Ative o "Modo desenvolvedor"** (toggle no canto superior direito)
3. **Clique em "Carregar extensão não empacotada"**
4. **Selecione a pasta** do projeto extraído
5. **Confirme a instalação** e aguarde a mensagem de sucesso

### 🎯 Primeira Configuração

1. **Clique no ícone da extensão** na barra de ferramentas
2. **Autorize o acesso** ao LinkedIn quando solicitado
3. **Configure suas preferências** nas opções
4. **Personalize o dashboard** conforme sua necessidade

## 🔧 Configuração Avançada

### Arquivo de Configuração
Edite o arquivo `config.js` para personalizar:

```javascript
const config = {
    updateInterval: 300000, // 5 minutos
    theme: 'dark', // 'light', 'dark', 'auto'
    notifications: true,
    autoRefresh: true
};
```

### Deploy Automático
Para desenvolvedores, execute o script de deploy:

```bash
python "sistema de deploy automatico.py"
```

## 📱 Como Usar

### 🎯 Uso Básico
1. **Navegue para o LinkedIn** e faça login
2. **Clique no ícone da extensão** na barra de ferramentas
3. **Visualize seu SSI** no dashboard principal
4. **Analise os 4 pilares** através dos gráficos interativos

### 📊 Dashboard Avançado
- **Métricas em Tempo Real**: Seu score atual e histórico
- **Análise por Pilar**: Detalhamento de cada componente
- **Comparação com Média**: Como você se posiciona no mercado
- **Dicas de Melhoria**: Sugestões personalizadas para aumentar seu SSI

### ⚙️ Configurações
- **Temas**: Escolha entre claro, escuro ou automático
- **Notificações**: Configure alertas para melhorias
- **Exportação**: Baixe relatórios em diferentes formatos
- **Sincronização**: Mantenha dados atualizados automaticamente

## 📁 Estrutura do Projeto

```
ssi-ranking-linkedin/
├── 📄 manifest.json              # Configuração da extensão Chrome
├── 🎨 popup.html                 # Interface principal do popup
├── ⚡ popup.js                   # Lógica e funcionalidades do popup
├── ⚙️ options.html               # Página de configurações avançadas
├── 🔧 options.js                 # Lógica das configurações
├── 🔄 background.js              # Script em background para automação
├── 📋 config.js                  # Configurações gerais e constantes
├── 🚀 deploy_config.json         # Configurações de deploy automático
├── 🐍 requirements.txt           # Dependências Python para scripts
├── 🤖 sistema de deploy automatico.py  # Script de deploy automático
├── 📖 README.md                  # Documentação completa
└── 📄 LICENSE                    # Licença MIT
```

## 🎨 Recursos Visuais

### Dashboard Principal
- 📊 **Gráficos Interativos**: Visualizações dinâmicas dos dados
- 🎯 **Indicadores de Progresso**: Barras e círculos de progresso
- 📈 **Gráficos de Tendência**: Evolução do SSI ao longo do tempo
- 🏆 **Rankings e Comparações**: Posicionamento no mercado

### Temas Disponíveis
- 🌞 **Tema Claro**: Interface limpa e profissional
- 🌙 **Tema Escuro**: Visual moderno e elegante
- 🔄 **Tema Automático**: Adapta-se ao sistema operacional

## ⚠️ Avisos Importantes

### 🚨 Uso Responsável
- **Respeite os termos** de uso do LinkedIn
- **Não abuse da automação** - mantenha comportamento natural
- **Respeite os limites** da plataforma
- **Teste em conta secundária** antes de usar na principal

### 🔒 Segurança e Privacidade
- **Dados armazenados localmente** - não enviamos para servidores externos
- **Permissões mínimas** - apenas o necessário para funcionar
- **Código aberto** - auditável e transparente
- **Sem rastreamento** - sua privacidade é respeitada

## 🤝 Contribuição

### Como Contribuir
1. **Fork o projeto** no GitHub
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request** com descrição detalhada

### Áreas para Contribuição
- 🐛 **Bug Fixes**: Correção de problemas identificados
- ✨ **Novas Features**: Funcionalidades adicionais
- 🎨 **Melhorias de UI/UX**: Interface mais intuitiva
- 📱 **Responsividade**: Melhor experiência mobile
- 🌍 **Internacionalização**: Suporte a múltiplos idiomas
- 📊 **Novos Gráficos**: Visualizações adicionais

## 📈 Roadmap

### 🚀 Versão 2.0 (Próxima)
- [ ] **Integração com CRM**: Conexão com Salesforce, HubSpot
- [ ] **Relatórios Avançados**: Exportação em PDF, Excel
- [ ] **Análise Competitiva**: Comparação com concorrentes
- [ ] **Automação Inteligente**: Sugestões automáticas de conteúdo

### 🔮 Versão 3.0 (Futuro)
- [ ] **IA e Machine Learning**: Previsões e insights avançados
- [ ] **Integração Multi-plataforma**: Twitter, Facebook, Instagram
- [ ] **API Pública**: Para desenvolvedores integrarem
- [ ] **Mobile App**: Aplicativo nativo para iOS/Android

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/MatheusRenzo/ssi-ranking-linkedin?style=social)
![GitHub forks](https://img.shields.io/github/forks/MatheusRenzo/ssi-ranking-linkedin?style=social)
![GitHub issues](https://img.shields.io/github/issues/MatheusRenzo/ssi-ranking-linkedin)
![GitHub pull requests](https://img.shields.io/github/issues-pr/MatheusRenzo/ssi-ranking-linkedin)
![GitHub contributors](https://img.shields.io/github/contributors/MatheusRenzo/ssi-ranking-linkedin)
![GitHub last commit](https://img.shields.io/github/last-commit/MatheusRenzo/ssi-ranking-linkedin)
![GitHub repo size](https://img.shields.io/github/repo-size/MatheusRenzo/ssi-ranking-linkedin)

## 📄 Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License - Permite uso comercial, modificação, distribuição e uso privado.
```

## 👨‍💻 Autor

**Matheus Renzo** - Desenvolvedor apaixonado por automação e produtividade

- 🌐 **GitHub**: [@MatheusRenzo](https://github.com/MatheusRenzo)
- 🔗 **LinkedIn**: [Perfil LinkedIn](https://www.linkedin.com/in/matheusrenzo/)
- 📧 **Email**: [Entre em contato](mailto:contato@matheusrenzo.com)

## 🙏 Agradecimentos

- **Comunidade LinkedIn** pela inspiração
- **Contribuidores** que ajudaram no desenvolvimento
- **Usuários** que testaram e deram feedback
- **Open Source** que tornou este projeto possível

## 📞 Suporte e Comunidade

### 🆘 Como Obter Ajuda
1. **📖 Documentação**: Leia este README completamente
2. **🐛 Issues**: Reporte bugs no GitHub
3. **💬 Discussões**: Participe das discussões da comunidade
4. **📧 Email**: Entre em contato diretamente

### 🌐 Links Úteis
- **🔗 Repositório**: [https://github.com/MatheusRenzo/ssi-ranking-linkedin](https://github.com/MatheusRenzo/ssi-ranking-linkedin)
- **📖 Wiki**: [Documentação completa](https://github.com/MatheusRenzo/ssi-ranking-linkedin/wiki)
- **🐛 Issues**: [Reportar problemas](https://github.com/MatheusRenzo/ssi-ranking-linkedin/issues)
- **💡 Discussões**: [Comunidade](https://github.com/MatheusRenzo/ssi-ranking-linkedin/discussions)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/MatheusRenzo/ssi-ranking-linkedin?style=for-the-badge&logo=github)](https://github.com/MatheusRenzo/ssi-ranking-linkedin/stargazers)

**🚀 Transforme seu LinkedIn com o poder do SSI! 🚀**

</div>

---

**⚠️ Disclaimer**: Esta extensão é fornecida "como está" e os desenvolvedores não se responsabilizam pelo uso inadequado que possa violar os termos de serviço do LinkedIn. Use com responsabilidade e sempre respeite as políticas da plataforma.