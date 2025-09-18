'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Scale, Building, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Maurício Ap. Gomes de Oliveira</h3>
                <p className="text-gray-400 text-sm">Consultor Imobiliário Credenciado </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Especialista em imóveis da PGFN. 
              Advogado, Economista  e Consultor Imobiliário Credenciado pela PGNF, oferecendo total segurança jurídica 
              na compra de imóveis através da plataforma Comprei.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <a
                href="tel:+5519996018383"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(19) 99601-8383</span>
              </a>
              <a
                href="mailto:mauricioag.oliveira@creci.org.br"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>mauricioag.oliveira@creci.org.br</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Rio Claro – SP Atendimento em todo o Estado de São Paulo</span>
              </div>
            </div>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <div className="space-y-3">
              <a href="#imoveis" className="block text-gray-400 hover:text-white transition-colors">
                Imóveis PGFN
              </a>
              <a href="#vantagens" className="block text-gray-400 hover:text-white transition-colors">
                Vantagens Comprei
              </a>
              <a href="#sobre" className="block text-gray-400 hover:text-white transition-colors">
                Consultoria Jurídica
              </a>
              <a href="#contato" className="block text-gray-400 hover:text-white transition-colors">
                Acompanhamento
              </a>
            </div>
          </motion.div>

          {/* Horário de Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Horário de Atendimento</h4>
            <div className="space-y-3">
              <div className="text-gray-400">
                <p className="font-medium text-white mb-1">Seg – Sex: 8h às 18h</p>
                <p className="text-sm">Sábados: 8h às 12h (apenas WhatsApp)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Quality Prime Negócios Imobiliários. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
