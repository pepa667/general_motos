
# General Moto Peças — Landing Page Premium

Landing page de alta performance para a oficina mecânica e moto peças **General Moto Peças** (Sorocaba/SP). Desenvolvido com foco em confiança técnica, simplicidade e velocidade de carregamento.

Este projeto é uma evolução direta do template [Vite Vanilla JavaScript Starter](https://github.com/doinel1a/vite-vanilla-js) de @doinel1a, customizado para transmitir a tradição e a qualidade de uma oficina de bairro reconhecida.

---

**[🌐 Website Online (Netlify)](https://general-motos.netlify.app/)** (Subdomínio pendente de atualização)

---

## 🛠️ Stack & Tecnologias

- **Runtime & Build:** Node.js + Vite (Vanilla JS)
- **Estilização:** TailwindCSS v4 (Uso nativo de variáveis `@theme` diretamente no CSS, sem `tailwind.config.js`)
- **Qualidade de Código:** ESLint + Prettier
- **Hospedagem & Deploy:** Netlify (Integração contínua automatizada via GitHub)

---

## 🧠 Arquitetura & Modificações do Projeto (ADR)

Para garantir máxima performance e agilidade no desenvolvimento solo, as seguintes decisões foram tomadas:

### 1. Remoção de Git Hooks (Husky & Commitlint)
Toda a suíte de validação local (Husky, Commitlint, Lint-staged) foi removida. Isso agiliza o ciclo de commits diretos e o desenvolvimento livre durante as janelas de foco, sem travas burocráticas de formatação de mensagens.

### 2. Estilização Nativa com Tailwind v4
Adotada a nova especificação do Tailwind v4. Tokens de cores (baseados no vermelho vibrante do logo), fontes e gradientes são definidos diretamente no arquivo CSS principal utilizando diretivas `@theme`. Isso dispensa o uso de arquivos de configuração JavaScript externos e melhora o tempo de build.

### 3. Foco em Conteúdo Técnico e Conveniência
O copy da página foi totalmente pivotado para destacar a mecânica especializada, elétrica, o amplo estoque de moto peças e o serviço de socorro. A estrutura de contato foi adaptada para destacar a conveniência dos dois endereços localizados no mesmo quarteirão.

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js instalado.

### Passo a Passo

1. **Instalar as dependências:**
   ZZZbash
   npm install
   ZZZ

2. **Iniciar o servidor de desenvolvimento:**
   ZZZbash
   npm run dev
   ZZZ

3. **Gerar build de produção local:**
   ZZZbash
   npm run build
   ZZZ

4. **Visualizar o build de produção local:**
   ZZZbash
   npm run preview
   ZZZ

---

## 📄 Licença & Créditos

- Base do Template por [@doinel1a](https://github.com/doinel1a).
- Logotipos de navegadores mantidos sob créditos de [@alrra](https://github.com/alrra).
- O código customizado e as automações de infraestrutura da General Moto Peças estão sob a licença MIT.

```

### [About] do Repositório (Opção Selecionada)

> 🏁 Landing page premium de alta performance para a tradicional oficina General Moto Peças. Desenvolvido em Vanilla JS, Vite e Tailwind v4. Simples, rápido e confiável.

---

O site tá vivo, só que agora ele fala de torque e peças de reposição em vez de som e vitrificação. Tudo limpo e documentado. Copo cheio pra você atacar o HTML e atualizar o texto agora. Bora!