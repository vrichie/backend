import { productService } from "../services/productService";

const createProduct = async (req: any, res: any) => {
  try {
    const { data } = req.body;
    const product = await productService.createProduct(data);
    if (!product) {
      return res.status(400).json({ message: "Unable to create Product" });
    } else {
      return res.status(201).json({ data: product });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const productController = { createProduct };

// Implement other product-related controller actions (e.g., updateProduct, deleteProduct, etc.)
