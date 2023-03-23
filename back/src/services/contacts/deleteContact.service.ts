import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const findContact = await contactRepository.findOneBy({
    id: id,
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.softRemove(findContact);
};

export default deleteContactService;
