import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  LayoutDashboard, Image, FileText, Users, Settings, LogOut, 
  Menu, X, ChevronDown, Moon, Sun, User, Bell, Palette, Sliders,
  ChevronLeft, ChevronRight
} from 'lucide-react';

interface AdminLayoutProps {
  // children não é mais necessário aqui se usarmos Outlet
}

export default function AdminLayout(/* { children }: AdminLayoutProps */) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  
  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/admin/portfolio', label: 'Portfólio', icon: <Image size={20} /> },
    { path: '/admin/blog', label: 'Blog', icon: <FileText size={20} /> },
    { path: '/admin/depoimentos', label: 'Depoimentos', icon: <Users size={20} /> },
    { path: '/admin/sobre', label: 'Sobre', icon: <User size={20} /> },
    { path: '/admin/configuracoes', label: 'Configurações', icon: <Sliders size={20} /> },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 lg:flex lg:group ${isSidebarCollapsed ? 'lg:sidebar-collapsed' : ''}`}>
      {/* Top Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-20 h-16">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="flex items-center ml-2 lg:ml-0">
              <Palette size={24} className="text-primary mr-2" />
              <span className="font-display font-bold text-lg">Admin<span className="text-primary">Panel</span></span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 relative"
              aria-label="Notificações"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                aria-label="Menu do usuário"
              >
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 mr-1">
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <ChevronDown size={16} />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 top-10 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
                  <p className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    {user?.email}
                  </p>
                  <Link 
                    to="/admin/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link 
                    to="/admin/configuracoes" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Configurações
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Overlay para sidebar mobile */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />
      
      {/* Sidebar */}
      <aside className={`fixed top-0 bottom-0 left-0 bg-white dark:bg-gray-800 shadow-md z-40 lg:z-auto lg:sticky lg:top-0 lg:h-screen 
                     flex flex-col transition-all duration-300 ease-in-out 
                     ${isSidebarCollapsed ? 'w-20' : 'w-64'} 
                     ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center px-4 flex-shrink-0">
          {/* Pode colocar um logo menor aqui ou deixar vazio */}
        </div>

        <nav className="flex-grow overflow-y-auto overflow-x-hidden py-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  title={item.label}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors 
                            ${isSidebarCollapsed ? 'justify-center' : ''} 
                            ${location.pathname.startsWith(item.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                  onClick={closeSidebar}
                >
                  <span className={`${isSidebarCollapsed ? 'mx-auto' : 'mr-3'}`}>{item.icon}</span>
                  <span className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-6 px-4 flex-shrink-0">
          <button
              onClick={toggleSidebarCollapse}
              className={`hidden lg:flex items-center justify-center w-full px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 mb-2 transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
              aria-label={isSidebarCollapsed ? 'Expandir menu' : 'Recolher menu'}
              title={isSidebarCollapsed ? 'Expandir' : 'Recolher'}
          >
              {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <button
            onClick={handleLogout}
            title="Sair"
            className={`flex items-center px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full transition-colors ${isSidebarCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={20} className={`${isSidebarCollapsed ? 'mx-auto' : 'mr-3'}`} />
            <span className={`${isSidebarCollapsed ? 'hidden' : 'block'}`}>Sair</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={`flex-grow pt-16 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-8"> 
           <Outlet /> 
        </div>
      </main>
    </div>
  );
}