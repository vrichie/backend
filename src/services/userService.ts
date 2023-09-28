import { UserFormData, UserResponse } from "../types/userTypes";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (data: UserFormData): Promise<UserFormData> => {
  const user = await prisma.user.create({ data });
  return user;
};

const getUsers = async (): Promise<UserResponse[]> => {
  const user: UserResponse[] = await prisma.user.findMany();
  return user;
};
const getUser = async (id: number): Promise<UserFormData | null> => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return user;
};
const updateUser = async (
  data: UserFormData,
  id: number
): Promise<UserResponse> => {
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
  return user;
};

const deleteUser = async (id: number): Promise<UserResponse> => {
  const user = await prisma.user.delete({ where: { id: id } });
  return user;
};
export const userService = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
