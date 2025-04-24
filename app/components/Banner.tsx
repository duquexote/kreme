import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden relative z-50"
        >
          <div className="container mx-auto py-3 px-4 md:px-8 lg:px-12 flex justify-between items-center">
            <div className="flex-1 text-center">
              <p className="text-sm md:text-base font-medium">
                <span className="hidden md:inline">🎉 Promoção especial:</span> Desconto de 15% no primeiro pedido! <a href="#contact" className="underline hover:no-underline font-bold">Saiba mais</a>
              </p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="flex-shrink-0 ml-3 text-white/80 hover:text-white focus:outline-none transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner; 