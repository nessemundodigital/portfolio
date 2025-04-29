import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { blogPosts } from '../../data/blogData';
import { Plus, Edit, Trash, Search, Calendar, Eye } from 'lucide-react';

interface EditingPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  tags: string[];
}

export default function ManageBlog() {
  const [posts, setPosts] = useState([...blogPosts]);
  const [filteredPosts, setFilteredPosts] = useState([...blogPosts]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<EditingPost | null>(null);
  const { addToast } = useToast();
  
  useEffect(() => {
    document.title = 'Gerenciar Blog - Admin - Alex Design';
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts([...posts]);
    } else {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseSearch) || 
        post.excerpt.toLowerCase().includes(lowerCaseSearch) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
      );
      setFilteredPosts(filtered);
    }
  }, [posts, searchTerm]);

  const handleEdit = (post: typeof blogPosts[0]) => {
    setEditingPost({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      tags: [...post.tags]
    });
  };

  const handleSaveEdit = () => {
    if (!editingPost) return;

    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...editingPost }
          : post
      )
    );

    addToast('Post atualizado com sucesso!', 'success');
    setEditingPost(null);
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
      addToast('Post excluído com sucesso.', 'success');
    }
  };

  const handleTagChange = (value: string) => {
    if (!editingPost) return;
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setEditingPost({ ...editingPost, tags });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Gerenciar Blog</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Crie, edite e gerencie seus posts do blog.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button icon={<Plus size={18} />} onClick={() => addToast('Funcionalidade de adicionar em desenvolvimento', 'info')}>
              Escrever Novo Post
            </Button>
          </div>
        </div>

        {editingPost && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-6">Editar Post</h2>
            <div className="space-y-6">
              <Input
                label="Título"
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
              />
              <Input
                label="Autor"
                value={editingPost.author}
                onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Resumo
                </label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Input
                label="Tags (separadas por vírgula)"
                value={editingPost.tags.join(', ')}
                onChange={(e) => handleTagChange(e.target.value)}
                helperText="Ex: Design, UI/UX, Desenvolvimento"
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setEditingPost(null)}>
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
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary"
              />
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
              {filteredPosts.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Post
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Autor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Tags
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                <img 
                                  src={post.coverImage} 
                                  alt={post.title} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium">{post.title}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                                  {post.excerpt}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {new Date(post.date).toLocaleDateString('pt-BR', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {post.author}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 2).map((tag, index) => (
                                <span 
                                  key={index} 
                                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700">
                                  +{post.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <a 
                                href={`/blog/${post.id}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                                aria-label="Visualizar post"
                              >
                                <Eye size={18} />
                              </a>
                              <button 
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                                onClick={() => handleEdit(post)}
                                aria-label="Editar post"
                              >
                                <Edit size={18} />
                              </button>
                              <button 
                                className="p-1 text-gray-600 dark:text-gray-400 hover:text-error dark:hover:text-error"
                                onClick={() => handleDelete(post.id)}
                                aria-label="Excluir post"
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
                    Nenhum post encontrado com os critérios selecionados.
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