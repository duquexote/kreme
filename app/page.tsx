"use client";

import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import TrendsSection from './components/TrendsSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <HeroSection />
      <TechnologySection />
      <TrendsSection />
      <ProductsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
