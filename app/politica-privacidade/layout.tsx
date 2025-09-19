import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados do Maurício - Corretor e Leiloeiro de Imóveis PGFN. Conheça como protegemos suas informações.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaPrivacidadeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
