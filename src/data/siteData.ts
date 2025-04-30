export interface SiteConfig {
  // Informações Gerais
  siteName: string;
  siteDescription: string;
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  
  // Sobre
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: {
      years: number;
      description: string;
    };
    services: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  
  // Portfólio
  portfolio: {
    title: string;
    description: string;
    categories: {
      id: string;
      label: string;
    }[];
  };
  
  // Depoimentos
  testimonials: {
    title: string;
    description: string;
  };
  
  // Blog
  blog: {
    title: string;
    description: string;
  };
  
  // Contato
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socialMedia: {
      platform: string;
      url: string;
    }[];
  };
  
  // Footer
  footer: {
    description: string;
    navigation: {
      title: string;
      links: {
        label: string;
        url: string;
      }[];
    }[];
    copyright: string;
  };

  // Nova Seção Legal
  legal: {
    privacyPolicyContent: string;
    termsOfUseContent: string;
  };
}

export const defaultSiteConfig: SiteConfig = {
  siteName: "Alex Design",
  siteDescription: "Design & Desenvolvimento",
  
  hero: {
    title: "Transformando ideias em experiências digitais",
    subtitle: "Design & Desenvolvimento",
    description: "Crio designs impressionantes e aplicações poderosas que cativam usuários e entregam resultados excepcionais para empresas.",
    stats: [
      {
        value: "5+",
        label: "Anos de Experiência"
      }
    ]
  },
  
  about: {
    title: "Design com propósito, código com paixão",
    subtitle: "Sobre Mim",
    description: "Sou um profissional criativo especializado em design gráfico e desenvolvimento de aplicativos com mais de 5 anos de experiência trabalhando com clientes de diversos setores. Minha abordagem combina visão artística com expertise técnica para criar soluções que não apenas são bonitas, mas também entregam resultados.",
    experience: {
      years: 5,
      description: "Anos de Experiência"
    },
    services: [
      {
        title: "Design Gráfico",
        description: "Identidade visual, materiais impressos, ativos digitais e mais.",
        icon: "pen-tool"
      },
      {
        title: "Desenvolvimento de Apps",
        description: "Aplicativos móveis, aplicações web e experiências interativas.",
        icon: "code"
      },
      {
        title: "Colaboração",
        description: "Trabalho próximo aos clientes para alcançar sua visão.",
        icon: "users"
      }
    ]
  },
  
  portfolio: {
    title: "Trabalhos Recentes",
    description: "Explore uma seleção dos meus projetos mais recentes em design gráfico e desenvolvimento de aplicativos.",
    categories: [
      {
        id: "all",
        label: "Todos"
      },
      {
        id: "graphic-design",
        label: "Design Gráfico"
      },
      {
        id: "app-development",
        label: "Desenvolvimento de Apps"
      }
    ]
  },
  
  testimonials: {
    title: "Depoimentos de Clientes",
    description: "Veja o que os clientes têm a dizer sobre trabalhar comigo."
  },
  
  blog: {
    title: "Últimos Artigos",
    description: "Pensamentos, insights e perspectivas da minha jornada em design e desenvolvimento."
  },
  
  contact: {
    title: "Entre em Contato",
    description: "Tem um projeto em mente? Vamos conversar sobre como podemos trabalhar juntos.",
    email: "contato@alexdesign.com.br",
    phone: "+55 (11) 98765-4321",
    address: "Rua do Design, 123\nSão Paulo, SP 01234-567",
    socialMedia: [
      {
        platform: "instagram",
        url: "https://instagram.com"
      },
      {
        platform: "twitter",
        url: "https://twitter.com"
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com"
      }
    ]
  },
  
  footer: {
    description: "Criando designs impressionantes e aplicações poderosas para clientes em todo o mundo.",
    navigation: [
      {
        title: "Navegação",
        links: [
          { label: "Início", url: "/" },
          { label: "Portfólio", url: "/portfolio" },
          { label: "Sobre", url: "/sobre" },
          { label: "Blog", url: "/blog" },
          { label: "Contato", url: "/contato" }
        ]
      },
      {
        title: "Serviços",
        links: [
          { label: "Design Gráfico", url: "#" },
          { label: "Design de Interface", url: "#" },
          { label: "Desenvolvimento de Apps", url: "#" },
          { label: "Desenvolvimento Web", url: "#" },
          { label: "Identidade Visual", url: "#" }
        ]
      }
    ],
    copyright: "© 2025 AlexDesign. Todos os direitos reservados."
  },

  // Nova Seção Legal com conteúdo placeholder
  legal: {
    privacyPolicyContent: '<p>Conteúdo padrão da Política de Privacidade. Por favor, edite.</p>',
    termsOfUseContent: '<p>Conteúdo padrão dos Termos de Uso. Por favor, edite.</p>'
  }
};