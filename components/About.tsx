'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Scale, Building, Award, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Advogado',
      description: 'Formado em Direito com especialização em Direito do Trabalho e Processo do Trabalho.'
    },
    {
      icon: Building,
      title: 'Economista',
      description: 'Profissional ativo com especialização em Economia de Empresas – Área financeira, vasta experiência em execuções fiscais.'
    },
    {
      icon: Scale,
      title: 'Consultor imobiliário',
      description: 'Com CRECI ativo, especialista em imóveis de Execução fiscal e leilão.'
    },
    {
      icon: Award,
      title: 'Aposentado da Justiça do Trabalho',
      description: 'Ampla vivência em processos executivos e leilões públicos'
    }
  ]

  const achievements = [
    'Mais de 30 anos de experiência em execuções fiscais',
    'Especialista em imóveis da PGFN (Comprei)',
    'Transparência total no processo de compra',
    'Acompanhamento jurídico completo'
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50 pt-24 md:pt-20" aria-labelledby="sobre-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem é o <span className="text-primary-600">Leiloeiro</span>
          </h2> */}
          <h2 id="sobre-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-primary-600">Maurício</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a experiência e credenciais que fazem a diferença na hora de 
            escolher seu imóvel com segurança e transparência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Foto e Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <Image
                  src="/images/mauricio.png"
                  alt="Maurício Aparecido Gomes de Oliveira - Corretor e Leiloeiro"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-4 rounded-full shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
              </div>
            </div>

            <article className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maurício Aparecido Gomes de Oliveira</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
              Profissional multidisciplinar com mais de 30 anos de experiência em execuções fiscais e leilões públicos, atua como consultor imobiliário especializado em imóveis da PGFN.
              </p>
              <p className="text-gray-600 leading-relaxed">
              Aposentado da Poder Judiciário Federal – Justiça do Trabalho, possui ampla vivência em processos em fase de execução, garantindo total segurança jurídica para seus clientes na compra de imóveis através da plataforma Comprei.
              </p>
            </article>
          </motion.div>

          {/* Credenciais e Conquistas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Credenciais */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Credenciais Profissionais</h3>
              <div className="grid gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <credential.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{credential.title}</h4>
                      <p className="text-gray-600 text-sm">{credential.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Conquistas */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Por que escolher meus serviços?</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
