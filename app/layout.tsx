import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maurício - Corretor e Leiloeiro de Imóveis PGFN',
  description: 'Especialista em imóveis da PGFN (Comprei). Advogado, contador e corretor com ampla experiência em execuções e leilões públicos.',
  keywords: 'imóveis PGFN, leilão imóveis, corretor imóveis, Comprei, execução fiscal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
