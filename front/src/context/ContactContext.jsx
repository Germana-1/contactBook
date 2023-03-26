import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../service/api";
import { schema } from "../validation/addContact";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const { contacts } = user;
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function addContact(data) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data: newContact } = await api.post("/contacts/", data);

        setShowModal(false);

        setContactList([...contactList, newContact]);
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }
      }
    }
  }

  async function deleteContact(id) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        await api.delete(`/contacts/${id}`);
        const newContactList = contactList.filter(
          (contact) => contact.id !== id
        );
        setContactList(newContactList);
        setShowModalUpdate(false);
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }
        setShowModalUpdate(false);
      }
    }
  }

  async function updateContact(data) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const updatedContact = await api.patch(`/contacts/${contact.id}`, data);

        const copyContactList = [...contactList];

        const updatedContactList = copyContactList.map((contact) =>
          updatedContact.data.id === contact.id
            ? { ...updatedContact.data }
            : contact
        );

        setContactList(updatedContactList);

        setShowModalUpdate(false);
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }

        setShowModalUpdate(false);
      }
    }
  }

  return (
    <ContactContext.Provider
      value={{
        contactList,
        deleteContact,
        updateContact,
        showModalUpdate,
        setShowModalUpdate,
        setContact,
        contact,
        addContact,
        register,
        handleSubmit,
        errors,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
