import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import PortfolioPreview from '../components/home/PortfolioPreview';
import AboutPreview from '../components/home/AboutPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import BlogPreview from '../components/home/BlogPreview';

export default function Home() {
  useEffect(() => {
    document.title = 'Alex Design - Graphic Design & App Development';
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <BlogPreview />
      <ContactSection />
    </div>
  );
}