import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations"; 
import { selectContacts } from "redux/selectors";
import Notiflix from "notiflix";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/InputLabel';
import styled from "@emotion/styled";

const AddContactButton = styled(Button)`
  display: flex;
    border: 2px solid rgb(45, 207, 45);
    color: #2dcf2d;
    border-color: #2dcf2d;
    transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1), border 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover,
    &:focus {
    transform: scale(1.01);
    border: 2px solid rgb(48, 149, 48);
    }
`

export function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isExist = contacts.find(contact => { return contact.name === name || contact.number === number })
    if (isExist) {
        setName('');
        setNumber('');
          return Notiflix.Notify.failure(`${name} is already in contacts...`, {timeout: 2000})
    };
    
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    }
      
      return <Box component='form' style={{gap: "20px", display: 'flex', flexDirection: 'column'}}  sx={{
        '& > :not(style)': { width: 500,
        maxWidth: '100%', borderColor: '#2dcf2d' },
      }} 
        autoComplete="off" onSubmit={handleSubmit}>
        <FormControl  style={{borderBottom: '3px solid #2dcf2d', borderRadius: '5px'}}>
        <Input htmlFor="component-outlined">Name</Input>
        <OutlinedInput placeholder="Adam" inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }}
        value={name}
        type='text'
        id="component-outlined"
        label="name"
        name='name'
        onChange={handleChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        </FormControl>
        <FormControl style={{borderBottom: '3px solid #2dcf2d', borderRadius: '5px'}}>
        <Input htmlFor="component-outlined">Phone</Input>
        <OutlinedInput placeholder="111-111-111" inputProps={{ inputMode: 'numeric', pattern: "[0-9]{3}-[0-9]{3}-[0-9]{3}" }}
        id="component-outlined"
        type="text"
        value={number}
        label="number"
        name="number"
        onChange={handleChange}
        title="Phone number must contain numbers and dashes, for example: 111-111-111"
        required
        />
        </FormControl>
        <AddContactButton variant="outlined" type="submit">Add contact</AddContactButton>
      </Box>
    
}
