import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { DotLoader } from "react-spinners";
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

const ContactWrapper = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
width: 600px;
flex-direction: column;
background-color: #eeffee;
padding: 20px 10px;
border-radius: 10px;
`

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
  <ContactWrapper>
  {error && <p style={{ fontSize: "25px", fontWeight: "600" }}>Something went wrong, please reload the page :(</p>}
  {!error && <p style={{fontSize: "35px", fontWeight: "700", color: "#2dcf2d"}}>Phonebook</p>}
  {!error && <Form />}
  {!error && <p style={{ fontSize: "35px", fontWeight: "700", color: "#2dcf2d" }}>Contacts</p>}
  <Helmet>
        <title>Your Contacts</title>
  </Helmet>
  {isLoading && !error &&
    <DotLoader
      color="#2dcf2d"
      cssOverride={{
        display: 'block',
        margin: '0 auto',
      }}/>
  }
  {contacts.length !== 0 && <Filter/>}
  {contacts.length !== 0 && <ContactList />}
  {contacts.length === 0 && !error && <p style={{ marginTop: '15px', fontWeight: '500', fontSize: '20px' }}>Your contact list is empty</p>}
</ContactWrapper>
  );
};
