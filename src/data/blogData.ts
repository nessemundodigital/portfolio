export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'principios-design',
    title: 'Princípios Essenciais de Design que Todo Designer Deve Conhecer',
    date: '2023-09-15',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Explorando os princípios fundamentais do design que formam a base da comunicação visual efetiva e do apelo estético.',
    tags: ['Design', 'Princípios', 'Comunicação Visual']
  },
  {
    id: 'tendencias-apps',
    title: 'Tendências de Desenvolvimento de Apps para 2023',
    date: '2023-08-22',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Um olhar sobre as tecnologias emergentes e tendências de design que estão moldando o futuro do desenvolvimento de aplicativos móveis.',
    tags: ['Mobile', 'Desenvolvimento', 'Tendências', 'Tecnologia']
  },
  {
    id: 'importancia-marca',
    title: 'Por que uma Marca Forte é Mais Importante do que Nunca',
    date: '2023-07-10',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Em um mercado cada vez mais competitivo, uma marca forte tornou-se essencial para empresas que desejam se destacar e conectar com seu público.',
    tags: ['Branding', 'Marketing', 'Negócios']
  },
  {
    id: 'diferenca-ui-ux',
    title: 'Entendendo a Diferença entre Design de UI e UX',
    date: '2023-06-05',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Esclarecendo os conceitos frequentemente confundidos de UI e UX design, sua importância individual e como trabalham juntos.',
    tags: ['UI', 'UX', 'Design', 'Experiência do Usuário']
  },
  {
    id: 'psicologia-cores',
    title: 'A Psicologia das Cores no Design',
    date: '2023-05-18',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Como diferentes cores podem influenciar emoções, percepções e comportamentos, e como designers podem usar esse conhecimento efetivamente.',
    tags: ['Teoria das Cores', 'Psicologia', 'Design']
  },
  {
    id: 'design-responsivo',
    title: 'Melhores Práticas para Design Responsivo',
    date: '2023-04-22',
    author: 'Alex Silva',
    coverImage: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Técnicas e abordagens essenciais para garantir que seus sites funcionem perfeitamente em todos os dispositivos e tamanhos de tela.',
    tags: ['Web Design', 'Responsivo', 'Desenvolvimento']
  }
];