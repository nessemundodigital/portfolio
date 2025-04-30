import React, { useState } from 'react';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../../data/portfolioData';
import { defaultSiteConfig } from '../../data/siteData';

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const categories = defaultSiteConfig.portfolio.categories;

  const filterItems = activeFilter === 'all' 
    ? portfolioItems.slice(0, 3) 
    : portfolioItems.filter(item => item.category === activeFilter).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {defaultSiteConfig.portfolio.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            {defaultSiteConfig.portfolio.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeFilter === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterItems.map((item) => (
            <div key={item.id} className="portfolio-item group rounded-xl overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4 text-center">{item.shortDescription}</p>
                <Link to={`/portfolio/${item.id}`}>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Ver Projeto
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button 
              variant="outline" 
              size="lg" 
              icon={<ChevronRight size={18} />} 
              iconPosition="right"
            >
              Ver todos os projetos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}