# 🚀 Extensão Chrome: Focus Tracker (Manifest V3)

![Versão Semântica](https://img.shields.io/badge/Versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-green)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-orange)

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como parte de um trabalho acadêmico com o objetivo de construir uma extensão simples e funcional para o Google Chrome, utilizando a arquitetura **Manifest V3**. Meu foco foi demonstrar a correta utilização dos componentes essenciais do MV3: o **Service Worker** e a API **`chrome.storage`**, seguindo as boas práticas de empacotamento.

A extensão **Focus Tracker** funciona como um rastreador de tempo simples, contabilizando os segundos acumulados que o usuário passa com o navegador aberto.

## 🔗 Entregáveis do Projeto

| Entregável                           | Status        | Link                                                                                                                                 |
| :----------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Código Fonte (Repositório)**       | ✅ Completo   | [https://github.com/Thi977/Extens-o-do-Google-Chrome-Manifest-V3-](https://github.com/Thi977/Extens-o-do-Google-Chrome-Manifest-V3-) |
| **Página do Projeto (GitHub Pages)** | ✅ Publicada  | [https://thi977.github.io/Extens-o-do-Google-Chrome-Manifest-V3-/](https://thi977.github.io/Extens-o-do-Google-Chrome-Manifest-V3-/) |
| **Versão Empacotada**                | ✅ Disponível | [Download do Release v1.0.0](https://github.com/Thi977/Extens-o-do-Google-Chrome-Manifest-V3-/releases/tag/v1.0.0)                   |
| **Documentação (README)**            | ✅ Completo   | (Este arquivo)                                                                                                                       |

## 📦 Instalação e Uso (Modo Desenvolvedor)

A extensão deve ser carregada localmente no Chrome, seguindo os passos de desenvolvedor.

### 1. Preparação

1.  Eu clonei este repositório para o meu computador usando o comando:
    ```bash
    git clone [https://github.com/Thi977/Extens-o-do-Google-Chrome-Manifest-V3-.git](https://github.com/Thi977/Extens-o-do-Google-Chrome-Manifest-V3-.git)
    ```
2.  Navegue até a pasta raiz do projeto clonado.

### 2. Carregar a Extensão no Chrome (Manifest V3)

1.  Abra o Google Chrome e acesse a página de extensões: `chrome://extensions/`
2.  No canto superior direito da tela, ative o **Modo do desenvolvedor**.
3.  Clique no botão **Carregar sem compactação** (Load unpacked).
4.  Selecione a pasta raiz do projeto clonado.

### 3. Como Usar o Focus Tracker

1.  O ícone da extensão Focus Tracker aparecerá na barra de ferramentas do Chrome.
2.  O **Service Worker** é ativado em _background_ e, por meio de um **Alarme** (`chrome.alarms`), ele inicia a contagem de tempo (incrementando a cada 1 segundo) no `chrome.storage.local`.
3.  Ao **clicar no ícone da extensão**, o `popup` é aberto.
4.  O popup exibirá o tempo total de foco acumulado no formato **HH:MM:SS** e se atualizará em tempo real.
5.  O botão **Zerar** permite resetar a contagem.

## 🧱 Estrutura de Pastas

A arquitetura do projeto segue a estrutura MV3 para manter a separação de responsabilidades:

my-chrome-extension/
├─ src/ ├─ popup/ ← UI (HTML, CSS, JS) do painel da extensão, definido em action.default_popup.
│ │ ├─ popup.html
│ │ └─ popup.js ← Lógica do popup: leitura do storage e tratamento do botão "Zerar".
│ └─ background/ └─ service-worker.js ← Lógica de background: gerenciamento do alarme e persistência do tempo.
├─ icons/ ← Ícones nos tamanhos exigidos (16, 32, 48, 128 px).
├─ docs/ ← Arquivos da landing page para o GitHub Pages.
│ └─ index.html
├─ manifest.json ← Configuração central do Manifest V3.
├─ README.md ← Documentação do projeto (este arquivo).
└─ LICENSE ← Detalhes da licença.

## ⚙️ Requisitos Técnicos e Tecnologias

| Requisito          | Implementação Específica                                                                                 |
| :----------------- | :------------------------------------------------------------------------------------------------------- |
| **Manifest**       | Versão **3**. `version: 1.0.0` (semântica).                                                              |
| **Service Worker** | Gerencia os eventos `onInstalled` e `onAlarm` para a contagem de tempo.                                  |
| **Permissões**     | **Menor Privilégio:** Utiliza apenas `storage` (para persistência) e `alarms` (para execução periódica). |
| **Comunicação**    | O Service Worker salva o tempo; o Popup lê o tempo do `chrome.storage.local`.                            |
| **Tecnologias**    | HTML5, CSS3 e JavaScript Puro.                                                                           |

## 🧑‍💻 Desenvolvedor

- **Nome:** [Meu Nome Completo]
- **Matrícula:** [Minha Matrícula/ID]

## 📜 Licença

Este projeto está licenciado sob a **Licença MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
