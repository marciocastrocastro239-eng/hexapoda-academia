# 🐛 Guia: Como Colocar Seu Site Hexápoda Online (GRÁTIS!)

## O Que Você Tem

✅ Um site React completo sobre Hexápoda
✅ Design responsivo (funciona em mobile e desktop)
✅ Quiz interativo com feedback automático
✅ 9 seções de conteúdo estruturado
✅ Pronto para hospedar

---

## 3 OPÇÕES PARA HOSPEDAR (TODAS GRÁTIS)

### **OPÇÃO 1: Vercel (RECOMENDADO - Mais Fácil)** ⭐

**Por quê escolher:** 1 clique, sem código, hospedagem ultra-rápida

#### Passo a Passo:

1. **Crie uma pasta no seu computador:**
   - Crie uma pasta chamada `hexapoda-cartilha`
   - Coloque todos os arquivos que você recebeu dentro dela

2. **Instale o Git (se não tiver):**
   - Acesse: https://git-scm.com/download
   - Baixe e instale (é grátis)

3. **Abra o terminal na pasta do projeto:**
   - Windows: Clique com botão direito → "Abrir PowerShell aqui"
   - Mac/Linux: Abra Terminal e entre na pasta

4. **Execute esses comandos (um por um):**
   ```bash
   npm install
   npm run build
   ```
   Isso cria o site pronto para hospedagem.

5. **Crie uma conta no GitHub:**
   - Acesse: https://github.com
   - Clique em "Sign up"
   - Complete o cadastro (é grátis)

6. **Faça upload para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Cartilha Hexápoda"
   git branch -M main
   git remote add origin https://github.com/[seu-usuario]/hexapoda-cartilha.git
   git push -u origin main
   ```
   (Substitua `[seu-usuario]` pelo seu nome do GitHub)

7. **Conecte no Vercel:**
   - Acesse: https://vercel.com
   - Clique em "Sign up" e escolha "Continue with GitHub"
   - Autorize o Vercel
   - Clique em "New Project"
   - Selecione seu repositório `hexapoda-cartilha`
   - Clique em "Deploy"

**Pronto! 🎉 Seu site estará online em 1-2 minutos!**

URL será algo como: `https://hexapoda-cartilha.vercel.app`

---

### **OPÇÃO 2: Netlify (Também Fácil)**

1. Siga os mesmos passos 1-6 da Opção 1

2. Acesse: https://netlify.com

3. Clique em "Sign up" → "GitHub"

4. Autorize o Netlify

5. Clique em "Add new site" → "Import an existing project"

6. Conecte sua conta GitHub

7. Selecione o repositório `hexapoda-cartilha`

8. Clique em "Deploy site"

**Seu site estará online em 2-3 minutos!**

---

### **OPÇÃO 3: GitHub Pages (Super Simples)**

Se você só quer um site simples sem precisa de backend:

1. Siga passos 1-6 da Opção 1

2. Adicione isso ao `package.json`:
   ```json
   "homepage": "https://[seu-usuario].github.io/hexapoda-cartilha"
   ```

3. Execute:
   ```bash
   npm install gh-pages --save-dev
   ```

4. No `package.json`, adicione esses scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

5. Execute:
   ```bash
   npm run deploy
   ```

**Seu site estará em:** `https://[seu-usuario].github.io/hexapoda-cartilha`

---

## Se Tiver Dúvidas

### Erro: "npm: comando não encontrado"
**Solução:** Instale Node.js em https://nodejs.org (escolha a versão LTS)

### Erro: "git: comando não encontrado"
**Solução:** Instale Git em https://git-scm.com/download

### Erro no `npm install`
**Solução:** 
- Delete a pasta `node_modules`
- Delete `package-lock.json`
- Execute `npm install` novamente

### Quer mudar cores/conteúdo?
- Abra o arquivo `src/App.jsx`
- Procure por cores no formato `bg-green-600` ou `text-blue-900`
- Mude para outras cores disponíveis (blue, red, purple, amber, etc)

---

## Customizações Extras

### Mudar o Título da Página
No arquivo `index.html`, procure:
```html
<title>🐛 Cartilha Hexápoda - Ensino Médio</title>
```
E mude para o que quiser.

### Mudar as Cores Principais
No arquivo `src/App.jsx`, procure por `bg-green-` e `text-green-` e mude:
- `green` → `blue`, `purple`, `red`, `amber`, etc.

### Adicionar Mais Conteúdo
No arquivo `src/App.jsx`, procure por:
```javascript
pages = {
  home: { ... },
  anatomia: { ... }
}
```
Copie uma seção, mude o conteúdo e adicione um novo item no array `navigation`.

---

## Próximos Passos

1. **Escolha uma opção de hospedagem** (recomendo Vercel)
2. **Siga o passo a passo**
3. **Compartilhe o link com seus alunos!**
4. **Faça backup**: seu repositório no GitHub serve como backup automático

---

## Precisa de Ajuda?

- **Docs Vercel:** https://vercel.com/docs
- **Docs Netlify:** https://docs.netlify.com
- **Node.js:** https://nodejs.org/pt-br/docs
- **Git Tutorial:** https://github.com/git-tips/tips

---

**Você consegue! 💪 A cartilha está 100% funcional e pronta para ir online.**
