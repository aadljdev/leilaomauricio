'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PoliticaPrivacidade() {
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
            <h1 className="text-2xl font-bold text-gray-900">Política de Privacidade</h1>
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
              <Shield className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Proteção de Dados</h2>
              <p className="text-gray-600">Última atualização: Janeiro de 2025</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Coleta de Dados */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Coleta de Dados</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Coletamos apenas os dados necessários para prestar nossos serviços:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nome completo e dados de contato</li>
                  <li>Informações sobre imóveis de interesse</li>
                  <li>Dados de comunicação (WhatsApp, email, telefone)</li>
                  <li>Informações de navegação no site (cookies essenciais)</li>
                </ul>
              </div>
            </section>

            {/* Uso dos Dados */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Uso dos Dados</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prestar consultoria imobiliária especializada</li>
                  <li>Enviar informações sobre imóveis disponíveis</li>
                  <li>Realizar contato via WhatsApp e outros canais</li>
                  <li>Melhorar nossos serviços e atendimento</li>
                </ul>
              </div>
            </section>

            {/* Proteção */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Lock className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Proteção e Segurança</h3>
              </div>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Seus dados estão protegidos através de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia SSL em todas as comunicações</li>
                  <li>Acesso restrito apenas a pessoal autorizado</li>
                  <li>Armazenamento seguro em servidores confiáveis</li>
                  <li>Não compartilhamento com terceiros sem consentimento</li>
                </ul>
              </div>
            </section>

            {/* Seus Direitos */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seus Direitos</h3>
              <div className="pl-7 space-y-3 text-gray-700">
                <p>Você tem o direito de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão dos seus dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                </ul>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
              <div className="space-y-2 text-gray-700">
                <p>Para questões sobre privacidade e proteção de dados:</p>
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
