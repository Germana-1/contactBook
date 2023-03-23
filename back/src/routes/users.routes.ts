import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);

usersRoutes.patch("/:id", updateUserController);

usersRoutes.get("", listUsersController);

usersRoutes.delete("/:id", deleteUserController);

export default usersRoutes;
