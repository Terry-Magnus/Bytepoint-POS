export interface Order {
  id: number;
  customer: string;
  items: OrderItem[];
  total: number;
  createdAt?: string; // ISO date string
  updatedAt?: string; // ISO date string
  type: "dine-in" | "takeaway" | "delivery";
  status: "ready" | "in-progress" | "completed";
  table?: string; // For dine-in orders
  guestCount?: number;
  deliveryAddress?: string;
  notes?: string;
  paymentMethod?: "cash" | "card";
}

export interface OrderItem {
  dish: Dish;
  quantity: number;
  price: number;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  in_stock: boolean;
  price: number;
}

export interface PopularDish extends Dish {
  orders: number;
  rank: number;
}
