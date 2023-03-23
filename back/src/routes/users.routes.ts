import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post("", createUserController);

usersRoutes.patch("", ensureAuthMiddleware, updateUserController);

usersRoutes.get("", ensureAuthMiddleware, listUsersController);

usersRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default usersRoutes;
