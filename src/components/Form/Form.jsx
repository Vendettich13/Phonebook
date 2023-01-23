import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations"; 
import { selectContacts } from "redux/selectors";
import Notiflix from "notiflix";
import css from "../Form/Form.module.css"
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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

    const isExist = contacts.find(contact => { return contact.name === name })
    if (isExist) {
        setName('');
        setNumber('');
          return Notiflix.Notify.failure(`${name} is already in contacts...`, {timeout: 2000})
    };
    
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    }
      
        return <Box style={{gap: "20px", display: 'flex', flexDirection: 'column'}} component='form' sx={{
        '& > :not(style)': { width: 500,
        maxWidth: '100%', borderColor: '#2dcf2d', },
      }}
      noValidate
        autoComplete="off" onSubmit={handleSubmit} className={css.form}>
        <TextField value={name} id="outlined-basic" label="Name" variant="outlined" onChange={handleChange}
        type="text" name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />
        <TextField value={number} id="outlined-basic" label="Phone" variant="outlined" name="number" onChange={handleChange}
        type="tel" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        <Button variant="outlined" type="button">Add contact</Button>
      </Box>
    
}
