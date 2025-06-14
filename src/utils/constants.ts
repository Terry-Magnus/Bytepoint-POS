import { Dish, Order } from "./types"; // Adjust the import path

// constants/routes.ts
export const routes = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/overview",
  orders: "/orders",
  menu: "/menu",
};

// Sample dishes (reusing the previous array)
const dishes: Dish[] = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich beef and tomato sauce.",
    image: "https://example.com/images/spaghetti.jpg",
    in_stock: true,
    price: 12.99,
  },
  {
    id: 2,
    name: "Grilled Chicken Salad",
    description:
      "Fresh salad with grilled chicken breast, veggies, and vinaigrette.",
    image: "https://example.com/images/chicken-salad.jpg",
    in_stock: true,
    price: 9.49,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description:
      "Stone-baked pizza topped with mozzarella, basil, and tomato sauce.",
    image: "https://example.com/images/margherita-pizza.jpg",
    in_stock: false,
    price: 11.5,
  },
  {
    id: 4,
    name: "Beef Burger",
    description:
      "Juicy beef burger with cheese, lettuce, tomato, and special sauce.",
    image: "https://example.com/images/beef-burger.jpg",
    in_stock: true,
    price: 10.99,
  },
  {
    id: 5,
    name: "Vegan Buddha Bowl",
    description:
      "A healthy bowl of quinoa, chickpeas, roasted veggies, and tahini dressing.",
    image: "https://example.com/images/buddha-bowl.jpg",
    in_stock: true,
    price: 8.75,
  },
];

// Sample orders
export const orders: Order[] = [
  {
    id: 1,
    customer: "John Doe",
    items: [
      { dish: dishes[0], quantity: 2, price: dishes[0].price },
      { dish: dishes[1], quantity: 1, price: dishes[1].price },
    ],
    total: 2 * dishes[0].price + 1 * dishes[1].price,
    createdAt: "2025-06-13T10:30:00Z",
    updatedAt: "2025-06-13T10:45:00Z",
    type: "dine-in",
    status: "in-progress",
    table: "A5",
    guestCount: 3,
    paymentMethod: "cash",
    notes: "No cheese on the salad, please.",
  },
  {
    id: 2,
    customer: "Jane Smith",
    items: [
      { dish: dishes[2], quantity: 1, price: dishes[2].price },
      { dish: dishes[4], quantity: 2, price: dishes[4].price },
    ],
    total: 1 * dishes[2].price + 2 * dishes[4].price,
    createdAt: "2025-06-13T11:00:00Z",
    updatedAt: "2025-06-13T11:20:00Z",
    type: "takeaway",
    status: "ready",
    paymentMethod: "card",
  },
  {
    id: 3,
    customer: "Michael Johnson",
    items: [{ dish: dishes[3], quantity: 3, price: dishes[3].price }],
    total: 3 * dishes[3].price,
    createdAt: "2025-06-13T12:00:00Z",
    updatedAt: "2025-06-13T12:15:00Z",
    type: "delivery",
    status: "completed",
    deliveryAddress: "123 Main Street, Springfield",
    paymentMethod: "cash",
    notes: "Please deliver to the back door.",
  },
];

// export const paymentOrders: PaymentOrder[] = [
//   { id: 'A9', customer: 'Maja Becker', order: '#912', status: 'pay-now' },
//   { id: 'C2', customer: 'Erwan Richard', order: '#508', status: 'pay-now' },
//   { id: 'A2', customer: 'Stefan Meijer', order: '#904', status: 'pay-now' },
//   { id: 'A3', customer: 'Julie Madsen', order: '#803', status: 'pay-now' },
//   { id: 'B4', customer: 'Aulia Julie', order: '#897', status: 'pay-now' }
// ];
