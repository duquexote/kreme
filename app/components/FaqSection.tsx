import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Como funciona o processo de personalização dos produtos?",
    answer: "Você escolhe as fórmulas, ativos e características que deseja em sua linha. Nossa equipe de formuladores irá guiá-lo nas melhores escolhas para seu público-alvo e identidade de marca. Depois, desenvolvemos sua identidade visual e produzimos os produtos exclusivos para sua clínica."
  },
  {
    question: "Qual é a quantidade mínima para começar?",
    answer: "Oferecemos opções flexíveis para diferentes tamanhos de negócio. Você pode começar com quantidades menores e escalar conforme a demanda. Entre em contato para discutirmos as possibilidades que melhor se ajustam ao seu caso."
  },
  {
    question: "Os produtos possuem registro na ANVISA?",
    answer: "Sim, todos os nossos produtos possuem registro na ANVISA e seguem rigorosos padrões de qualidade e segurança. Utilizamos ingredientes aprovados e nossas instalações são certificadas para produção de cosméticos de alta performance."
  },
  {
    question: "Quanto tempo leva para desenvolver uma linha personalizada?",
    answer: "O processo completo leva em média 45 dias, desde a definição das fórmulas e da identidade visual até a entrega dos primeiros lotes. Trabalharemos com você em cada etapa para garantir que sua linha atenda todas as suas expectativas."
  },
  {
    question: "Há suporte para treinamento da equipe sobre os produtos?",
    answer: "Absolutamente! Oferecemos treinamento completo para você e sua equipe sobre benefícios, modo de uso e ativos de cada produto. Também disponibilizamos materiais educativos que podem ser usados com seus clientes."
  }
];

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-green-100/40 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute right-0 bottom-40 w-80 h-80 bg-green-200/30 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="text-green-600">frequentes</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Respostas para as dúvidas mais comuns sobre o desenvolvimento de produtos com a sua marca:
            </p>
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6">
            Tem outras dúvidas? Entre em contato conosco.
          </p>
          
          <a 
            href="https://wa.me/5511950668657?text=Olá!%20Tenho%20dúvidas%20sobre%20os%20produtos%20KREME." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Fale com nossa equipe</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection; 