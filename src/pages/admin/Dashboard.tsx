import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../components/ui/Toaster';
import { 
  LayoutDashboard, Image, FileText, Users, Settings, ExternalLink, 
  TrendingUp, Award, Eye, Calendar, Edit
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';

interface Activity {
  id: string;
  type: 'blog' | 'portfolio' | 'testimonial' | 'settings';
  title: string;
  time: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [recentActivities, setRecentActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'blog',
      title: 'Novo post publicado no blog',
      time: '2 horas atrás',
      icon: <FileText size={14} />,
      color: 'primary',
      link: '/admin/blog'
    },
    {
      id: '2',
      type: 'portfolio',
      title: 'Projeto do portfólio atualizado',
      time: 'Ontem',
      icon: <Image size={14} />,
      color: 'secondary',
      link: '/admin/portfolio'
    },
    {
      id: '3',
      type: 'testimonial',
      title: 'Novo depoimento adicionado',
      time: '3 dias atrás',
      icon: <Award size={14} />,
      color: 'accent',
      link: '/admin/depoimentos'
    },
    {
      id: '4',
      type: 'settings',
      title: 'Configurações do site atualizadas',
      time: '5 dias atrás',
      icon: <Settings size={14} />,
      color: 'success',
      link: '/admin/configuracoes'
    }
  ]);
  
  useEffect(() => {
    document.title = 'Painel Administrativo - Alex Design';
    
    // Mostra mensagem de boas-vindas apenas uma vez quando o componente é montado
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    if (!welcomeShown) {
      addToast(`Bem-vindo(a) de volta, ${user?.name || 'Admin'}!`, 'success');
      sessionStorage.setItem('welcomeShown', 'true');
    }
  }, [user, addToast]);

  const handleEditActivity = (id: string) => {
    const activity = recentActivities.find(a => a.id === id);
    if (activity) {
      addToast(`Editando: ${activity.title}`, 'info');
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Painel</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Veja o que está acontecendo.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              <Eye size={18} className="mr-2" />
              Visualizar Site
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 rounded-full p-3 text-primary">
                <Image size={24} />
              </div>
              <div className="flex items-center">
                <span className="text-success font-medium text-sm mr-2">+12%</span>
                <Link to="/admin/portfolio">
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">26</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Projetos no Portfólio</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-secondary/10 rounded-full p-3 text-secondary">
                <FileText size={24} />
              </div>
              <div className="flex items-center">
                <span className="text-success font-medium text-sm mr-2">+8%</span>
                <Link to="/admin/blog">
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Artigos no Blog</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-accent/10 rounded-full p-3 text-accent">
                <Users size={24} />
              </div>
              <div className="flex items-center">
                <span className="text-success font-medium text-sm mr-2">+24%</span>
                <Link to="/admin/depoimentos">
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">8</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Depoimentos</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-warning/10 rounded-full p-3 text-warning">
                <TrendingUp size={24} />
              </div>
              <div className="flex items-center">
                <span className="text-success font-medium text-sm mr-2">+18%</span>
                <Link to="/admin/analytics">
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </Link>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">3,4k</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Visitantes Mensais</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Análise do Site</h3>
              <div className="flex items-center">
                <select className="bg-gray-100 dark:bg-gray-700 border-none rounded-md text-sm p-2 mr-2">
                  <option>Últimos 7 dias</option>
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                </select>
                <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                  Editar
                </Button>
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center border-b border-gray-200 dark:border-gray-700 mb-4">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <ExternalLink size={32} className="mx-auto mb-2" />
                <p>A visualização das análises aparecerá aqui</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Visitantes Únicos</p>
                <p className="font-bold text-lg">12.548</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Visualizações</p>
                <p className="font-bold text-lg">48.762</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Taxa de Rejeição</p>
                <p className="font-bold text-lg">32,4%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Atividades Recentes</h3>
              <Button variant="ghost" size="sm" icon={<Edit size={16} />} onClick={() => addToast('Editando atividades recentes', 'info')}>
                Editar
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`bg-${activity.color}/10 rounded-full p-2 text-${activity.color} mt-1`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    icon={<Edit size={16} />}
                    onClick={() => handleEditActivity(activity.id)}
                  >
                    Editar
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link to="/admin/activity" className="text-primary hover:text-primary/80 text-sm font-medium">
                Ver Todas as Atividades
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Próximas Tarefas</h3>
              <Button variant="ghost" size="sm" icon={<Edit size={16} />} onClick={() => addToast('Editando tarefas', 'info')}>
                Editar
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="bg-warning/10 rounded-full p-2 text-warning">
                  <Calendar size={18} />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Atualizar projeto de identidade visual</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Vence em 2 dias</p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="px-2 py-1 bg-warning/10 text-warning text-xs rounded-full mr-2">Alta</span>
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="bg-primary/10 rounded-full p-2 text-primary">
                  <Calendar size={18} />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Reunião com cliente - Design de app</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Amanhã, 15:00</p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mr-2">Média</span>
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="bg-secondary/10 rounded-full p-2 text-secondary">
                  <Calendar size={18} />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">Escrever novo artigo para o blog</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Próxima semana</p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full mr-2">Baixa</span>
                  <Button variant="ghost" size="sm" icon={<Edit size={16} />}>
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Ações Rápidas</h3>
              <Button variant="ghost" size="sm" icon={<Edit size={16} />} onClick={() => addToast('Editando ações rápidas', 'info')}>
                Editar
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Link to="/admin/portfolio/new" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="bg-primary/10 rounded-full p-3 text-primary mb-2">
                  <Image size={24} />
                </div>
                <span className="font-medium">Adicionar Projeto</span>
              </Link>
              
              <Link to="/admin/blog/new" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="bg-secondary/10 rounded-full p-3 text-secondary mb-2">
                  <FileText size={24} />
                </div>
                <span className="font-medium">Escrever Post</span>
              </Link>
              
              <Link to="/admin/testimonials/new" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="bg-accent/10 rounded-full p-3 text-accent mb-2">
                  <Users size={24} />
                </div>
                <span className="font-medium">Adicionar Depoimento</span>
              </Link>
              
              <Link to="/admin/settings" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="bg-warning/10 rounded-full p-3 text-warning mb-2">
                  <Settings size={24} />
                </div>
                <span className="font-medium">Configurações</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}