import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts";
import { contactReturnedData } from "../../schemas/contacts.schema";

const createContactService = async (
  dataContact: IContactRequest,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const findEmail = contactRepository.exist({
    where: { email: dataContact.email },
  });

  if (await findEmail) {
    throw new AppError("Email already exists", 409);
  }

  const findPhone = contactRepository.exist({
    where: { phone: dataContact.phone },
  });

  if (await findPhone) {
    throw new AppError("Phone already exists", 409);
  }

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({ ...dataContact, user: findUser });

  await contactRepository.save(contact);

  const contactReturned = await contactReturnedData.validate(await contact, {
    stripUnknown: true,
  });

  return contactReturned;
};

export default createContactService;
