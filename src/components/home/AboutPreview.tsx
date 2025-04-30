import React from 'react';
import Button from '../ui/Button';
import { ChevronRight, PenTool, Code, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Designer trabalhando em um projeto" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3 md:p-4">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">5+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Design com propósito, código com paixão</h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Sou um profissional criativo especializado em design gráfico e desenvolvimento de aplicativos com mais de 5 anos de experiência trabalhando com clientes de diversos setores. Minha abordagem combina visão artística com expertise técnica para criar soluções que não apenas são bonitas, mas também entregam resultados.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                  <PenTool size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Design Gráfico</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Identidade visual, materiais impressos, ativos digitais e mais.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                  <Code size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Desenvolvimento de Apps</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Aplicativos móveis, aplicações web e experiências interativas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-accent/10 p-2 rounded-full">
                  <Users size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Colaboração</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Trabalho próximo aos clientes para alcançar sua visão.</p>
                </div>
              </div>
            </div>
            
            <Link to="/sobre">
              <Button 
                icon={<ChevronRight size={18} />} 
                iconPosition="right"
              >
                Saiba Mais Sobre Mim
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}