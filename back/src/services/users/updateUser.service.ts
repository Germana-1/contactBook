import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users";
import { userReturnedData } from "../../schemas/users.schema";
import { hashSync } from "bcryptjs";

const updateUserService = async (
  updateData: IUserUpdate,
  userId: string
): Promise<IUserUpdate> => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  if (updateData.password) {
    updateData.password = hashSync(updateData.password, 10);
  }

  await userRepository.update({ id: userId }, updateData);

  const mergeData = Object.assign(foundUser, updateData);

  const updatedUser = await userReturnedData.validate(mergeData, {
    stripUnknown: true,
  });

  return updatedUser;
};

export default updateUserService;
