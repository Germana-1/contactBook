import { Router } from "express";
import { createContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactController);

export default contactsRoutes;
