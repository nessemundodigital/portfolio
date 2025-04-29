export interface PortfolioItem {
  id: string;
  title: string;
  category: 'graphic-design' | 'app-development';
  imageUrl: string;
  shortDescription: string;
  description: string;
  date: string;
  client: string;
  timeline: string;
  services: string[];
  tools: string[];
  projectUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'eco-marca',
    title: 'Identidade Visual EcoStore',
    category: 'graphic-design',
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Identidade visual completa para uma loja online ecológica.',
    description: 'Um projeto de identidade visual abrangente para a EcoStore, um marketplace online de produtos sustentáveis e ecológicos. O design incorpora a missão de consciência ambiental da empresa, mantendo uma estética moderna e limpa.',
    date: 'Agosto 2023',
    client: 'EcoStore Brasil',
    timeline: '3 meses',
    services: ['Estratégia de Marca', 'Design de Logo', 'Identidade Visual', 'Design de Embalagem', 'Manual da Marca'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    projectUrl: 'https://example.com/ecostore'
  },
  {
    id: 'app-fitness',
    title: 'Aplicativo FitTrack',
    category: 'app-development',
    imageUrl: 'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'App de acompanhamento fitness com planos personalizados.',
    description: 'FitTrack é um aplicativo móvel completo que oferece planos de treino personalizados, acompanhamento nutricional e análise de progresso. O app possui uma interface limpa e intuitiva projetada para uma experiência de usuário ideal.',
    date: 'Junho 2023',
    client: 'FitTrack Saúde',
    timeline: '5 meses',
    services: ['Design de UI/UX', 'Desenvolvimento Mobile', 'Integração Backend', 'Testes de Usuário'],
    tools: ['React Native', 'Node.js', 'Firebase', 'Figma'],
    projectUrl: 'https://example.com/fittrack'
  },
  {
    id: 'cafe-marca',
    title: 'Marca Café Artesanal',
    category: 'graphic-design',
    imageUrl: 'https://images.pexels.com/photos/6205772/pexels-photo-6205772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Identidade visual rústica para uma cafeteria especializada.',
    description: 'Uma identidade visual rústica e sofisticada para o Café Artesanal, uma cafeteria especializada focada em grãos de alta qualidade e eticamente sourced. O branding inclui design de logo, embalagens, layouts de menu e materiais promocionais.',
    date: 'Abril 2023',
    client: 'Café Artesanal',
    timeline: '2 meses',
    services: ['Design de Logo', 'Design de Menu', 'Embalagem', 'Sinalização', 'Materiais para Redes Sociais'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    projectUrl: 'https://example.com/cafeartesanal'
  },
  {
    id: 'app-viagem',
    title: 'App Wanderlust Viagens',
    category: 'app-development',
    imageUrl: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Aplicativo interativo de planejamento e reserva de viagens.',
    description: 'Wanderlust é um aplicativo de viagens que ajuda os usuários a descobrir, planejar e reservar suas viagens perfeitas. O app apresenta mapas interativos, recomendações personalizadas e um processo de reserva simplificado, tudo em uma interface visualmente deslumbrante.',
    date: 'Fevereiro 2023',
    client: 'Wanderlust Viagens',
    timeline: '6 meses',
    services: ['Design de UI/UX', 'Desenvolvimento Frontend', 'Integração Backend', 'Desenvolvimento de API'],
    tools: ['React Native', 'Node.js', 'MongoDB', 'Mapbox API'],
    projectUrl: 'https://example.com/wanderlust'
  },
  {
    id: 'relatorio-anual',
    title: 'Relatório Anual Corporativo',
    category: 'graphic-design',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'Relatório anual visualmente envolvente para empresa financeira.',
    description: 'Um design de relatório anual visualmente envolvente para uma empresa líder em serviços financeiros. O relatório combina visualização de dados, fotografia e tipografia para comunicar efetivamente o desempenho anual da empresa e perspectivas futuras.',
    date: 'Janeiro 2023',
    client: 'Horizon Serviços Financeiros',
    timeline: '1 mês',
    services: ['Design de Publicação', 'Visualização de Dados', 'Tipografia', 'Produção Gráfica'],
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Tableau'],
    projectUrl: 'https://example.com/horizon-relatorio'
  },
  {
    id: 'casa-inteligente',
    title: 'App Casa Inteligente',
    category: 'app-development',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    shortDescription: 'App IoT para controle de dispositivos domésticos inteligentes.',
    description: 'Casa Inteligente é um aplicativo IoT que permite aos usuários controlar vários dispositivos inteligentes em sua casa de qualquer lugar. O app apresenta uma interface simples e intuitiva com atualizações de status em tempo real e configurações de automação.',
    date: 'Novembro 2022',
    client: 'Tecnologias Casa Inteligente',
    timeline: '4 meses',
    services: ['Design de UI/UX', 'Integração IoT', 'Desenvolvimento Frontend', 'Desenvolvimento Backend'],
    tools: ['Swift', 'Kotlin', 'Node.js', 'Protocolo MQTT'],
    projectUrl: 'https://example.com/casainteligente'
  }
];