import { Address, Order, CartItem, Favorite } from "@prisma/client";

// Define a custom type for user form data
type UserFormData = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // Add other form fields as needed
};

// Define a custom type for user responses
type UserResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  addresses?: Address[];
  orders?: Order[];
  cartItems?: CartItem[];
  favorites?: Favorite[];
};

export { UserFormData, UserResponse };
