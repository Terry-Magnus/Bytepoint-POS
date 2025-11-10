export interface Order {
  orderID: number;
  user: User;
  userID: string;
  itemName: string;
  quantity: number;
  itemPrice: number;
  totalPrice: number;
  masterID: number;
}

export interface User {
  userEmail: string;
  password: string;
  usercode: string;
}

export interface Menu {
  itemID: number;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  restaurantName: string;
  restaurantID: number;
  imageUrl: string;
}

export interface Restaurant {
  restaurantID: number;
  restaurantName: string;
  address: string;
  type: string;
  parkingLot: string;
}

export interface Product {
  itemID: number;
  itemName: string;
  itemDescription: string;
  itemPrice: string;
  restaurantName: string;
  restaurantID: string;
  imageUrl: string;
}
