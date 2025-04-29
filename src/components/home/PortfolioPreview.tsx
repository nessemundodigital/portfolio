import React, { useState } from 'react';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../../data/portfolioData';

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filterItems = activeFilter === 'all' 
    ? portfolioItems.slice(0, 3) 
    : portfolioItems.filter(item => item.category === activeFilter).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Recent Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Explore a selection of my latest projects showcasing graphic design and app development skills.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
              ${activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveFilter('graphic-design')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
              ${activeFilter === 'graphic-design' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => setActiveFilter('app-development')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
              ${activeFilter === 'app-development' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
          >
            App Development
          </button>
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
                    View Project
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
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}