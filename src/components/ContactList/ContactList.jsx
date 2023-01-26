import { useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem"
import styled from "@emotion/styled";

const ContactLi = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid rgb(45, 207, 45);
border-radius: 5px;
padding: 5px 10px;
& p {
    display: flex;
    align-items: center;
}
& button {
    padding: 5px 10px;
    border: 1px solid rgb(45, 207, 45);
    border-radius: 5px;
}
`
const ContactsUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export function ContactList() {
  const contacts = useSelector(visibleContacts);
    
  return <ContactsUl>
        {contacts.map(contact => {
            return <ContactLi key={contact.id}><ContactItem contact={contact} /></ContactLi>
        })}
    </ContactsUl>
}

