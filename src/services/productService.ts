import { PrismaClient } from "@prisma/client";
import { ProductFormData, ProductResponse } from "../types/productTypes";
const prisma = new PrismaClient();

const createProduct = async (
  data: ProductFormData
): Promise<ProductResponse> => {
  const product = await prisma.product.create({ data });
  return product;
};

const getProduct = async (id: number): Promise<ProductResponse | null> => {
  const product = await prisma.product.findUnique({ where: { id: id } });
  return product;
};

const getProducts = async (): Promise<ProductResponse[]> => {
  const products = await prisma.product.findMany();
  return products;
};

const UpdateProduct = async (
  id: number,
  data: ProductFormData
): Promise<ProductResponse> => {
  const product = await prisma.product.update({
    where: { id: id },
    data: data,
  });
  return product;
};

const deleteProduct = async (id: number): Promise<ProductResponse> => {
  const product = await prisma.product.delete({ where: { id: id } });
  return product;
};

export const productService = {
  createProduct,
  getProduct,
  getProducts,
  UpdateProduct,
  deleteProduct,
};
