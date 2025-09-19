'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Termos de Uso</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          {/* Intro */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Termos e Condições</h2>
              <p className="text-gray-600">Última atualização: Janeiro de 2025</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Aceitação */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Aceitação dos Termos</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Ao utilizar nossos serviços, você concorda com estes termos de uso. Se não concordar, não utilize nossos serviços.</p>
              </div>
            </section>

            {/* Serviços */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Nossos Serviços</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Oferecemos os seguintes serviços:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consultoria especializada em imóveis da PGFN</li>
                  <li>Orientação jurídica para compra de imóveis</li>
                  <li>Acompanhamento em leilões da plataforma Comprei</li>
                  <li>Suporte via WhatsApp e outros canais</li>
                </ul>
              </div>
            </section>

            {/* Responsabilidades */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsabilidades</h3>
              <div className="pl-7 space-y-4 text-gray-700">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Nossas Responsabilidades:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Prestar consultoria com base em nossa experiência</li>
                    <li>Manter confidencialidade das informações</li>
                    <li>Atualizar informações sobre imóveis disponíveis</li>
                    <li>Fornecer suporte durante o processo de compra</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Suas Responsabilidades:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Verificar documentação dos imóveis de interesse</li>
                    <li>Consultar profissionais para decisões importantes</li>
                    <li>Respeitar os prazos estabelecidos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitações */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Limitações</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Importante entender que:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Não garantimos a disponibilidade de imóveis específicos</li>
                  <li>Preços e condições podem variar conforme a PGFN</li>
                  <li>Não somos responsáveis por decisões de terceiros</li>
                  <li>Consultoria não substitui análise jurídica específica</li>
                </ul>
              </div>
            </section>

            {/* Modificações */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modificações</h3>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas através do site.</p>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
              <div className="space-y-2 text-gray-700">
                <p>Para dúvidas sobre estes termos:</p>
                <p><strong>Email:</strong> mauricioag.oliveira@creci.org.br</p>
                <p><strong>WhatsApp:</strong> (19) 99601-8383</p>
                <p><strong>Horário:</strong> Seg-Sex, 8h às 18h</p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
