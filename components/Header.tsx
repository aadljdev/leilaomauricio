'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Imóveis', href: '#imoveis' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo e Nome */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="/images/logo.png" 
              alt="Logo Maurício" 
              width={80} 
              height={72} 
              className="object-contain rounded-sm"
            />
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>Quality Prime </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200 drop-shadow-md'
              }`}>Negócios Imobiliários</p>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-gold-300 drop-shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contatos Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+5519996018383"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-gold-300 drop-shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(19) 99601-8383</span>
            </motion.a>
            <motion.a
              href="mailto:mauricioag.oliveira@creci.org.br"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-gold-300 drop-shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">mauricioag.oliveira@creci.org.br</span>
            </motion.a>
          </div>

          {/* Menu Mobile Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20 drop-shadow-md'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-4 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/30'
          }`}>
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-gold-300 drop-shadow-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:+5519996018383"
                className={`flex items-center space-x-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-gold-300 drop-shadow-md'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(19) 99601-8383</span>
              </a>
              <a
                href="mailto:mauricioag.oliveira@creci.org.br"
                className={`flex items-center space-x-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-gold-300 drop-shadow-md'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">mauricioag.oliveira@creci.org.br</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
