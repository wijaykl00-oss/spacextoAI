export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  iconName: string;
  image?: string;
  description: string;
  features: string[];
  sales: number;
  tag?: string;
}
