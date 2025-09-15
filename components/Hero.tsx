'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Home, Gavel, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          alt="Imóveis de leilão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full px-6 py-3"
          >
            <Gavel className="w-5 h-5 text-gold-400" />
            <span className="text-gold-100 font-medium">Leiloeiro Oficial</span>
          </motion.div> */}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Imóveis da{' '}
            <span className="text-gold-400">PGFN</span>
            <br />
            com Segurança
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Advogado, contador e corretor especializado em execuções fiscais. 
            Encontre o imóvel ideal com total transparência e segurança jurídica.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#imoveis"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              <span>Ver Imóveis Disponíveis</span>
            </motion.a>
            
            <motion.a
              href="#sobre"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-5 h-5" />
              <span>Conheça Minha Experiência</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">25+</div>
              <div className="text-gray-200">Anos de Experiência</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-gray-200">Imóveis Vendidos</div>
            </div> */}
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-gray-200">Segurança Jurídica</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white"
        >
          <span className="text-sm font-medium">Role para baixo</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
