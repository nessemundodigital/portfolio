import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ChevronRight, Download, Award, Clock, Users, Coffee } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'Sobre mim - Alex Design';
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Sobre mim</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Designer gráfico e desenvolvedor de aplicativos, dedicado a criar experiências digitais excepcionais.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Retrato de Alex, designer gráfico e desenvolvedor de aplicativos" 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Experiência</div>
                      <div className="font-bold text-lg">5+ Anos de Experiência</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Oi, sou o Sanches</h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Designer gráfico e desenvolvedor de aplicativos com mais de 5 anos de experiência na criação de soluções digitais para clientes em muitos lugares. Minha paixão reside em criar designs visualmente impressionantes e funcionais que ajudam as empresas a ter sucesso.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sou especialista em identidade de marca, design de UI/UX, desenvolvimento de aplicativos móveis e aplicações web. A minha abordagem combina criatividade com conhecimento técnico para entregar soluções que não só têm uma aparência bonita, mas também um desempenho excecional.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Sempre que possível vou postar novidades aqui no blog as novas tendências de design, e experimentar tecnologias emergentes ou compartilhar o meu conhecimento através de publicações.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button icon={<ChevronRight size={18} />} iconPosition="right">
                    Vamos Trabalhar Juntos?
                  </Button>
                </Link>
                
                <a href="/resume.pdf" download>
                  <Button variant="outline" icon={<Download size={18} />}>
                    Baixar resumo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                <Award size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary mb-4">
                <Users size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">65+</div>
              <div className="text-gray-600 dark:text-gray-400">Clientes Satisfeitos</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 p-4 rounded-full text-accent mb-4">
                <Clock size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Anos de Experiência</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-warning/10 p-4 rounded-full text-warning mb-4">
                <Coffee size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">1.000+</div>
              <div className="text-gray-600 dark:text-gray-400">Xícaras de Café</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
