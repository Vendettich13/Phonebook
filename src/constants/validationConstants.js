import * as yup from 'yup';

export const validationRegistrateSchema = yup.object().shape({
  name: yup
    .string('Name may contain only letters, apostrophe, dash and spaces.')
    .required('This field is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required'),
});

export const validationLogInSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('This field is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('This field is required'),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchemaAddContact = yup.object().shape({
  name: yup
    .string('Enter name')
    .max(20, 'Name may contain only 20 letters')
    .required(
      'This field is required and may contain only letters, apostrophe, dash and spaces.'
    ),
  number: yup
    .string()
    .required('This field is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'too short')
    .max(10, 'too long'),
});
