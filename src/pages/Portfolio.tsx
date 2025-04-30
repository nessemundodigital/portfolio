import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { portfolioItems } from '../data/portfolioData';
import { defaultSiteConfig } from '../data/siteData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState([...portfolioItems]);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = defaultSiteConfig.portfolio.categories;

  useEffect(() => {
    document.title = 'Portfolio - Alex Design';
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleItems([...portfolioItems]);
    } else {
      const filtered = portfolioItems.filter(item => item.category === activeFilter);
      setVisibleItems(filtered);
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Portfólio</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore a minha coleção de trabalhos em diferentes setores.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container mx-auto px-4">
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
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-64 mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {visibleItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visibleItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="portfolio-item animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-64 object-cover transition-transform duration-500"
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}