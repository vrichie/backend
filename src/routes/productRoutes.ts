import express from "express";
import { productController } from "../controllers/productController";

const router = express.Router();
router.post("/products", productController.createProduct);
// Define other product routes (e.g., GET /products, PUT /products/:id, DELETE /products/:id, etc.)

module.exports = router;
