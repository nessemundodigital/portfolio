import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, User, Tag, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const postIndex = blogPosts.findIndex(post => post.id === id);
  const post = blogPosts[postIndex];
  
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Blog - Alex Design`;
    } else {
      document.title = 'Article Not Found - Alex Design';
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-16">
        <div className="animate-pulse max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-6"></div>
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
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/blog">
          <Button>
            Back to Blog
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
            onClick={() => navigate('/blog')}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </button>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-md mb-10">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
            <p className="lead text-xl">{post.excerpt}</p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. 
              Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Sed malesuada lobortis pretium.
            </p>
            
            <h2>The Importance of Design in Modern Applications</h2>
            
            <p>
              Vestibulum magna purus, faucibus nec tincidunt sit amet, placerat vel eros. Cras 
              elementum vehicula magna, ut dapibus metus. Vestibulum condimentum arcu vel magna 
              imperdiet, sed ultricies sapien sodales.
            </p>
            
            <p>
              Nulla efficitur, nisi id aliquam sodales, sapien metus mollis nisl, eu commodo sem 
              nisi in lacus. Nullam vehicula id ante ut varius. Cras posuere urna vel augue 
              consectetur, quis aliquam nisl efficitur.
            </p>
            
            <blockquote>
              Good design is actually a lot harder to notice than poor design, in part because good 
              designs fit our needs so well that the design is invisible.
            </blockquote>
            
            <h2>Integrating Design and Development</h2>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
            
            <ul>
              <li>Understanding user needs and behaviors</li>
              <li>Creating intuitive navigation and interfaces</li>
              <li>Using visual hierarchy to guide users</li>
              <li>Ensuring responsive design across all devices</li>
            </ul>
            
            <p>
              Praesent efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam, in iaculis 
              purus libero eget mauris. Vestibulum varius, ipsum id ultrices molestie, eros dui sodales 
              eros, nec malesuada low turpis libero et tortor.
            </p>
            
            <h2>Conclusion</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. 
              Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Sed malesuada lobortis pretium.
            </p>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-10">
            <div className="flex flex-wrap gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300 mr-2 flex items-center">
                <Tag size={16} className="mr-1" />
                Tags:
              </span>
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
          
          <div className="flex flex-col sm:flex-row justify-between border-t border-gray-200 dark:border-gray-800 pt-8">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost.id}`} 
                className="flex items-center mb-4 sm:mb-0 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                <ChevronLeft size={18} className="mr-2" />
                <div>
                  <div className="text-sm">Previous Article</div>
                  <div className="font-medium">{prevPost.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextPost && (
              <Link 
                to={`/blog/${nextPost.id}`} 
                className="flex items-center text-right sm:text-left text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              >
                <div className="flex-grow">
                  <div className="text-sm">Next Article</div>
                  <div className="font-medium">{nextPost.title}</div>
                </div>
                <ChevronRight size={18} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}