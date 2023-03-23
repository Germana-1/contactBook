import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { userReturnedData } from "../../schemas/users.schema";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = userRepository.exist({ where: { email: userData.email } });

  if (await findUser) {
    throw new AppError("user already exists", 409);
  }

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const userReturned = await userReturnedData.validate(await user, {
    stripUnknown: true,
  });

  return userReturned;
};

export default createUserService;
