import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, Palette } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <Palette size={24} className="text-primary mr-2" />
              <span className="font-display font-bold text-xl">Alex<span className="text-primary">Design</span></span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs text-center">
              Criando designs impressionantes e aplicações poderosas para clientes em todo o mundo.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} AlexDesign. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidade" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}