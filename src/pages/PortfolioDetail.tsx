import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { portfolioItems } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const project = portfolioItems.find(item => item.id === id);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Portfolio - Alex Design`;
    } else {
      document.title = 'Project Not Found - Alex Design';
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [project]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-12"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/portfolio">
          <Button>
            Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/portfolio')}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </button>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Tag size={16} className="mr-2" />
              <span>{project.category === 'graphic-design' ? 'Graphic Design' : 'App Development'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md mb-8">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              
              <h2>The Challenge</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              
              <h2>The Solution</h2>
              <p>Vestibulum magna purus, faucibus nec tincidunt sit amet, placerat vel eros. Cras elementum vehicula magna, ut dapibus metus. Vestibulum condimentum arcu vel magna imperdiet, sed ultricies sapien sodales.</p>
              
              <h2>Results</h2>
              <p>Praesent efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam, in iaculis purus libero eget mauris. Vestibulum varius, ipsum id ultrices molestie, eros dui sodales eros, nec malesuada low turpis libero et tortor.</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Client</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Timeline</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.timeline}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Services</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Tools Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {project.projectUrl && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button fullWidth icon={<ExternalLink size={18} />} iconPosition="right">
                    Visit Project
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}