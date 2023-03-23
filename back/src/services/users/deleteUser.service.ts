import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({
    id: id,
  });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.softRemove(foundUser);
};

export default deleteUserService;
