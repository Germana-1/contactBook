import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { IContactUpdate } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contacts.entity";

const updateContactService = async (
  updateData: IContactUpdate,
  id: string
): Promise<IContactUpdate> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const findContact = await contactRepository.findOneBy({
    id: id,
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update({ id: id }, updateData);

  const mergeData = Object.assign(findContact, updateData);

  return mergeData;
};

export default updateContactService;
