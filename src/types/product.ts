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

export type cartProduct = {
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  amount: number;
  productColor: string;
  company: string;
};

export interface OrderAttributes {
  address: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  orderTotal: string;
  cartItems: cartProduct[];
  numItemsInCart: number;
}

export interface Order {
  id: number;
  attributes: OrderAttributes;
}

// Final list type
export type Orders = Order[];
