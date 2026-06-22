export type FaceShapeId = 'round' | 'oval' | 'square' | 'heart';
export type EyewearShape = 'round' | 'square' | 'aviator' | 'cat-eye' | 'rectangular';
export type EyewearCategory = 'grau-masculino' | 'grau-feminino' | 'solar';

export interface GlassFrame {
  id: string;
  name: string;
  category: EyewearCategory;
  style: string;
  shape: EyewearShape;
  priceDescription: string;
  rating: number;
  reviewsCount: number;
  imageSeed: string; // Used to seed picsum or dynamic placeholder
  description: string;
  features: string[];
}

export interface FaceShape {
  id: FaceShapeId;
  name: string;
  description: string;
  recommendedShapes: EyewearShape[];
  tip: string;
  badge: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarSeed: string;
  date: string;
}
