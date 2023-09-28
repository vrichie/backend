import { userService } from "../services/userService";

const createUser = async (req: any, res: any) => {
  try {
    const { data } = req.body;
    const user = await userService.createUser(data);
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUser = async (req: any, res: any) => {
  try {
    const { id } = req.body;
    const user = await userService.getUser(id);
    if (!user) {
      return res.status(404).json({ data: {}, message: "No such User" });
    }
    return res.status(201).json({ data: user });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const getUsers = async (req: any, res: any) => {
  try {
    const user = await userService.getUsers();
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const updateUser = async (req: any, res: any) => {
  try {
    const { data, id } = req.body;
    // check if user exist
    const getUser = await userService.getUser(id);
    if (!getUser) {
      return res.status(404).json({ data: {}, message: "No such user" });
    }
    const user = await userService.updateUser(data, id);
    return res.status(201).json({ data: user });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.body;
    // check if user exist
    const getUser = await userService.getUser(id);
    if (!getUser) {
      return res.status(404).json({ data: {}, message: "No such user" });
    }
    const user = await userService.deleteUser(id);
    if (user) {
      return res
        .status(200)
        .json({ data: user, message: "User Deleted Successfuly" });
    } else {
      return res
        .status(400)
        .json({ data: {}, message: "Error Deleting, Try again" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export const userController = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
