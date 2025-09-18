'use client'

import { motion } from 'framer-motion'
import { Shield, DollarSign, Eye, Users, FileText, Clock } from 'lucide-react'

export default function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: 'Segurança Jurídica',
      description: 'Todos os imóveis passam por rigorosa análise jurídica, garantindo títulos limpos e sem pendências.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Preços Abaixo do Mercado',
      description: 'Imóveis com valores até 50% menores que o mercado tradicional, sem intermediários inflacionando preços.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Total Transparência',
      description: 'Processo 100% transparente com documentação completa e acompanhamento em todas as etapas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Sem Intermediários Ocultos',
      description: 'Compra direta com a PGFN, sem comissões ocultas ou taxas surpresa no processo.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Documentação Completa',
      description: 'Todos os documentos necessários são fornecidos e analisados por especialistas antes da compra.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Processo Ágil',
      description: 'Tramitação rápida e eficiente, com prazo médio de 30 dias para finalização da compra.',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <section id="vantagens" className="py-20 bg-white pt-24 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que comprar pela{' '}
            <span className="text-primary-600">PGFN (Comprei)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens exclusivas de adquirir imóveis através da plataforma 
            oficial da Procuradoria-Geral da Fazenda Nacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-primary-200 h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <advantage.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para encontrar seu imóvel ideal?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Com toda a segurança jurídica e transparência que você precisa, 
              sem surpresas ou custos ocultos.
            </p>
            <motion.a
              href="#imoveis"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver Imóveis Disponíveis</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
