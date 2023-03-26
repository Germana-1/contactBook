import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonDelete, ButtonPrimary } from "../styles/button";
import { ModalStyled } from "../styles/modal";
import { BsTrash } from "react-icons/bs";
import { ContactContext } from "../context/ContactContext";
import { UserContext } from "../context/UserContext";

export const ModalUpdateContact = () => {
  const { updateContact, setShowModalUpdate, contact, deleteContact } =
    useContext(ContactContext);

  const { user, updateUser, setShowDeleteModal } = useContext(UserContext);

  const { register, handleSubmit } = useForm({ defaultValues: contact });

  const updateFunction = (data) => {
    if (user === contact) {
      setShowModalUpdate(false);
      return updateUser(data);
    }
    setShowModalUpdate(false);
    return updateContact(data);
  };

  return (
    <ModalStyled>
      <div>
        <div>
          <h2>Editar Contato</h2>
          <span onClick={() => setShowModalUpdate(false)}>x</span>
        </div>
        <form className="form" onSubmit={handleSubmit(updateFunction)}>
          <label htmlFor="fullName">Nome completo</label>
          <input
            placeholder="Nome do contato"
            id="fullName"
            {...register("fullName")}
          />

          <label htmlFor="phone">Telefone</label>
          <input
            placeholder="(00) 00000-0000"
            id="phone"
            {...register("phone")}
          />

          <label htmlFor="email">E-mail</label>
          <input
            placeholder="contato@email.com"
            id="email"
            {...register("email")}
          />

          <div className="containerBtns">
            <ButtonPrimary className="btnEdit" type="submit">
              Editar
            </ButtonPrimary>
            <ButtonDelete
              type="button"
              onClick={() => {
                if (user !== contact) {
                  return deleteContact(contact.id);
                }
                setShowModalUpdate(false);
                setShowDeleteModal(true);
              }}
            >
              <BsTrash />
            </ButtonDelete>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};
