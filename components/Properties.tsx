'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Bed, Bath, Square, Car } from 'lucide-react'

export default function Properties() {
  // Dados de exemplo dos imóveis
  const properties = [
    {
      id: 1,
      title: 'Imóvel com galpão industrial',
      price: 'R$ 6.773.697,50',
      originalPrice: '6.773.697,50',
      description: 'Excelente imóvel com área de 9.196,00 m2 com portaria, galpões e estacionamentos para uso em distribuição de produtos,  atacadistas e supermercados, construção de condomínios, centro de distribuição de produtos, garagem para ônibus, transportadora, visto que se encontra em entrocamento de várias rodovias. Excelente oportunidade!!!',
      image: 'https://comprei.pgfn.gov.br/gateway/imagem/anuncio/180989',
      location: 'Av. Saburo Akamine, Nº 1555 - De 1000 A 1198 - Lado Par - De 1000 A 1198 Lado Par, 1555 , Jardim Matheus Maniero - Rio Claro/SP - CEP: 13.504-505',
      platform: 'PGFN - Comprei',
      details: {
        bedrooms: 0,
        bathrooms: 0,
        area:  919600,
        parking: 0
      },
      compreiLink: 'https://comprei.pgfn.gov.br/anuncio/detalhe/50142'
    },
    {
      id: 2,
      title: 'Casa 4 Quartos - Jardins',
      price: 'R$ 320.000',
      originalPrice: 'R$ 580.000',
      description: 'Casa térrea com 4 quartos, 3 banheiros, quintal e garagem para 2 carros. Ideal para família.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Jardins, São Paulo - SP',
      platform: 'PGFN - Comprei ',
      details: {
        bedrooms: 4,
        bathrooms: 3,
        area: 120,
        parking: 2
      },
      compreiLink: 'https://comprei.gov.br/imovel/124'
    },
    {
      id: 3,
      title: 'Apartamento 2 Quartos - Pinheiros',
      price: 'R$ 95.000',
      originalPrice: 'R$ 180.000',
      description: 'Apartamento compacto e funcional, ideal para investimento ou primeira moradia. Próximo ao transporte público.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Pinheiros, São Paulo - SP',
      platform: 'Particular',
      details: {
        bedrooms: 2,
        bathrooms: 1,
        area: 55,
        parking: 0
      },
      compreiLink: 'https://comprei.gov.br/imovel/125'
    },
    {
      id: 4,
      title: 'Cobertura 3 Quartos - Itaim Bibi',
      price: 'R$ 450.000',
      originalPrice: 'R$ 750.000',
      description: 'Cobertura com vista panorâmica, 3 quartos, 2 banheiros, terraço e área de lazer completa.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Itaim Bibi, São Paulo - SP',
      platform: 'PGFN - Comprei',
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: 110,
        parking: 2
      },
      compreiLink: 'https://comprei.gov.br/imovel/126'
    },
    {
      id: 5,
      title: 'Casa 5 Quartos - Alto de Pinheiros',
      price: 'R$ 280.000',
      originalPrice: 'R$ 520.000',
      description: 'Casa espaçosa com 5 quartos, 4 banheiros, quintal grande e garagem coberta. Perfeita para família numerosa.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Alto de Pinheiros, São Paulo - SP',
      platform: 'Particular',
      details: {
        bedrooms: 5,
        bathrooms: 4,
        area: 150,
        parking: 3
      },
      compreiLink: 'https://comprei.gov.br/imovel/127'
    },
    {
      id: 6,
      title: 'Terreno Comercial - Zona Sul',
      price: 'R$ 65.000',
      originalPrice: 'R$ 120.000',
      description: 'Terreno comercial no centro da cidade, ideal para construção ou investimento. Próximo a tudo.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Centro, São Paulo - SP',
      platform: 'Particular',
      details: {
        bedrooms: 0,
        bathrooms: 0,
        area: 500,
        parking: 0
      },
      compreiLink: 'https://comprei.gov.br/imovel/128'
    }
  ]

  return (
    <section id="imoveis" className="py-20 bg-gray-50 pt-24 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Imóveis <span className="text-primary-600">Disponíveis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira nossa seleção de imóveis da PGFN com preços imperdíveis. 
            Todos com documentação regularizada e prontos para negociação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback para imagem padrão se a original falhar
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.platform}
                  </div>
                  {/* <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round((1 - parseFloat(property.price.replace(/[^\d]/g, '')) / parseFloat(property.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {property.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-primary-600">
                        {property.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {property.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      {property.details.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.details.bedrooms}</span>
                        </div>
                      )}
                      {property.details.bathrooms > 0 && (
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.details.bathrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.details.area}m²</span>
                      </div>
                      {property.details.parking > 0 && (
                        <div className="flex items-center">
                          <Car className="w-4 h-4 mr-1" />
                          <span>{property.details.parking}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {property.description}
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href={property.compreiLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Ver no Comprei</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Properties CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Temos acesso a centenas de imóveis da PGFN. Entre em contato e 
              vamos encontrar o imóvel perfeito para você.
            </p>
            <motion.a
              href="#contato"
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Falar com Especialista</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
