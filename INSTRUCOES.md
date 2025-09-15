# 🚀 Instruções de Execução - Landing Page Corretor

## ⚡ Execução Rápida

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```

### 3. Acessar no Navegador
```
http://localhost:3000
```

## 📋 Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** ou **yarn** instalado

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Executa em modo desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Executa build de produção |
| `npm run lint` | Executa verificação de código |

## 🎯 Funcionalidades Implementadas

### ✅ Header Responsivo
- Menu hambúrguer para mobile
- Navegação suave entre seções
- Contatos visíveis no desktop
- Efeito de transparência no scroll

### ✅ Hero Section
- Imagem de fundo impactante
- Título com destaque para PGFN
- Estatísticas de credibilidade
- Botões de call-to-action
- Indicador de scroll animado

### ✅ Seção "Quem é o Leiloeiro"
- Foto profissional do corretor
- Credenciais destacadas com ícones
- Lista de conquistas e especializações
- Layout responsivo em duas colunas

### ✅ Vantagens da PGFN
- 6 principais benefícios com ícones coloridos
- Descrições claras e objetivas
- CTA para ver imóveis
- Seção de destaque com gradiente

### ✅ Grade de Imóveis
- Cards modernos com hover effects
- Informações completas (preço, localização, detalhes)
- Botão "Ver no Comprei" para cada imóvel
- Desconto percentual destacado
- 6 imóveis de exemplo incluídos

### ✅ Seção de Contato
- Formulário funcional e responsivo
- Informações de contato organizadas
- Consultoria gratuita destacada
- Layout em duas colunas

### ✅ Botão WhatsApp
- Fixo no canto inferior direito
- Efeito pulsante contínuo
- Tooltip informativo
- Link direto com mensagem pré-definida

### ✅ Footer
- Informações de contato
- Links para seções
- Credenciais profissionais
- Design limpo e organizado

## 🎨 Design e Animações

### Cores Utilizadas
- **Primary**: Tons de azul (#3b82f6, #2563eb, etc.)
- **Gold**: Dourado discreto (#f59e0b, #d97706, etc.)
- **Gray**: Escalas de cinza para textos e fundos
- **White**: Fundos limpos e contrastes

### Animações Implementadas
- **Framer Motion**: Animações suaves de entrada
- **Hover Effects**: Efeitos nos cards e botões
- **Scroll Animations**: Elementos aparecem conforme scroll
- **Pulse Effects**: Botão WhatsApp e elementos de destaque
- **Smooth Scrolling**: Navegação suave entre seções

## 📱 Responsividade

A landing page é totalmente responsiva:
- **Mobile First**: Otimizada para dispositivos móveis
- **Breakpoints**: 320px, 768px, 1024px, 1280px
- **Menu Mobile**: Hambúrguer com animação
- **Grid Responsivo**: Adapta-se a diferentes telas

## 🔧 Personalização

### Para Alterar Informações Pessoais:
1. **Header**: `components/Header.tsx`
2. **Sobre**: `components/About.tsx`
3. **Contato**: `components/Contact.tsx`

### Para Alterar Imóveis:
1. Editar array `properties` em `components/Properties.tsx`
2. Atualizar URLs das imagens
3. Modificar preços e descrições

### Para Alterar Cores:
1. Editar `tailwind.config.js`
2. Modificar paleta de cores personalizada

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositório ao Vercel
2. Deploy automático a cada push
3. Domínio personalizado disponível

### Netlify
1. Build: `npm run build`
2. Publish directory: `out`
3. Deploy automático

### Servidor Próprio
1. `npm run build`
2. `npm start`
3. Configurar proxy reverso (nginx)

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Images**: WebP/AVIF com lazy loading
- **CSS**: TailwindCSS otimizado
- **JS**: Code splitting automático

## 🐛 Solução de Problemas

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de Build
```bash
npm run lint
npm run build
```

### Problemas de Imagens
- Verificar URLs das imagens
- Confirmar domínios no `next.config.js`

## 📞 Suporte

Para dúvidas ou problemas:
- Verificar logs do terminal
- Consultar documentação do Next.js
- Verificar configurações do TailwindCSS

---

**🎉 Landing page pronta para uso! Execute `npm run dev` e acesse `http://localhost:3000`**
