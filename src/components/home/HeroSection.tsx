import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ChevronRight, Code, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-gradient-to-b from-background to-gray-100 dark:from-background dark:to-gray-900">
      {/* Formas do Plano de Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/20"></div>
          <div className="absolute top-40 right-[15%] w-80 h-80 rounded-full bg-secondary/20"></div>
          <div className="absolute bottom-20 left-[30%] w-40 h-40 rounded-full bg-accent/20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center mb-6 text-primary">
              <div className="mr-3 p-2 rounded-full bg-primary/10 text-primary">
                <Palette size={24} />
              </div>
              <div className="mr-3 p-2 rounded-full bg-secondary/10 text-secondary">
                <Code size={24} />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Design & Desenvolvimento</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-tight mb-6">
              Transformando <span className="text-primary">ideias</span> em <br />
              experiências <span className="text-secondary">digitais</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Crio designs impressionantes e aplicações poderosas que cativam usuários
              e entregam resultados excepcionais para empresas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio">
                <Button size="lg" icon={<ChevronRight size={18} />} iconPosition="right">
                  Ver Meus Trabalhos
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-in">
            <div className="relative">
              <div className="w-full h-[450px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 backdrop-blur-sm p-6 relative overflow-hidden shadow-xl">
                <div className="absolute top-6 left-6 right-6 h-[300px] bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <Palette size={64} className="mx-auto mb-6 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Criativo. Profissional. Inovador.</h3>
                    <p className="text-gray-600 dark:text-gray-400">Transformando sua visão em realidade.</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 w-[180px] h-[80px] bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg flex items-center justify-center">
                  <Code size={32} className="mr-3 text-secondary" />
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Desenvolvimento</div>
                    <div className="font-bold">Criador de Apps</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 w-[130px] h-[80px] bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-lg">10+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}