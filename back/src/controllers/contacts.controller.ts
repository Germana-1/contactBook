import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContact.service";

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

const updateContactController = async (req: Request, res: Response) => {
  const updatedContact = await updateContactService(req.body, req.params.id);
  return res.status(200).json(updatedContact);
};

export {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
};
