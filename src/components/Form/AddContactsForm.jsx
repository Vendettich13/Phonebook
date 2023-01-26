import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations"; 
import { selectContacts } from "redux/selectors";
import Notiflix from "notiflix";
import { useFormik } from 'formik';
import { AuthForm, AuthButton, AuthField } from "components/RegisterForm/RegisterForm";
import { validationSchemaAddContact } from "constants/validationConstants";

export function AddContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  function handleSubmit({name, number}, {resetForm}) {
    const isExist = contacts.find(contact => { return contact.name === name || contact.number === number })
    if (isExist) {
      resetForm();
      return Notiflix.Notify.failure(`${name} is already in contacts...`, {timeout: 2000})
    };
    
    dispatch(addContact({ name, number }))
    .unwrap()
      .then()
      .catch(() =>
        Notiflix.Notify.failure('Something went wrong...Try reloading the page')
      );
    resetForm();
  }
  
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchemaAddContact,
    onSubmit: handleSubmit,
  })
      
  return (
    <AuthForm onSubmit={formik.handleSubmit}>
      <AuthField
        type='text'
        required
        autoComplete='off'
        fullWidth
        id="name"
        name="name"
        label="Name"
        placeholder='Jacob'
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name} />
      <AuthField
        type='tel'
        required
        autoComplete='off'
        fullWidth
        id="number"
        name="number"
        label="Number"
        placeholder='1234567890'
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number} />
      <AuthButton fullWidth type='submit'>Add contact</AuthButton>
    </AuthForm>
  );
};
