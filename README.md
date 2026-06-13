# 🐛 Cartilha Hexápoda - Site Interativo para Ensino Médio

## O Que É

Um **site educativo interativo** sobre Hexápoda (insetos) para estudantes de Ensino Médio, com:

✅ **9 seções de conteúdo** estruturado sobre Hexápoda  
✅ **Quiz interativo** com feedback automático  
✅ **Responsive design** (funciona em celular e desktop)  
✅ **Totalmente grátis** para hospedar e usar  
✅ **Sem anúncios** - 100% educativo  

---

## Conteúdo Incluído

1. **Início** - Introdução ao mundo dos Hexápodes
2. **Anatomia Básica** - Estrutura de cabeça, tórax e abdome
3. **Como Respiram** - Sistema traqueal dos insetos
4. **Alimentação** - Herbívoros, predadores, decompositores
5. **Metamorfose** - Ciclos de vida incompleto e completo
6. **Importância Ecológica** - Polinização, decomposição, controle biológico
7. **Saúde Pública** - Insetos vetores de doenças (Aedes aegypti)
8. **Curiosidades** - Fatos fascinantes sobre insetos
9. **Quiz** - 4 questões com feedback interativo

---

## Como Começar (3 Passos)

### 1️⃣ **Instale Node.js** (gratuito)
   - Acesse: https://nodejs.org
   - Baixe a versão **LTS**
   - Instale normalmente

### 2️⃣ **Prepare o Projeto**
   - Coloque todos os arquivos em uma pasta
   - Abra terminal na pasta
   - Execute:
   ```bash
   npm install
   npm run build
   ```

### 3️⃣ **Coloque Online** (escolha uma opção)

#### ⭐ **Opção A: Vercel (Recomendado - 5 min)**
   1. Crie conta no GitHub: https://github.com
   2. Suba seu código para GitHub
   3. Conecte no Vercel: https://vercel.com
   4. Clique em "Deploy"
   5. Pronto! Seu site está online 🎉

#### **Opção B: Netlify (Também Fácil - 5 min)**
   1. Mesmos passos do GitHub
   2. Acesse: https://netlify.com
   3. Conecte seu repositório
   4. Clique em "Deploy"

#### **Opção C: GitHub Pages (Super Simples - 5 min)**
   1. Suba código para GitHub
   2. Vá em "Settings" → "Pages"
   3. Ative "GitHub Pages"
   4. Seu site estará em: `username.github.io/hexapoda-cartilha`

---

## Arquivos do Projeto

```
hexapoda-cartilha/
├── src/
│   ├── App.jsx          (Aplicação React principal)
│   ├── main.jsx         (Inicialização React)
│   └── index.css        (Estilos globais)
├── index.html           (Arquivo HTML raiz)
├── package.json         (Dependências)
├── vite.config.js       (Configuração build)
├── tailwind.config.js   (Estilos CSS)
├── postcss.config.js    (Processamento CSS)
├── GUIA_DEPLOY.md       (Instruções detalhadas em português)
└── README.md            (Este arquivo)
```

---

## Customizar o Site

### Mudar Cores
No arquivo `src/App.jsx`, procure por `bg-green-` e mude para outras cores:
- `blue`, `purple`, `red`, `amber`, `pink`, etc.

### Adicionar Conteúdo
No arquivo `src/App.jsx`, procure por `pages = {...}` e adicione novas seções.

### Mudar Título
No arquivo `index.html`, mude:
```html
<title>🐛 Cartilha Hexápoda - Ensino Médio</title>
```

---

## Tecnologias Usadas

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Estilos modernos
- **Vite** - Build rápido
- **Lucide Icons** - Ícones de qualidade

Tudo rodando 100% no navegador - sem necessidade de backend!

---

## Funcionalidades

### ✨ Quiz Interativo
- 4 questões sobre o conteúdo
- Feedback imediato (certo/errado)
- Resultado final com pontuação
- Possibilidade de corrigir respostas

### 📱 Responsivo
- Funciona em mobile, tablet e desktop
- Menu hamburguer em telas pequenas
- Formatação automática

### 🎨 Design Educativo
- Paleta de cores acessível
- Textos bem legíveis
- Organização clara
- Ícones visuais para cada conceito

---

## Compartilhar com Alunos

Após fazer o deploy, você terá uma URL como:
```
https://hexapoda-cartilha.vercel.app
```

Compartilhe esse link com seus alunos via:
- ✉️ Email
- 📱 WhatsApp
- 📚 Plataforma de aulas
- 🔗 Google Classroom
- 📝 Postagem no quadro

Os alunos podem:
- ✅ Acessar em qualquer navegador
- ✅ Estudar offline após carregar a página
- ✅ Fazer o quiz quantas vezes quiserem
- ✅ Compartilhar facilmente

---

## Próximas Melhorias (Opcionais)

Se quiser aprimorar o site depois:
- ➕ Adicionar mais imagens/diagramas
- ➕ Incluir vídeos educativos
- ➕ Criar mais quizzes temáticos
- ➕ Adicionar glossário de termos
- ➕ Analytics para ver interesse dos alunos

---

## Suporte

Se tiver dúvidas:

1. **Leia o GUIA_DEPLOY.md** - Tem instruções detalhadas
2. **Documentação React:** https://react.dev/learn
3. **Docs Vercel:** https://vercel.com/docs
4. **Tailwind CSS:** https://tailwindcss.com/docs

---

## Licença

Este material é fornecido gratuitamente para fins educacionais. Fique à vontade para:
- ✅ Usar em sala de aula
- ✅ Modificar conforme necessário
- ✅ Compartilhar com colegas
- ✅ Distribuir aos alunos

---

## Créditos

Desenvolvido para educação de Hexápoda com base em:
- Hickman, C. P. et al. Princípios Integrados de Zoologia (2016)
- Material educativo estruturado para Ensino Médio

---

**Bom uso! 🐛 Sucesso com seus alunos!**
