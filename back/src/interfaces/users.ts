export interface IUserRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRetrieverUserResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: object[];
}

export interface IUserUpdate {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
}
