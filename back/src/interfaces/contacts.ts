import { IUserResponse } from "./users";

export interface IContactRequest {
  fullName: string;
  email: string;
  phone: string;
  isFavorite?: boolean;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  isFavorite: boolean;
  user: object;
  createdAt: Date;
  updatedAt: Date;
}
