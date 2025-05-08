export interface ProductAttributes {
  title: string;
  price: string;
  image: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  shipping: boolean;
  colors: string[];
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}
