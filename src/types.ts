export interface Product {
  id: string;
  name: string;
  price: number;
  iconName: string;
  description: string;
  features: string[];
  sales: number;
  tag?: string;
}
