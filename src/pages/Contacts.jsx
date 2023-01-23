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
const EmptyWarn = styled.p`
  color: #2dcf2d;
  margin-top: 15px;
  font-weight: 500;
  font-size: 20px;
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
  {!error && <p style={{fontSize: "35px", fontWeight: "700", color: "#2dcf2d", marginBottom: '20px'}}>Phonebook</p>}
  {!error && <Form />}
  {!error && <p style={{ fontSize: "35px", fontWeight: "700", color: "#2dcf2d", marginTop: '20px' }}>Contacts</p>}
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
  {contacts.length === 0 && !error && <EmptyWarn>Your contact list is empty...</EmptyWarn>}
</ContactWrapper>
  );
};
