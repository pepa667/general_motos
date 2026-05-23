# UFC Sound — Landing Page Premium

Landing page de alta performance para a oficina automotiva premium **UFC Sound** (Sorocaba/SP). Desenvolvido com foco em velocidade ultraveloz, SEO otimizado e arquitetura moderna.

Este projeto foi construído utilizando como base o template [Vite Vanilla JavaScript Starter](https://github.com/doinel1a/vite-vanilla-js) de @doinel1a, customizado e evoluído para as necessidades específicas da marca.

---

**[🌐 Website Online (Netlify)](https://ufc-sound.netlify.app/)**

---

## 🛠️ Stack & Tecnologias

- **Runtime & Build:** Node.js + Vite (Vanilla JS)
- **Estilização:** TailwindCSS v4 (Uso nativo de variáveis `@theme` diretamente no CSS, eliminando o antigo `tailwind.config.js`)
- **Qualidade de Código:** ESLint + Prettier
- **Hospedagem & Deploy:** Netlify (Integração contínua automatizada via GitHub)

---

## 🧠 Arquitetura & Modificações do Projeto (ADR)

Para otimizar o fluxo de desenvolvimento solo e garantir agilidade na evolução da página, as seguintes decisões foram tomadas:

### 1. Remoção de Git Hooks (Husky & Commitlint)
Toda a suíte de validação local (Husky, Commitlint, Lint-staged) foi removida do ambiente de desenvolvimento. Isso agiliza o ciclo de commits diretos durante as janelas de foco de final de semana, removendo travas de formatação de mensagens (Conventional Commits) e permitindo um fluxo livre de desenvolvimento.

### 2. Estilização Nativa com Tailwind v4
Adotada a nova especificação do Tailwind v4, centralizando configurações de tokens, fontes e cores diretamente no arquivo CSS principal utilizando diretivas `@theme`. Isso dispensa o uso de arquivos de configuração JavaScript externos e melhora o tempo de build.

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js instalado.

### Passo a Passo

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gerar build de produção local:**
   ```bash
   npm run build
   ```

4. **Visualizar o build de produção local:**
   ```bash
   npm run preview
   ```

---

## 📄 Licença & Créditos

- Base do Template por [@doinel1a](https://github.com/doinel1a).
- Logotipos de navegadores mantidos sob créditos de [@alrra](https://github.com/alrra).
- O código customizado e as automações de infraestrutura da UFC Sound estão sob a licença MIT.