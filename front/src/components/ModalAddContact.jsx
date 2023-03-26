import { useContext } from "react";

import { ContactContext } from "../context/ContactContext";
import { ButtonPrimary } from "../styles/button";
import { ModalStyled } from "../styles/modal";

export const ModalAddContact = () => {
  const { addContact, register, handleSubmit, errors, setShowModal } =
    useContext(ContactContext);

  return (
    <ModalStyled>
      <div>
        <div>
          <h2>Novo contato</h2>
          <span onClick={() => setShowModal(false)}>x</span>
        </div>

        <form className="form" onSubmit={handleSubmit(addContact)}>
          <label htmlFor="fullName">Nome completo</label>
          <input
            placeholder="Nome do contato"
            id="fullName"
            {...register("fullName")}
          />

          <span>{errors.fullName?.message}</span>

          <label htmlFor="phone">Telefone</label>
          <input
            placeholder="(00) 00000-0000"
            id="phone"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <label htmlFor="email">E-mail</label>
          <input
            placeholder="contato@email.com"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <ButtonPrimary type="submit">Adicionar contato</ButtonPrimary>
        </form>
      </div>
    </ModalStyled>
  );
};
