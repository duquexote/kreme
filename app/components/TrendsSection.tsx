import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const trends = [
  {
    id: 'clean-beauty',
    title: 'Clean Beauty',
    description: 'Formulas com ingredientes naturais, livres de toxinas e com alta performance. Pureza e resultado se encontram para oferecer à sua marca o que há de mais inovador sem comprometer a saúde da pele.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-.244l.586-.592a1.125 1.125 0 011.187-.284l.293.091a1.125 1.125 0 01.69 1.386l-.223.665a.812.812 0 00.426 1.01l.435.241c.354.197.55.575.55.975v.59c0 .342.175.667.449.863l.557.39c.372.262.61.693.61 1.157v.648c0 .436-.239.836-.622 1.042l-.148.08c-.355.194-.58.581-.58.982v.513c0 .435.238.836.622 1.041l.148.080c.356.194.582.581.582.982V20h-.142a1.082 1.082 0 00-.809.535l-.63 1.056a1.13 1.13 0 01-.946.54h-1.186c-.373 0-.718-.195-.911-.513l-.307-.508a1.13 1.13 0 00-.945-.54h-.675c-.374 0-.72.195-.914.514l-.307.508a1.13 1.13 0 01-.911.513h-1.186c-.473 0-.868-.32-.956-.738l-.052-.248a1.135 1.135 0 00-.519-.744l-.442-.244a1.13 1.13 0 01-.487-1.392l.1-.21a1.13 1.13 0 00-.05-1.063l-.172-.308a1.13 1.13 0 01.055-1.187l.215-.35a1.13 1.13 0 00.018-1.168l-.307-.513a1.13 1.13 0 01.073-1.243l.04-.048a1.131 1.131 0 00.1-1.345l-.063-.09a1.129 1.129 0 00-1.05-.467l-.293.043a1.13 1.13 0 01-1.133-.645l-.124-.283a1.13 1.13 0 00-1.224-.612l-.316.071a1.13 1.13 0 01-1.278-.767l-.08-.256a1.13 1.13 0 00-1.124-.756h-.114a1.129 1.129 0 00-1.020.675l-.095.232a1.13 1.13 0 01-1.242.684l-.217-.053a1.13 1.13 0 00-1.2.452l-.442.607a1.13 1.13 0 01-1.231.4l-.366-.12a1.13 1.13 0 00-1.256.274l-.56.603a1.13 1.13 0 01-1.28.25l-.307-.124a1.13 1.13 0 00-1.243.08l-.687.51a1.13 1.13 0 01-1.264.132l-.248-.127a1.13 1.13 0 00-1.08.045l-.862.504a1.13 1.13 0 01-1.22.01l-.112-.066a1.13 1.13 0 00-1.095-.035l-.875.405a1.13 1.13 0 01-1.242-.237l-.053-.057a1.13 1.13 0 00-1.095-.273l-.603.146a1.13 1.13 0 01-1.127-.455l-.254-.338a1.13 1.13 0 00-1.023-.4l-.412.08a1.128 1.128 0 01-.963-.204l-.442-.34a1.13 1.13 0 00-1-.188l-.7.156a1.13 1.13 0 01-.818-.137l-.517-.34a1.13 1.13 0 00-.909-.088l-.964.267Z" />
      </svg>
    ),
  },
  {
    id: 'personalization',
    title: 'Personalização Total',
    description: 'Adapte sua linha com os ingredientes mais adequados para o seu público-alvo, criando protocolos de tratamento exclusivos que refletem a identidade da sua clínica e atendem as necessidades específicas de seus clientes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: 'biotech',
    title: 'Biotecnologia Avançada',
    description: 'Ativos encapsulados que são liberados somente onde e quando necessário. Esta tecnologia de ponta garante máxima eficácia e resultados visíveis com uso mínimo de recursos, otimizando a experiência do paciente.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    id: 'sustainability',
    title: 'Sustentabilidade',
    description: 'Embalagens eco-friendly e processos de produção responsáveis. Nossa tecnologia de encapsulamento à base de água é livre de solventes tóxicos, respeitando o meio ambiente e a saúde de quem usa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  }
];

const TrendsSection = () => {
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
    <section id="trends" className="section-padding bg-gradient-to-b from-green-100/40 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-40 top-20 w-96 h-96 bg-green-200/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute left-0 bottom-40 w-80 h-80 bg-green-200/50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tendências que <span className="text-green-600">valorizam</span> sua marca
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
              Estar à frente no mercado de estética é entender o que move os novos consumidores. 
              Duas tendências globais já definem os próximos anos — e sua clínica pode sair na frente ao aderir agora:
            </p>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {trends.map((trend) => (
            <motion.div
              key={trend.id}
              variants={itemVariants}
              className="card p-8 border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <motion.div 
                className="text-green-600 mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {trend.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4">{trend.title}</h3>
              
              <p className="text-gray-600">{trend.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium text-gray-800">
            Antecipe-se. Eleve o padrão da sua clínica com produtos alinhados ao que há de mais desejado no mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendsSection; 