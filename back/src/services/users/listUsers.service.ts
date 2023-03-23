import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/users";
import { listUserReturnedData } from "../../schemas/users.schema";

const listUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = usersRepository.find();

  const listUsers = await listUserReturnedData.validate(await users, {
    stripUnknown: true,
  });

  return listUsers;
};

export default listUsersService;
