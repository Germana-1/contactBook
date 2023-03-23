import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/users";
import { listUserReturnedData } from "../../schemas/users.schema";

const listContactsService = async (userId: string) => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = await usersRepository.findOne({
    where: { id: userId },
    relations: ["contacts"],
  });

  return users?.contacts;
};

export default listContactsService;
