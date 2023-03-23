import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactsService from "../services/contacts/listContacts.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, req.user.id);
  return res.status(201).json(newContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);
  return res.status(204).json({});
};

const listContactsController = async (req: Request, res: Response) => {
  const users = await listContactsService(req.user.id);
  return res.status(200).json(users);
};

export {
  createContactController,
  deleteContactController,
  listContactsController,
};
