'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Properties from '@/components/Properties'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Properties />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
