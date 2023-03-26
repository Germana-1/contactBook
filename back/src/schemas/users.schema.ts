import * as yup from "yup";
import { SchemaOf } from "yup";

import {
  IRetrieverUserResponse,
  IUserRequest,
  IUserResponse,
} from "../interfaces/users";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
});

const userReturnedData: SchemaOf<IUserResponse> = yup.object().shape({
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  id: yup.string().required(),
});

const retrieverUserReturnedData: SchemaOf<IRetrieverUserResponse> = yup
  .object()
  .shape({
    contacts: yup.array(
      yup.object().shape({
        createdAt: yup.date().required(),
        updatedAt: yup.date().required(),
        isFavorite: yup.string().notRequired(),
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
        id: yup.string().required(),
      })
    ),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    id: yup.string().required(),
  });

const listUserReturnedData: SchemaOf<IUserResponse[]> =
  yup.array(userReturnedData);

export {
  createUserSchema,
  userReturnedData,
  listUserReturnedData,
  retrieverUserReturnedData,
};
