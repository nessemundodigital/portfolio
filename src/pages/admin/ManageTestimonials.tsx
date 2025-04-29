import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { testimonials } from '../../data/testimonialsData';
import { Plus, Edit, Trash, Star, Search } from 'lucide-react';

interface EditingTestimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
}

export default function ManageTestimonials() {
  const [items, setItems] = useState([...testimonials]);
  const [filteredItems, setFilteredItems] = useState([...testimonials]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<EditingTestimonial | null>(null);
  const { addToast } = useToast();
  
  useEffect(() => {
    document.title = 'Gerenciar Depoimentos - Admin - Alex Design';
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems([...items]);
    } else {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearch) || 
        item.company.toLowerCase().includes(lowerCaseSearch) ||
        item.quote.toLowerCase().includes(lowerCaseSearch)
      );
      setFilteredItems(filtered);
    }
  }, [items, searchTerm]);

  const handleEdit = (item: typeof testimonials[0]) => {
    setEditingItem({
      id: item.id,
      name: item.name,
      company: item.company,
      quote: item.quote
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

    addToast('Depoimento atualizado com sucesso!', 'success');
    setEditingItem(null);
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este depoimento?')) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
      addToast('Depoimento excluído com sucesso.', 'success');
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Gerenciar Depoimentos</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Adicione, edite e remova depoimentos de clientes.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button icon={<Plus size={18} />} onClick={() => addToast('Funcionalidade de adicionar em desenvolvimento', 'info')}>
              Adicionar Depoimento
            </Button>
          </div>
        </div>

        {editingItem && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-6">Editar Depoimento</h2>
            <div className="space-y-6">
              <Input
                label="Nome do Cliente"
                value={editingItem.name}
                onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
              />
              <Input
                label="Empresa"
                value={editingItem.company}
                onChange={(e) => setEditingItem({...editingItem, company: e.target.value})}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Depoimento
                </label>
                <textarea
                  value={editingItem.quote}
                  onChange={(e) => setEditingItem({...editingItem, quote: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
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
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar depoimentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          
          {isLoading ? (
            <div className="p-6">
              <div className="animate-pulse space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4"></div>
                      <div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-1"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredItems.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-750">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                            <img 
                              src={item.avatar} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.company}</div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            className="p-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            onClick={() => handleEdit(item)}
                            aria-label="Editar depoimento"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            className="p-1 text-gray-600 dark:text-gray-400 hover:text-error dark:hover:text-error"
                            onClick={() => handleDelete(item.id)}
                            aria-label="Excluir depoimento"
                          >
                            <Trash size={18} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-warning" fill="#f59e0b" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300">
                        "{item.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhum depoimento encontrado com os critérios selecionados.
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