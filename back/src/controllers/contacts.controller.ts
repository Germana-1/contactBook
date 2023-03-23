import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, req.user.id);
  return res.status(201).json(newContact);
};
export { createContactController };
