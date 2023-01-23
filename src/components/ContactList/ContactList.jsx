import { useSelector } from "react-redux";
import { visibleContacts } from "redux/selectors";
import { ContactItem } from "components/ContactItem/ContactItem"
import styled from "@emotion/styled";

const ContactLi = styled.li`
width: 500px;
display: flex;
align-items: center;
justify-content: space-between;

& p {
    font-weight: bold;
    display: flex;
    align-items: flex-end;
}

& button {
    padding: 5px 10px;
    border: 1px outset rgb(45, 207, 45);
    border-radius: 5px;
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1), border 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover,
    &:focus {
    transform: scale(1.05);
    border: 1px outset rgb(48, 149, 48);
    }
}
`

export function ContactList() {
  const contacts = useSelector(visibleContacts);
    
  return <ul style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {contacts.map(contact => {
            return <ContactLi key={contact.id}><ContactItem contact={contact} /></ContactLi>
        })}
    </ul>
}

