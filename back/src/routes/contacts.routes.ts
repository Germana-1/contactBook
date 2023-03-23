import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createContactSchema } from "../schemas/contacts.schema";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(createContactSchema),
  createContactController
);

contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

contactsRoutes.get("", ensureAuthMiddleware, listContactsController);

contactsRoutes.patch("/:id", ensureAuthMiddleware, updateContactController);

export default contactsRoutes;
