import React from 'react';
import Button from '../ui/Button';
import { ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

export default function BlogPreview() {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Últimos Artigos</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          Pensamentos, percepções e perspectivas da minha jornada de design e desenvolvimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Leia Mais
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button 
              variant="outline" 
              size="lg" 
              icon={<ChevronRight size={18} />} 
              iconPosition="right"
            >
              Ver Todos os Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}