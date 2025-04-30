import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Moon, Sun, Menu, X, Palette, CodeIcon } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fecha o menu móvel quando a rota muda
    setIsMenuOpen(false);
  }, [location.pathname]);

  const logoIcon = (
    <div className="flex items-center">
      <div className="mr-2 text-primary">
        <Palette size={28} />
      </div>
      <div className="hidden md:flex items-center">
        <span className="font-display font-bold text-xl">Alex</span>
        <span className="text-primary font-display font-bold text-xl">Design</span>
      </div>
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {logoIcon}
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}>
              Início
            </Link>
            <Link to="/portfolio" className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}>
              Portfólio
            </Link>
            <Link to="/sobre" className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === '/sobre' ? 'text-primary' : ''}`}>
              Sobre
            </Link>
            <Link to="/blog" className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === '/blog' ? 'text-primary' : ''}`}>
              Blog
            </Link>
            <Link to="/contato" className={`text-base font-medium transition-colors hover:text-primary ${location.pathname === '/contato' ? 'text-primary' : ''}`}>
              Contato
            </Link>
            {isAuthenticated && !['/', '/portfolio', '/sobre', '/blog', '/contato'].includes(location.pathname) && (
              <Link to="/admin/dashboard" className="text-base font-medium text-primary hover:text-primary/90">
                Painel
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Botão do menu móvel */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navegação Móvel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-fade-in z-50">
          <nav className="flex flex-col py-4">
            <Link to="/" className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
              Início
            </Link>
            <Link to="/portfolio" className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
              Portfólio
            </Link>
            <Link to="/sobre" className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
              Sobre
            </Link>
            <Link to="/blog" className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
              Blog
            </Link>
            <Link to="/contato" className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800">
              Contato
            </Link>
            {isAuthenticated && !['/', '/portfolio', '/sobre', '/blog', '/contato'].includes(location.pathname) && (
              <Link to="/admin/dashboard" className="px-4 py-3 text-primary hover:bg-gray-100 dark:hover:bg-gray-800">
                Painel
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}