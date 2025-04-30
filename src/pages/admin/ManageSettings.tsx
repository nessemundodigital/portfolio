import React, { useState, useEffect } from 'react';
// import AdminLayout from '../../components/admin/AdminLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useToast } from '../../components/ui/Toaster';
import { SiteConfig, defaultSiteConfig } from '../../data/siteData';
import { Save } from 'lucide-react';

export default function ManageSettings() {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const { addToast } = useToast();

  useEffect(() => {
    document.title = 'Configurações do Site - Admin - Alex Design';
  }, []);

  const handleChange = (section: keyof SiteConfig | string, field: string, value: string) => {
    setConfig(prev => {
      // Tratar chaves de nível superior (strings) separadamente
      if (section === 'siteName' || section === 'siteDescription') {
        return { ...prev, [section]: value };
      }
      // Tratar chaves de objetos aninhados
      const typedSection = section as keyof Omit<SiteConfig, 'siteName' | 'siteDescription'>;
      return {
        ...prev,
        [typedSection]: {
          ...prev[typedSection],
          [field]: value
        }
      }
    });
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      about: {
        ...prev.about,
        services: prev.about.services.map((service, i) => 
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const handleSocialMediaChange = (index: number, field: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        socialMedia: prev.contact.socialMedia.map((social, i) => 
          i === index ? { ...social, [field]: value } : social
        )
      }
    }));
  };

  const handleSave = () => {
    // Simula salvamento das configurações
    setTimeout(() => {
      addToast('Configurações salvas com sucesso!', 'success');
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Configurações do Site</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie o conteúdo e as configurações gerais do site.
          </p>
        </div>
        
        <Button 
          icon={<Save size={18} />}
          onClick={handleSave}
        >
          Salvar Alterações
        </Button>
      </div>

      <div className="space-y-8">
        {/* Informações Gerais */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Informações Gerais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome do Site"
              value={config.siteName}
              onChange={(e) => handleChange('siteName', '', e.target.value)}
            />
            <Input
              label="Descrição do Site"
              value={config.siteDescription}
              onChange={(e) => handleChange('siteDescription', '', e.target.value)}
            />
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Seção Hero</h2>
          <div className="space-y-6">
            <Input
              label="Título"
              value={config.hero.title}
              onChange={(e) => handleChange('hero', 'title', e.target.value)}
            />
            <Input
              label="Subtítulo"
              value={config.hero.subtitle}
              onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Descrição
              </label>
              <textarea
                value={config.hero.description}
                onChange={(e) => handleChange('hero', 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Seção Sobre</h2>
          <div className="space-y-6">
            <Input
              label="Título"
              value={config.about.title}
              onChange={(e) => handleChange('about', 'title', e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Descrição
              </label>
              <textarea
                value={config.about.description}
                onChange={(e) => handleChange('about', 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <div className="space-y-6">
                {config.about.services.map((service, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Input
                      label="Título do Serviço"
                      value={service.title}
                      onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                    />
                    <Input
                      label="Descrição do Serviço"
                      value={service.description}
                      onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Informações de Contato</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email"
                value={config.contact.email}
                onChange={(e) => handleChange('contact', 'email', e.target.value)}
              />
              <Input
                label="Telefone"
                value={config.contact.phone}
                onChange={(e) => handleChange('contact', 'phone', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Endereço
              </label>
              <textarea
                value={config.contact.address}
                onChange={(e) => handleChange('contact', 'address', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="space-y-4">
                {config.contact.socialMedia.map((social, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Plataforma"
                      value={social.platform}
                      onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                    />
                    <Input
                      label="URL"
                      value={social.url}
                      onChange={(e) => handleSocialMediaChange(index, 'url', e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Rodapé</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Descrição do Rodapé
              </label>
              <textarea
                value={config.footer.description}
                onChange={(e) => handleChange('footer', 'description', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            
            <Input
              label="Texto de Copyright"
              value={config.footer.copyright}
              onChange={(e) => handleChange('footer', 'copyright', e.target.value)}
            />
          </div>
        </section>

        {/* Nova Seção: Política de Privacidade */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Política de Privacidade</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Conteúdo (Pode usar HTML básico)
            </label>
            <textarea
              value={config.legal?.privacyPolicyContent || ''} // Acesso seguro com optional chaining
              onChange={(e) => handleChange('legal', 'privacyPolicyContent', e.target.value)}
              rows={15} // Aumentar número de linhas
              className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
              placeholder="Insira o conteúdo da política de privacidade aqui..."
            />
          </div>
        </section>
        
        {/* Nova Seção: Termos de Uso */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-6">Termos de Uso</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Conteúdo (Pode usar HTML básico)
            </label>
            <textarea
              value={config.legal?.termsOfUseContent || ''} // Acesso seguro
              onChange={(e) => handleChange('legal', 'termsOfUseContent', e.target.value)}
              rows={15} // Aumentar número de linhas
              className="w-full px-3 py-2 bg-background text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
              placeholder="Insira o conteúdo dos termos de uso aqui..."
            />
          </div>
        </section>
      </div>

      <div className="mt-8 flex justify-end">
        <Button 
          icon={<Save size={18} />}
          onClick={handleSave}
        >
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
}