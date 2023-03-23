import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, req.user.id);
  return res.status(201).json(newContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  return res.status(204).json({});
};

export { createContactController, deleteContactController };
