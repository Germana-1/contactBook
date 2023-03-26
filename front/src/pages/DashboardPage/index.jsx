import { useContext } from "react";
import { ContactsList } from "../../components/ContactsList";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalDelete } from "../../components/ModalDelete";
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { ContactContext } from "../../context/ContactContext";
import { UserContext } from "../../context/UserContext";
import {
  ContainerDashboardStyled,
  ContainerUserStyled,
} from "../../styles/container";
import { HeaderDashboardStyled } from "../../styles/header";
import { LinkStyled } from "../../styles/link";
import { FaPencilAlt } from "react-icons/fa";

export const DashboardPage = () => {
  const { logout, user, showDeleteModal } = useContext(UserContext);

  const {
    showModal,
    setShowModal,
    showModalUpdate,
    setShowModalUpdate,
    setContact,
  } = useContext(ContactContext);

  return (
    <ContainerDashboardStyled>
      <HeaderDashboardStyled className="dashboard">
        <img
          src={process.env.PUBLIC_URL + "/agenda.png"}
          alt="home"
          height={"50px"}
          width={"50px"}
        />
        <h1 className="gradient">Agenda</h1>

        <LinkStyled to={"/"} onClick={logout}>
          Sair
        </LinkStyled>
      </HeaderDashboardStyled>
      <main>
        <div className="containerBtnAdd">
          <h2>Meus dados</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              return setShowModalUpdate(!showModalUpdate), setContact(user);
            }}
          >
            <FaPencilAlt />
          </button>
        </div>
        <ContainerUserStyled>
          <div>
            <h3>Nome: {user.fullName}</h3>
            <p>E-mail: {user.email}</p>
            <p>Telefone: {user.phone}</p>
          </div>
        </ContainerUserStyled>
        <div className="containerBtnAdd">
          <h2>Meus contatos</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              return setShowModal(!showModal);
            }}
          >
            +
          </button>
        </div>
        <ContactsList />
        {showModal && <ModalAddContact />}
        {showModalUpdate && <ModalUpdateContact />}
        {showDeleteModal && <ModalDelete />}
      </main>
    </ContainerDashboardStyled>
  );
};
