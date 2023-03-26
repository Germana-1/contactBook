import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ModalDeleteStyled } from "../styles/modal";

export const ModalDelete = () => {
  const { showDeleteModal, setShowDeleteModal, deleteUser } =
    useContext(UserContext);

  return (
    <ModalDeleteStyled>
      <div className="container">
        <span
          className="close"
          onClick={(e) => {
            e.preventDefault();
            return setShowDeleteModal(!showDeleteModal);
          }}
        >
          &times;
        </span>
        <h2>Excluir conta</h2>
        <p>
          Tem certeza de que deseja excluir sua conta? Esta ação não pode ser
          desfeita.
        </p>
        <button
          className="btnDelete"
          onClick={(e) => {
            e.preventDefault();
            return deleteUser();
          }}
        >
          Excluir conta
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            return setShowDeleteModal(!showDeleteModal);
          }}
        >
          Cancelar
        </button>
      </div>
    </ModalDeleteStyled>
  );
};
