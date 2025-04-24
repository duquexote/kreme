import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden mt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50/70 z-0"></div>
      
      {/* Abstract shapes for modern look */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10 container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Sua clínica com <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">marca própria</span>.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Tecnologia, personalização e performance no portfólio da sua marca.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Desperte o protagonismo do seu negócio com produtos de alta tecnologia, 
            desenvolvidos para resultados reais e reconhecimento de valor no mercado de estética.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <a href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20linha%20de%20produtos%20KREME." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center space-x-2 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Fale com um consultor</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Product mockup with the provided image */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-green-300 opacity-20 rounded-full"></div>
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.05, rotate: 0 }}
              initial={{ rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/images/productMockup.png"
                alt="KREME Product Mockup"
                width={400}
                height={500}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <div className="text-sm text-gray-500 mb-2">Conheça mais</div>
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 