import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN',
    short_name: 'Maurício PGFN',
    description: 'Especialista em imóveis da PGFN (Comprei). Advogado, economista e consultor imobiliário com 30+ anos de experiência em execuções fiscais e leilões públicos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'real estate', 'legal'],
    lang: 'pt-BR',
  }
}
