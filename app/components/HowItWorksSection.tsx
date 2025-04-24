import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Escolha os produtos",
    description: "Selecione as fórmulas e os ativos que mais combinam com o perfil da sua clínica e seus pacientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Personalize a identidade",
    description: "Adicione sua marca, design exclusivo e mensagem personalizada para criar uma experiência única.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Receba na sua clínica",
    description: "Produtos prontos, com qualidade garantida, entregues direto para você atender com excelência.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  }
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-green-100/50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-200/50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como ter seu <span className="text-green-600">portfólio próprio</span> com a KREME
          </h2>
        </motion.div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-20 md:space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0 
                } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number with icon */}
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-white mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(22, 163, 74, 0.1)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-green-600">{step.icon}</span>
                </motion.div>
                
                {/* Step content */}
                <div className="w-full">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-medium text-gray-800 mb-8">
            Simples, rápido e seguro. Você no comando, com o suporte de uma indústria especialista em inovação para o mercado estético.
          </p>
          
          <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-block text-lg">
            Iniciar meu processo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 