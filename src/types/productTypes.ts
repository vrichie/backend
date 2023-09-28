// types/productTypes.ts

// Define a custom type for product form data
type ProductFormData = {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  categoryId: number;
  // Add other form fields as needed
};

// Define a custom type for product responses
type ProductResponse = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string | null;
  categoryId: number;
  // Add other fields as needed
};

export { ProductFormData, ProductResponse };
