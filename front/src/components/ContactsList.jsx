import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import { ListStyled } from "../styles/list";

export const ContactsList = () => {
  const { contactList, setShowModalUpdate, showModalUpdate, setContact } =
    useContext(ContactContext);

  const [sortedContactList, setSortedContactList] = useState([]);

  useEffect(() => {
    if (contactList) {
      const sortedList = [...contactList].sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
      );
      setSortedContactList(sortedList);
    }
  }, [contactList]);
  return (
    <ListStyled>
      {sortedContactList &&
        sortedContactList.map((contact) => (
          <li
            onClick={(e) => {
              e.preventDefault();
              return setShowModalUpdate(!showModalUpdate), setContact(contact);
            }}
            key={contact.id}
          >
            <h2>{contact.fullName}</h2>
            <p>{contact.phone}</p>
            <span>{contact.email}</span>
          </li>
        ))}
    </ListStyled>
  );
};
