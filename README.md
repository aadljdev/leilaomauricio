# Landing Page - Corretor e Leiloeiro de Imóveis PGFN

Uma landing page moderna e responsiva para apresentar imóveis da PGFN (Comprei) com design clean e profissional.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 🎨 Características do Design

- **Design Clean e Minimalista** - Interface elegante e profissional
- **Cores Sóbrias** - Tons de azul, branco, cinza e dourado discreto
- **Totalmente Responsivo** - Adaptado para todos os dispositivos
- **Animações Suaves** - Scroll suave e efeitos hover modernos
- **Tipografia Elegante** - Fonte Inter para melhor legibilidade

## 📱 Seções da Landing Page

1. **Header Fixo** - Navegação com menu âncora e contatos
2. **Hero Section** - Título de impacto com estatísticas
3. **Quem é o Leiloeiro** - Apresentação das credenciais
4. **Vantagens PGFN** - Benefícios da plataforma Comprei
5. **Grade de Imóveis** - Cards com fotos, preços e descrições
6. **Contato** - Formulário e informações de contato
7. **Botão WhatsApp** - Fixo no canto inferior direito

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd landing-page-corretor
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Build para produção

```bash
npm run build
npm start
```

## 🎯 Funcionalidades Principais

### Header Responsivo
- Menu hambúrguer para mobile
- Navegação suave entre seções
- Contatos visíveis no desktop

### Hero Section
- Imagem de fundo impactante
- Título com destaque para PGFN
- Estatísticas de credibilidade
- CTAs para ação

### Seção Sobre
- Foto profissional do corretor
- Credenciais destacadas com ícones
- Lista de conquistas e especializações

### Vantagens PGFN
- 6 principais benefícios
- Ícones coloridos e descrições claras
- CTA para ver imóveis

### Grade de Imóveis
- Cards modernos com hover effects
- Informações completas (preço, localização, detalhes)
- Botão "Ver no Comprei" para cada imóvel
- Desconto percentual destacado

### Seção de Contato
- Formulário funcional
- Informações de contato organizadas
- Consultoria gratuita destacada

### Botão WhatsApp
- Fixo no canto inferior direito
- Efeito pulsante
- Tooltip informativo
- Link direto com mensagem pré-definida

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:
- Primary: Tons de azul
- Gold: Dourado para destaques
- Gray: Escalas de cinza

### Conteúdo
- Imóveis: Editar array `properties` em `components/Properties.tsx`
- Informações pessoais: Atualizar em `components/About.tsx`
- Contatos: Modificar em `components/Contact.tsx` e `components/Header.tsx`

### Imagens
- Hero: Substituir URL em `components/Hero.tsx`
- Sobre: Atualizar em `components/About.tsx`
- Imóveis: Modificar URLs no array `properties`

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)
- **Large Desktop** (1280px+)

## ⚡ Performance

- Imagens otimizadas com Next.js Image
- Animações performáticas com Framer Motion
- CSS otimizado com TailwindCSS
- Lazy loading de componentes

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linter

## 📄 Licença

Este projeto é de uso pessoal e comercial. Sinta-se livre para usar e modificar conforme necessário.

---

**Desenvolvido com ❤️ para apresentar imóveis da PGFN com credibilidade e profissionalismo.**
