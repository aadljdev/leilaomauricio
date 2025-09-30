import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN | Especialista em Comprei',
    template: '%s | Maurício - Corretor PGFN'
  },
  description: 'Especialista em imóveis da PGFN (Comprei). Advogado, economista e consultor imobiliário com 30+ anos de experiência em execuções fiscais e leilões públicos. Segurança jurídica total.',
  keywords: [
    'imóveis PGFN',
    'leilão imóveis',
    'corretor imóveis',
    'Comprei',
    'execução fiscal',
    'imóveis leilão',
    'PGFN imóveis',
    'leiloeiro oficial',
    'consultor imobiliário',
    'advogado imóveis',
    'economista imóveis',
    'imóveis baratos',
    'leilão público',
    'execução fiscal imóveis',
    'CRECI',
    'imóveis seguros',
    'transparência imóveis'
  ],
  authors: [{ name: 'Maurício Aparecido Gomes de Oliveira' }],
  creator: 'Maurício Aparecido Gomes de Oliveira',
  publisher: 'Maurício - Corretor PGFN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://qualityprimeimoveis.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://qualityprimeimoveis.com.br',
    title: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN | Especialista em Comprei',
    description: 'Especialista em imóveis da PGFN (Comprei). Advogado, economista e consultor imobiliário com 30+ anos de experiência em execuções fiscais e leilões públicos.',
    siteName: 'Maurício - Corretor PGFN',
    images: [
      {
        url: '/images/mauricio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN',
    description: 'Especialista em imóveis da PGFN (Comprei). 30+ anos de experiência em execuções fiscais e leilões públicos.',
    images: ['/images/mauricio-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-google-search-console', // ← Cole aqui o código do Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maurício Aparecido Gomes de Oliveira",
    "jobTitle": "Corretor e Leiloeiro de Imóveis PGFN",
    "description": "Especialista em imóveis da PGFN (Comprei). Advogado, economista e consultor imobiliário com 30+ anos de experiência em execuções fiscais e leilões públicos.",
    "url": "https://qualityprimeimoveis.com.br",
    "image": "https://qualityprimeimoveis.com.br/images/mauricio.png",
    "sameAs": [
      "https://www.linkedin.com/in/mauricio-corretor-pgfn",
      "https://www.instagram.com/mauriciocorretorpgfn"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Advogado",
        "description": "Formado em Direito com especialização em Direito do Trabalho e Processo do Trabalho"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Economista",
        "description": "Profissional ativo com especialização em Economia de Empresas – Área financeira"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Consultor Imobiliário",
        "description": "Com CRECI ativo, especialista em imóveis de Execução fiscal e leilão"
      }
    ],
    "knowsAbout": [
      "Imóveis PGFN",
      "Leilões Públicos",
      "Execução Fiscal",
      "Comprei",
      "Consultoria Imobiliária",
      "Direito do Trabalho"
    ],
    "alumniOf": "Poder Judiciário Federal – Justiça do Trabalho",
    "award": "Mais de 30 anos de experiência em execuções fiscais",
    "offers": {
      "@type": "Service",
      "name": "Consultoria em Imóveis PGFN",
      "description": "Especialista em imóveis da PGFN (Comprei) com total segurança jurídica e transparência",
      "provider": {
        "@type": "Person",
        "name": "Maurício Aparecido Gomes de Oliveira"
      },
      "areaServed": "Brasil",
      "serviceType": "Consultoria Imobiliária"
    }
  }

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
