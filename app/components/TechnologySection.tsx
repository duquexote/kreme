import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const featureIcons = [
  {
    id: 'absorption',
    name: 'Absorção Profunda',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" />
      </svg>
    ),
  },
  {
    id: 'stability',
    name: 'Maior Estabilidade',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'protection',
    name: 'Proteção Avançada',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'eco-friendly',
    name: 'Sustentável',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
      </svg>
    ),
  }
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="technology" className="section-padding bg-gradient-to-b from-green-50 to-green-100/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-80 h-80 bg-green-200/50 rounded-full mix-blend-multiply opacity-70 blur-3xl"></div>
      <div className="absolute right-0 bottom-40 w-64 h-64 bg-green-300/40 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto container-padding z-10 relative">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-green-600">TECNOLOGIA K</span>: inovação que transforma resultados
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              A KREME traz para sua clínica o que existe de mais avançado em dermocosméticos: um sistema inteligente de encapsulamento de ativos, capaz de potencializar efeitos e garantir resultados superiores.
            </p>
            
            <div className="space-y-4 text-gray-600">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Nosso diferencial está na entrega precisa e prolongada dos ingredientes, liberados sob estímulos como água, pH ou temperatura, promovendo absorção profunda, maior estabilidade e proteção contra oxidação, luz e calor. Assim, vitaminas e extratos sensíveis chegam ao seu destino com máxima eficácia.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Além da alta performance, nosso processo é sustentável, à base de água e livre de solventes tóxicos, respeitando o meio ambiente e a saúde de quem usa. Sua clínica oferece mais resultados com responsabilidade e tecnologia de ponta.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {featureIcons.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium text-lg text-gray-800">{feature.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection; 