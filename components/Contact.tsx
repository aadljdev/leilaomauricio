'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      link: 'tel:+5511999999999',
      description: 'Atendimento de segunda a sexta, 8h às 18h'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@mauricio.com',
      link: 'mailto:contato@mauricio.com',
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo - SP',
      link: '#',
      description: 'Atendimento em toda região metropolitana'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Seg - Sex: 8h às 18h',
      link: '#',
      description: 'Sábados: 8h às 12h (apenas WhatsApp)'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-primary-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para encontrar seu imóvel ideal? Entre em contato e vamos 
            conversar sobre suas necessidades e expectativas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Estou à disposição para esclarecer todas as suas dúvidas sobre 
                imóveis da PGFN e auxiliar no processo de compra com total 
                transparência e segurança.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-primary-600 hover:text-primary-700 font-medium text-lg block mb-1"
                    >
                      {info.value}
                    </a>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gold-50 border border-gold-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gold-800 mb-2">
                    Consultoria Gratuita
                  </h4>
                  <p className="text-gold-700 text-sm">
                    Ofereço consultoria gratuita para análise de imóveis da PGFN. 
                    Vamos juntos encontrar a melhor oportunidade para você.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Imóvel de Interesse
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="terreno">Terreno</option>
                  <option value="comercial">Imóvel Comercial</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-me sobre suas necessidades e expectativas..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
