import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center container-padding">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--accent-color))]">
            KREME
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#technology" 
            className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] transition-colors"
          >
            Tecnologia
          </Link>
          <Link 
            href="#trends" 
            className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] transition-colors"
          >
            Tendências
          </Link>
          <Link 
            href="#products" 
            className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] transition-colors"
          >
            Produtos
          </Link>
          <Link 
            href="#testimonials" 
            className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] transition-colors"
          >
            Depoimentos
          </Link>
          <Link 
            href="#contact" 
            className="primary-button"
          >
            Quero meu portfólio
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              href="#technology" 
              className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tecnologia
            </Link>
            <Link 
              href="#trends" 
              className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tendências
            </Link>
            <Link 
              href="#products" 
              className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              href="#testimonials" 
              className="font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link 
              href="#contact" 
              className="primary-button inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quero meu portfólio
            </Link>
          </div>
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
};

export default Header; 