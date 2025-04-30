import React, { useState, useEffect, useRef } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { portfolioItems } from '../../data/portfolioData';
import { Plus, Edit, Trash, Search, Filter } from 'lucide-react';

interface ItemFormData {
  title: string;
  shortDescription: string;
  category: string;
  client: string;
  imageUrl: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  client: string;
  imageUrl: string;
  date: string;
}

const INITIAL_NEW_ITEM_DATA: ItemFormData = {
  title: '',
  shortDescription: '',
  category: 'graphic-design',
  client: '',
  imageUrl: ''
};

export default function ManagePortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([...portfolioItems]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([...portfolioItems]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);
  const [newItemData, setNewItemData] = useState<ItemFormData>(INITIAL_NEW_ITEM_DATA);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
  
  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setIsAddingNewItem(false);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;

    let finalImageUrl = editingItem.imageUrl;

    if (selectedFile) {
      finalImageUrl = URL.createObjectURL(selectedFile);
    }

    const updatedItem = { ...editingItem, imageUrl: finalImageUrl };

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === editingItem.id
          ? updatedItem
          : item
      )
    );

    addToast('Projeto atualizado com sucesso!', 'success');
    setEditingItem(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
      addToast('Projeto excluído com sucesso.', 'success');
    }
  };

  const handleAddNewClick = () => {
    setIsAddingNewItem(true);
    setNewItemData(INITIAL_NEW_ITEM_DATA);
    setEditingItem(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSaveNewItem = () => {
    let finalImageUrl = newItemData.imageUrl;

    if (selectedFile) {
      finalImageUrl = URL.createObjectURL(selectedFile);
    }

    const newId = Date.now().toString();
    const newItem: PortfolioItem = {
      id: newId,
      title: newItemData.title,
      shortDescription: newItemData.shortDescription,
      category: newItemData.category,
      client: newItemData.client,
      imageUrl: finalImageUrl || '/placeholder-image.jpg',
      date: new Date().toLocaleDateString('pt-BR'),
    };

    setItems(prevItems => [newItem, ...prevItems]);
    addToast('Novo projeto adicionado com sucesso!', 'success');
    setIsAddingNewItem(false);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleCancel = () => {
    setEditingItem(null);
    setIsAddingNewItem(false);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFormChange = (field: keyof Omit<ItemFormData, 'imageUrl'>, value: string) => {
    if (isAddingNewItem) {
      setNewItemData(prev => ({ ...prev, [field]: value }));
    } else if (editingItem) {
      setEditingItem(prev => prev ? ({ ...prev, [field]: value }) : null);
    }
  };

  const handleImageUrlChange = (value: string) => {
    if (isAddingNewItem) {
      setNewItemData(prev => ({ ...prev, imageUrl: value }));
    } else if (editingItem) {
      setEditingItem(prev => prev ? ({ ...prev, imageUrl: value }) : null);
    }
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      if (isAddingNewItem) {
         setNewItemData(prev => ({ ...prev, imageUrl: '' }));
      } else if (editingItem) {
         setEditingItem(prev => prev ? ({ ...prev, imageUrl: '' }) : null);
      }
    } else {
      setSelectedFile(null);
    }
  };

  let currentFormData: ItemFormData | PortfolioItem | null = null;
  let previewImageUrl: string | null = null;

  if (isAddingNewItem) {
    currentFormData = newItemData;
    if (selectedFile) {
      previewImageUrl = URL.createObjectURL(selectedFile);
    } else {
      previewImageUrl = newItemData.imageUrl;
    }
  } else if (editingItem) {
    currentFormData = editingItem;
    if (selectedFile) {
      previewImageUrl = URL.createObjectURL(selectedFile);
    } else {
      previewImageUrl = editingItem.imageUrl;
    }
  }
  
  useEffect(() => {
      let objectUrl: string | null = null;
      if (selectedFile) {
          objectUrl = URL.createObjectURL(selectedFile);
      }
      return () => {
          if (objectUrl) {
              URL.revokeObjectURL(objectUrl);
          }
      };
  }, [selectedFile]);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Gerenciar Portfólio</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Adicione, edite e remova projetos do portfólio.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button icon={<Plus size={18} />} onClick={handleAddNewClick}>
            Adicionar Projeto
          </Button>
        </div>
      </div>
      
      {(editingItem || isAddingNewItem) && currentFormData && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-6">
            {isAddingNewItem ? 'Adicionar Novo Projeto' : 'Editar Projeto'}
          </h2>
          {previewImageUrl && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prévia</label>
              <img src={previewImageUrl} alt="Prévia do projeto" className="max-w-xs max-h-48 object-contain border rounded" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Título"
              value={currentFormData.title}
              onChange={(e) => handleFormChange('title', e.target.value)}
              placeholder="Nome do Projeto"
            />
            <Input
              label="Cliente"
              value={currentFormData.client}
              onChange={(e) => handleFormChange('client', e.target.value)}
              placeholder="Nome do Cliente"
            />
          </div>
          <div className="mb-6">
            <Input
              label="Descrição Curta"
              value={currentFormData.shortDescription}
              onChange={(e) => handleFormChange('shortDescription', e.target.value)}
              placeholder="Uma breve descrição do projeto"
            />
          </div>
          <div className="mb-6">
            <Input
              label="URL da Imagem"
              value={currentFormData.imageUrl}
              onChange={(e) => handleImageUrlChange(e.target.value)}
              placeholder="https://exemplo.com/imagem.jpg"
              disabled={!!selectedFile}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ou Upload de Imagem
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer dark:file:bg-primary/20 dark:file:text-primary dark:hover:file:bg-primary/30"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categoria
            </label>
            <select
              value={currentFormData.category}
              onChange={(e) => handleFormChange('category', e.target.value)}
              className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="graphic-design">Design Gráfico</option>
              <option value="app-development">Desenvolvimento de Apps</option>
              <option value="web-design">Web Design</option>
              <option value="branding">Branding</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button onClick={isAddingNewItem ? handleSaveNewItem : handleSaveEdit}>
              {isAddingNewItem ? 'Salvar Novo Projeto' : 'Salvar Alterações'}
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
                <option value="web-design">Web Design</option>
                <option value="branding">Branding</option>
              </select>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="p-6">
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0"></div>
                  <div className="flex-grow space-y-2">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                  <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded ml-4"></div>
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                        Data
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                              <img 
                                src={item.imageUrl} 
                                alt={item.title} 
                                className="h-full w-full object-cover"
                                onError={(e) => (e.currentTarget.src = '/placeholder-image.jpg')}
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
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                          {item.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end items-center gap-2">
                            <Button variant="ghost" size="sm" icon={<Edit size={16} />} onClick={() => handleEdit(item)}>
                              <span></span>
                            </Button>
                            <Button variant="ghost" size="sm" icon={<Trash size={16} />} onClick={() => handleDelete(item.id)} className="text-destructive">
                              <span></span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Nenhum projeto encontrado.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}