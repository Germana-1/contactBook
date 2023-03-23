import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
} from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactController);

contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

contactsRoutes.get("", ensureAuthMiddleware, listContactsController);

export default contactsRoutes;
