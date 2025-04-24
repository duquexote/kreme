import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';

const testimonials = [
  {
    id: 1,
    text: "A qualidade dos produtos KREME agregou valor aos meus protocolos e elevou a satisfação dos meus pacientes.",
    author: "Dra. Camila",
    title: "Dermatologista",
    rating: 5,
  },
  {
    id: 2,
    text: "Escolhi a KREME pelo compromisso com inovação e segurança. O resultado é visível e meus clientes notam a diferença.",
    author: "Estética Exclusive",
    title: "Clínica de Estética",
    rating: 5,
  },
  {
    id: 3,
    text: "Desde que incorporamos os produtos KREME em nossos tratamentos, observamos resultados superiores e maior fidelização dos pacientes.",
    author: "Dr. Ricardo",
    title: "Cirurgião Plástico",
    rating: 5,
  },
  {
    id: 4,
    text: "O que me conquistou na KREME foi a possibilidade de ter produtos exclusivos com a identidade da minha clínica, mantendo a qualidade premium.",
    author: "Beauty Center",
    title: "Rede de Clínicas",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-advance slides
  useEffect(() => {
    if (!isInView || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, isAutoPlaying]);

  // Pause autoplay when user interacts with controls
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
    pauseAutoPlay();
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
    pauseAutoPlay();
  };

  // Swipe handlers for mobile
  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
    trackMouse: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-40 top-20 w-96 h-96 bg-green-500/10 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -left-20 bottom-40 w-80 h-80 bg-green-600/10 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Resultados <span className="text-green-600">reconhecidos</span>, confiança comprovada
          </h2>
          
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base md:text-lg text-gray-700">
              Veja o que profissionais e clínicas que já utilizam KREME têm a dizer sobre nossos produtos e diferenciais:
            </p>
          </div>
        </motion.div>
        
        <div className="relative px-4 md:px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative overflow-hidden mx-auto max-w-5xl"
            {...handlers}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-yellow-400">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg italic">&ldquo;{testimonial.text}&rdquo;</p>
                    
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === i 
                    ? 'bg-green-600 w-5 md:w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows - hidden on very small screens, visible on larger screens */}
          <button 
            className="absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none z-10 hidden sm:block"
            onClick={goToPrevSlide}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 bg-white rounded-full p-1.5 md:p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none z-10 hidden sm:block"
            onClick={goToNextSlide}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-10 md:mt-16"
        >
          <a 
            href="https://wa.me/5511950668657?text=Olá! Gostaria de saber mais sobre os produtos KREME para minha clínica." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Fale com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 