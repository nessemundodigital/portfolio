import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, Palette } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Palette size={24} className="text-primary mr-2" />
              <span className="font-display font-bold text-xl">Alex<span className="text-primary">Design</span></span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs">
              Criando designs impressionantes e aplicações poderosas para clientes em todo o mundo.
            </p>
            <div className="flex space-x-4">
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
          
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Início</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Portfólio</Link></li>
              <li><Link to="/sobre" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Sobre</Link></li>
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Blog</Link></li>
              <li><Link to="/contato" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Contato</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 dark:text-gray-400">Design Gráfico</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Design de Interface</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Desenvolvimento de Apps</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Desenvolvimento Web</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Identidade Visual</span></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-base mb-4">Contato</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>Rua do Design, 123</p>
              <p>São Paulo, SP 01234-567</p>
              <p className="mt-2">contato@alexdesign.com.br</p>
              <p>+55 (11) 98765-4321</p>
            </address>
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