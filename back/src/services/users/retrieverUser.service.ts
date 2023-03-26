import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import {
  retrieverUserReturnedData,
  userReturnedData,
} from "../../schemas/users.schema";

const retrieverUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: userId },
    relations: ["contacts"],
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const userReturned = await retrieverUserReturnedData.validate(
    await findUser,
    {
      stripUnknown: true,
    }
  );

  return userReturned;
};

export default retrieverUserService;
