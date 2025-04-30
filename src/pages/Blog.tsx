import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([...blogPosts]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    document.title = 'Blog - Alex Design';
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts([...blogPosts]);
    } else {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseSearch) || 
        post.excerpt.toLowerCase().includes(lowerCaseSearch) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
            Pensamentos, ideias e perspectivas sobre design e desenvolvimento.
            </p>
          </div>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          {isLoading ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="animate-pulse flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 bg-gray-200 dark:bg-gray-800 h-48 rounded-xl"></div>
                  <div className="md:w-2/3">
                    <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredPosts.length > 0 ? (
                <div className="space-y-12 max-w-4xl mx-auto">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="flex flex-col md:flex-row gap-6 animate-fade-in">
                      <Link to={`/blog/${post.id}`} className="md:w-1/3">
                        <div className="rounded-xl overflow-hidden shadow-md h-48">
                          <img 
                            src={post.coverImage} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </Link>
                      
                      <div className="md:w-2/3">
                        <Link to={`/blog/${post.id}`}>
                          <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    No articles found matching your search criteria.
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