import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 'hyalocollagreen',
    name: 'SÉRUM HYALOCOLLAGREEN 30ML',
    description: 'Firmeza, hidratação e rejuvenescimento em um só passo.',
    details: 'Sérum inteligente que combina colágeno vegano e ácido hialurônico encapsulados para entregar firmeza, hidratação e preenchimento. Ideal para tratamentos rejuvenescedores e lifting natural.',
    price: 'A partir de: R$14,40',
    benefits: ['Redução de rugas', 'Firmeza das pálpebras', 'Volume facial restaurado', 'Ação antioxidante'],
    tag: 'Mais vendido',
    ativos: 'Colágeno vegano, ácido hialurônico encapsulado.',
    foto: '/produtos/serum.png'
  },
  {
    id: 'redensifier',
    name: 'SÉRUM REDENSIFIER 30ML',
    description: 'Restaura a densidade e firmeza da pele madura.',
    details: 'Desenvolvido para restaurar a densidade e firmeza da pele, este sérum estimula a produção de colágeno e melhora a elasticidade, promovendo uma aparência mais jovem e revitalizada.',
    price: 'A partir de: R$14,20',
    benefits: ['Redensificação da pele', 'Efeito tensor', 'Firmeza', 'Preenchimento natural'],
    tag: 'Novo',
    ativos: 'Proteína hidrolisada de ervilha, ácido hialurônico, extrato de confrei, extrato de cebola.',
    foto: '/produtos/serum.png'
  },
  {
    id: 'niacinamida',
    name: 'SÉRUM NIACINAMIDA 30ML',
    description: 'Ação calmante, clareadora e anti-inflamatória.',
    details: 'Sérum facial com ação calmante, clareadora e anti-inflamatória, ideal para peles sensíveis, acneicas ou com manchas. Tecnologia de encapsulamento para maior eficácia e conforto.',
    price: 'A partir de: R$14,20',
    benefits: ['Anti-inflamatório', 'Clareador', 'Controle de oleosidade', 'Proteção contra luz azul'],
    tag: 'Alguma Coisa',
    ativos: 'Niacinamida 10% encapsulada.',
    foto: '/produtos/serum.png'
  },
  {
    id: 'ascorbic-acid',
    name: 'CREME COM ASCORBIC ACID 30G',
    description: 'Vitamina C pura encapsulada para alta eficácia.',
    details: 'Com vitamina C pura encapsulada, este creme entrega efeito antioxidante com alta estabilidade, uniformizando o tom da pele, iluminando e estimulando o colágeno.',
    price: 'A partir de: R$29,90',
    benefits: ['Antioxidante', 'Clareador', 'Firmeza', 'Uniformização do tom'],
    tag: 'Tecnologia avançada',
    ativos: 'Ácido ascórbico encapsulado.',
    foto: '/produtos/creme_ascorbic.png'
  },
  {
    id: 'sabonete-espuma',
    name: 'SABONETE ESPUMA FACIAL 150ML',
    description: 'Limpeza suave com ativos botânicos e ação calmante.',
    details: 'Espuma suave com ativos botânicos e ação calmante. Limpa sem agredir e deixa a pele revigorada, hidratada e fresca desde o primeiro uso.',
    price: 'A partir de: R$18,75',
    benefits: ['Limpeza suave', 'Calmante', 'Revitalizante', 'Hidratante'],
    tag: 'Alguma Coisa',
    ativos: 'Camomila, ginseng, centella asiática, colágeno.',
    foto: '/produtos/sabonete_espuma_facial.png'
  },
  {
    id: 'sabonete-antiestresse',
    name: 'SABONETE FACIAL ANTIESTRESSE 100ML',
    description: 'Aroma relaxante e ação antioxidante.',
    details: 'Sabonete com aroma relaxante e ação antioxidante, ideal para protocolos de relaxamento ou pós-procedimento.',
    price: 'A partir de: R$13,20',
    benefits: ['Calmante', 'Antioxidante', 'Equilíbrio cutâneo', 'Relaxamento sensorial'],
    tag: 'Alguma Coisa',
    ativos: 'Ylang ylang, frulix de maracujá, frulix de pitanga, CBA.',
    foto: '/produtos/sabonete_facil_antiestresse.png'
  },
  {
    id: 'esfoliante-corporal',
    name: 'ESFOLIANTE CORPORAL COM MICROESFERAS 150G',
    description: 'Esfoliação com ativos naturais e microesferas de vitamina E.',
    details: 'Esfoliação com ativos naturais e microesferas de vitamina E. Remove células mortas e nutre a pele, promovendo toque macio e renovado.',
    price: 'A partir de: R$12,84',
    benefits: ['Esfoliação', 'Hidratação profunda', 'Renovação', 'Ação antioxidante'],
    tag: 'Alguma Coisa',
    ativos: 'Mel, manga, amêndoa doce, d-pantenol, microesferas de vitamina E.',
    foto: '/produtos/esfoliante_corporal.png'
  },
  {
    id: 'hidratante-facial',
    name: 'HIDRATANTE FACIAL 100ML',
    description: 'Textura leve, ação antioxidante e regeneradora.',
    details: 'Textura leve, ação antioxidante e regeneradora. Ideal para rotinas diárias de hidratação e reparo cutâneo.',
    price: 'A partir de: R$11,60',
    benefits: ['Hidratação prolongada', 'Regeneração', 'Calmante', 'Melhora da elasticidade'],
    tag: 'Alguma Coisa',
    ativos: 'Licuri, amêndoa doce, centella asiática, phytocare AOX.',
    foto: '/produtos/hidratante_facial.png'
  },
  {
    id: 'hidratante-corporal',
    name: 'HIDRATANTE CORPORAL 150ML',
    description: 'Hidratante leve, de rápida absorção, com ativos nutritivos.',
    details: 'Hidratante leve, de rápida absorção, com ativos nutritivos da biodiversidade brasileira. Toque suave e revitalização completa.',
    price: 'A partir de: R$15,72',
    benefits: ['Nutrição intensa', 'Suavidade', 'Ação antioxidante', 'Hidratação prolongada'],
    tag: 'Alguma Coisa',
    ativos: 'Açaí, amêndoa doce, manga, d-pantenol.',
    foto: '/produtos/hidratante_corporal.png'
  }
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-green-100/50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute right-0 bottom-40 w-64 h-64 bg-green-200/50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seu <span className="text-green-600">portfólio exclusivo</span>: escolha, personalize, conquiste
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
              Potencialize seus protocolos com produtos desenvolvidos para resultados visíveis, seguros e inovadores. 
              Conheça o mix KREME — alta tecnologia, ingredientes de performance e diferenciação real para sua clínica.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="card p-6 border border-gray-100 h-full flex flex-col relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.tag && (
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-medium py-1 px-3 rounded-full z-10">
                  {product.tag}
                </div>
              )}
              
              <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg flex items-center justify-center mb-6">
                {product.foto ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={product.foto}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg p-2"
                      priority={index < 3}
                    />
                  </div>
                ) : (
                  <div className="w-24 h-36 bg-white p-2 rounded-lg shadow-md transform rotate-3 flex flex-col items-center justify-center transition-transform hover:rotate-0 duration-300">
                    <div className="text-xs font-bold text-green-600 mb-2">KREME</div>
                    <div className="text-[8px] text-center text-gray-500 px-1">{product.name}</div>
                  </div>
                )}
              </div>
              
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-3">{product.description}</p>
              <p className="text-sm text-gray-600 mb-3 flex-grow">{product.details}</p>
              
              <div className="mb-2">
                <p className="text-sm font-medium">Ativos principais:</p>
                <p className="text-xs text-gray-600">{product.ativos}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-medium">Principais benefícios:</p>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-green-50 rounded-full py-1 px-3 text-green-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <p className="font-medium text-xl text-green-600">{product.price}</p>
              </div>
              
              <motion.div 
                className="mt-4 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredProduct === product.id ? 1 : 0,
                  y: hoveredProduct === product.id ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={`https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Consultar produto</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-16"
        >
          <a 
            href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20informações%20sobre%20como%20personalizar%20uma%20linha%20completa%20de%20produtos." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Consulte uma linha personalizada completa</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection; 