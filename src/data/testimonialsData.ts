export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Williams',
    company: 'Eco Soluções',
    quote: 'Trabalhar com o Alex foi um divisor de águas para nossa marca. Os designs capturaram perfeitamente a visão e os valores da nossa empresa, e o desenvolvimento do app foi incrivelmente tranquilo. Vimos um aumento de 40% no engajamento dos clientes no primeiro mês!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Miguel Chen',
    company: 'TechStart Ventures',
    quote: 'A excepcional capacidade do Alex de combinar visuais impressionantes com design funcional transformou nosso produto. A atenção aos detalhes e compreensão da experiência do usuário é incomparável. Não poderia estar mais feliz com os resultados.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    company: 'Café Artesanal',
    quote: 'O trabalho de branding que o Alex criou para nossa cafeteria foi fundamental para nosso sucesso. Nossos clientes frequentemente elogiam o design, e isso nos ajudou a nos destacar em um mercado competitivo. Trabalho verdadeiramente excepcional!',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Daniel Wilson',
    company: 'Fitness First',
    quote: 'O aplicativo móvel que o Alex desenvolveu para nosso centro fitness superou todas as expectativas. O design intuitivo e a funcionalidade suave melhoraram significativamente a experiência dos nossos clientes. Recomendo muito os serviços do Alex!',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    name: 'Julia Thompson',
    company: 'Agência de Marketing Criativo',
    quote: 'O Alex tem um olhar incrível para design e uma profunda compreensão da experiência do usuário. O redesign do site foi concluído antes do prazo e recebeu feedback extremamente positivo dos nossos clientes.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];