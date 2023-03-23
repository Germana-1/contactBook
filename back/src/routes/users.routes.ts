import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);

usersRoutes.patch("", ensureAuthMiddleware, updateUserController);

usersRoutes.get("", ensureAuthMiddleware, listUsersController);

usersRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default usersRoutes;
