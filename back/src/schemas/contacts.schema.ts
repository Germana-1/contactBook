import * as yup from "yup";
import { SchemaOf } from "yup";

import { IContactRequest, IContactResponse } from "../interfaces/contacts";
import { userReturnedData } from "./users.schema";

const createContactSchema: SchemaOf<IContactRequest | any> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    isFavorite: yup.string().notRequired(),
  });

const contactReturnedData: SchemaOf<IContactResponse | any> = yup
  .object()
  .shape({
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    user: userReturnedData.required(),
    isFavorite: yup.string().notRequired(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    id: yup.string().required(),
  });

const listContactReturnedData: SchemaOf<IContactResponse[] | any> =
  yup.array(contactReturnedData);

export { createContactSchema, contactReturnedData, listContactReturnedData };
