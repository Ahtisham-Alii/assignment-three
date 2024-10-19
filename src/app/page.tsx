import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-yellow-500 min-h-screen" >
    <Header />
    <Hero />
    <Footer />
    </div>
    </div>
  )
}

export default page