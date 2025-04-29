import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { portfolioItems } from '../../data/portfolioData';
import { Plus, Edit, Trash, Search, Filter } from 'lucide-react';

interface EditingItem {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  client: string;
}

export default function ManagePortfolio() {
  const [items, setItems] = useState([...portfolioItems]);
  const [filteredItems, setFilteredItems] = useState([...portfolioItems]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<EditingItem | null>(null);
  const { addToast } = useToast();
  
  useEffect(() => {
    document.title = 'Gerenciar Portfólio - Admin - Alex Design';
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    let results = [...items];
    
    if (filterCategory !== 'all') {
      results = results.filter(item => item.category === filterCategory);
    }
    
    if (searchTerm.trim() !== '') {
      const lowerCaseSearch = searchTerm.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(lowerCaseSearch) || 
        item.shortDescription.toLowerCase().includes(lowerCaseSearch)
      );
    }
    
    setFilteredItems(results);
  }, [items, searchTerm, filterCategory]);
  
  const handleEdit = (item: typeof portfolioItems[0]) => {
    setEditingItem({
      id: item.id,
      title: item.title,
      shortDescription: item.shortDescription,
      category: item.category,
      client: item.client
    });
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;

    setItems(prevItems => 
      prevItems.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...editingItem }
          : item
      )
    );

    addToast('Projeto atualizado com sucesso!', 'success');
    setEditingItem(null);
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
      addToast('Projeto excluído com sucesso.', 'success');
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Gerenciar Portfólio</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Adicione, edite e remova projetos do portfólio.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button icon={<Plus size={18} />} onClick={() => addToast('Funcionalidade de adicionar em desenvolvimento', 'info')}>
              Adicionar Projeto
            </Button>
          </div>
        </div>
        
        {editingItem && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-6">Editar Projeto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Título"
                value={editingItem.title}
                onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
              />
              <Input
                label="Cliente"
                value={editingItem.client}
                onChange={(e) => setEditingItem({...editingItem, client: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <Input
                label="Descrição Curta"
                value={editingItem.shortDescription}
                onChange={(e) => setEditingItem({...editingItem, shortDescription: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Categoria
              </label>
              <select
                value={editingItem.category}
                onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="graphic-design">Design Gráfico</option>
                <option value="app-development">Desenvolvimento de Apps</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setEditingItem(null)}>
                Cancelar
              </Button>
              <Button onClick={handleSaveEdit}>
                Salvar Alterações
              </Button>
            </div>
          </div>
        )}
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="relative md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter size={18} className="text-gray-400" />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary appearance-none"
                >
                  <option value="all">Todas as Categorias</option>
                  <option value="graphic-design">Design Gráfico</option>
                  <option value="app-development">Desenvolvimento de Apps</option>
                </select>
              </div>
            </div>
          </div>
          
          {isLoading ? (
            <div className="p-6">
              <div className="animate-pulse space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4"></div>
                    <div className="flex-grow">
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredItems.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Projeto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Categoria
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Cliente
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.title} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium">{item.title}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                                  {item.shortDescription}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700">
                              {item.category === 'graphic-design' ? 'Design Gráfico' : 'Desenvolvimento de Apps'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {item.client}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button 
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                                onClick={() => handleEdit(item)}
                                aria-label="Editar projeto"
                              >
                                <Edit size={18} />
                              </button>
                              <button 
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-error dark:hover:text-error"
                                onClick={() => handleDelete(item.id)}
                                aria-label="Excluir projeto"
                              >
                                <Trash size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhum projeto encontrado com os critérios selecionados.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}