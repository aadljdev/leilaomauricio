import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso e condições dos serviços do Maurício - Corretor e Leiloeiro de Imóveis PGFN. Conheça nossos termos e condições.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermosUsoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
