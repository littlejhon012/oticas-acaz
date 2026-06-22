import { GlassFrame, FaceShape, ServiceDetail, Testimonial } from './types';

export const faceShapesData: FaceShape[] = [
  {
    id: 'oval',
    name: 'Rosto Oval',
    description: 'Suas proporções são equilibradas, com a testa ligeiramente mais larga que o maxilar.',
    recommendedShapes: ['rectangular', 'square', 'aviator', 'round'],
    tip: 'Praticamente qualquer formato fica incrível em você! Aproveite para ousar com designs marcantes.',
    badge: 'Harmônico'
  },
  {
    id: 'round',
    name: 'Rosto Redondo',
    description: 'A largura e o comprimento do seu rosto são semelhantes, com linhas mais suaves e maxilar arredondado.',
    recommendedShapes: ['square', 'rectangular'],
    tip: 'Modelos retangulares e quadrados são seus melhores amigos, pois adicionam linhas de força e ângulos ao rosto.',
    badge: 'Suave'
  },
  {
    id: 'square',
    name: 'Rosto Quadrado',
    description: 'Sua testa, maçãs do rosto e maxilar têm a mesma largura, com ângulos retos e marcantes.',
    recommendedShapes: ['round', 'aviator', 'cat-eye'],
    tip: 'Armações redondas, ovais ou gatinho suavizam as linhas marcantes do seu maxilar, trazendo leveza e delicadeza.',
    badge: 'Ângulos Fortes'
  },
  {
    id: 'heart',
    name: 'Rosto Coração',
    description: 'Sua testa é mais larga e suas maçãs do rosto são altas, afinando até um queixo mais estreito ou pontudo.',
    recommendedShapes: ['cat-eye', 'round', 'rectangular'],
    tip: 'Modelos gatinho ou redondos que sejam ligeiramente mais largos que a testa trazem o equilíbrio perfeito na fisionomia.',
    badge: 'Delicado'
  }
];

export const glassFramesData: GlassFrame[] = [
  {
    id: 'frame-1',
    name: 'Acaz Milano Crystal',
    category: 'grau-feminino',
    style: 'Cristal Translúcido Premium',
    shape: 'cat-eye',
    priceDescription: 'A partir de 3x R$ 89',
    rating: 4.9,
    reviewsCount: 42,
    imageSeed: 'crystal-glasses',
    description: 'Acetato italiano translúcido com hastes internas reforçadas em filete dourado brilhante. Sutil e elegante.',
    features: ['Acetato Italiano Premium', 'Conforto anatômico excepcional', 'Hastes com agulha antialérgica']
  },
  {
    id: 'frame-2',
    name: 'Acaz London Tortoise',
    category: 'grau-feminino',
    style: 'Tartaruga Vintage Rústico',
    shape: 'round',
    priceDescription: 'A partir de 3x R$ 94',
    rating: 5.0,
    reviewsCount: 37,
    imageSeed: 'tortoise-glasses',
    description: 'Design retrô arredondado em nuances clássicas de tartaruga. Traz riqueza intelectual e calor para o olhar.',
    features: ['Plaquetas integradas confortáveis', 'Dobradiças de alta precisão', 'Ideal para lentes corretivas finas']
  },
  {
    id: 'frame-3',
    name: 'Acaz Paris Titanium',
    category: 'grau-masculino',
    style: 'Grafite Fosco Ultraleve',
    shape: 'rectangular',
    priceDescription: 'A partir de 4x R$ 98',
    rating: 4.8,
    reviewsCount: 29,
    imageSeed: 'titanium-glasses',
    description: 'Estrutura confeccionada inteiramente em titânio cirúrgico, pesando apenas 8 gramas. Resistência e visual limpo.',
    features: ['Titânio Flexível e Resistente', 'Acabamento acetinado fosco', 'Plaquetas de silicone cirúrgico']
  },
  {
    id: 'frame-4',
    name: 'Acaz Madrid Bold Black',
    category: 'grau-masculino',
    style: 'Negro Fosco Arquitetônico',
    shape: 'square',
    priceDescription: 'A partir de 3x R$ 85',
    rating: 4.9,
    reviewsCount: 51,
    imageSeed: 'black-glasses',
    description: 'Armação encorpada de linhas quadradas marcantes. Ideal para expressar personalidade e estilo corporativo forte.',
    features: ['Acetato de alta densidade', 'Dobradiça reforçada triple-lock', 'Excelente suporte para miopias altas']
  },
  {
    id: 'frame-5',
    name: 'Acaz Riviera Gold',
    category: 'solar',
    style: 'Dourado Clássico de Sol',
    shape: 'aviator',
    priceDescription: 'A partir de 4x R$ 112',
    rating: 5.0,
    reviewsCount: 63,
    imageSeed: 'gold-sunglasses',
    description: 'O eterno aviador redesenhado com hastes de curvas fluidas e lentes solares polarizadas premium de tom verde-g-15.',
    features: ['Lentes Polarizadas UV400', 'Metal anticorrosivo banhado', 'Estética clássica atemporal']
  },
  {
    id: 'frame-6',
    name: 'Acaz Copa Sun Amber',
    category: 'solar',
    style: 'Âmbar Solar Tartaruga',
    shape: 'square',
    priceDescription: 'A partir de 3x R$ 99',
    rating: 4.8,
    reviewsCount: 45,
    imageSeed: 'vintage-sunglasses',
    description: 'Armação marcante com lentes marrons degradê e bloqueio integral contra luz solar nociva. O ápice do estilo praiano chic.',
    features: ['Proteção total contra raios UVA/UVB', 'Acetato polido à mão', 'Visual veraneio italiano']
  },
  {
    id: 'frame-7',
    name: 'Acaz Venice Rosé',
    category: 'grau-feminino',
    style: 'Rosé e Ouro Fino',
    shape: 'round',
    priceDescription: 'A partir de 3x R$ 92',
    rating: 5.0,
    reviewsCount: 19,
    imageSeed: 'rose-glasses',
    description: 'Metal fino e macio banhado a ouro rosê. Detalhes em baixo relevo nas hastes que conferem um ar poético e romântico.',
    features: ['Visual suave e minimalista', 'Banhado em ouro antialérgico', 'Extremamente leve e anatômico']
  },
  {
    id: 'frame-8',
    name: 'Acaz Verona Platinum',
    category: 'solar',
    style: 'Solar Gatinho Vintage',
    shape: 'cat-eye',
    priceDescription: 'A partir de 4x R$ 105',
    rating: 4.9,
    reviewsCount: 31,
    imageSeed: 'cateye-sunglasses',
    description: 'Armação de gatinho ultra-glamorosa com detalhes metalizados prateados e lentes escuras. Ideal para destacar o visual urbano moderno.',
    features: ['Design gatinho marcante', 'Anti-risco premium nas lentes', 'Conforto prolongado']
  }
];

export const servicesData: ServiceDetail[] = [
  {
    id: 'service-1',
    title: 'Exame de Vista Gratuito',
    description: 'Ao adquirir sua armação e lentes na Ótica Acaz, o seu exame de vista completo computadorizado é 100% gratuito. Cuidado integral com profissionalismo.',
    iconName: 'Eye',
    benefit: 'Economia e precisão técnica'
  },
  {
    id: 'service-2',
    title: 'Curadoria de Armações',
    description: 'Nossa equipe realiza curadoria estética de óculos gratuita para selecionar as cores e modelos perfeitos de acordo com as linhas reais do seu rosto.',
    iconName: 'Sparkles',
    benefit: 'Seu estilo autêntico'
  },
  {
    id: 'service-3',
    title: 'Lentes com Alta Tecnologia',
    description: 'Oferecemos o que há de melhor no mundo em proteção azul, antirreflexo inteligente, fotossensíveis de transição rápida e progressivos multifocais.',
    iconName: 'ShieldCheck',
    benefit: 'Nitidez e descanso ocular'
  },
  {
    id: 'service-4',
    title: 'Laboratório Próprio',
    description: 'Montagem robotizada de lentes com tolerância zero para distorções. Entregamos seus óculos de grau completos com extremo rigor técnico e agilidade.',
    iconName: 'Settings2',
    benefit: 'Entrega ágil e segura'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Mariana Azevedo',
    role: 'Arquiteta',
    text: 'Fiz a consultoria de estilo na Ótica Acaz e me surpreendi. Encontrei a armação cristal perfeita que realça meu rosto sem pesar na expressão. O atendimento é humano de verdade!',
    rating: 5,
    avatarSeed: 'mariana',
    date: 'Há 2 semanas'
  },
  {
    id: 'review-2',
    name: 'Dr. Roberto Mendes',
    role: 'Cardiologista',
    text: 'Como médico, prezo por exatidão. O exame de vista computadorizado na Acaz foi extremamente minucioso. Minhas lentes multifocais ficaram perfeitas desde o primeiro minuto, sem tontura.',
    rating: 5,
    avatarSeed: 'roberto',
    date: 'Há 1 mês'
  },
  {
    id: 'review-3',
    name: 'Juliana Pires',
    role: 'Designer Gráfica',
    text: 'Passo o dia todo em frente ao computador. Meus óculos com proteção azul da Ótica Acaz reduziram absurdamente minha fadiga ocular e minhas dores de cabeça no fim do expediente. Super recomendo!',
    rating: 5,
    avatarSeed: 'juliana',
    date: 'Há 3 dias'
  }
];
