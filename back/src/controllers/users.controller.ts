import createUserService from "../services/users/createUser.service";
import { Response, Request } from "express";
import updateUserService from "../services/users/updateUser.service";
import listUsersService from "../services/users/listUsers.service";
import deleteUserService from "../services/users/deleteUser.service";
import retrieverUserService from "../services/users/retrieverUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.user.id);
  return res.status(200).json(updatedUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const retrieverUserController = async (req: Request, res: Response) => {
  const user = await retrieverUserService(req.user.id);
  return res.status(200).json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.user.id);
  return res.status(204).json({});
};

export {
  createUserController,
  updateUserController,
  listUsersController,
  deleteUserController,
  retrieverUserController,
};
