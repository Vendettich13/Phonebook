import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <Box component='form' style={{display: 'flex', flexDirection: 'column', gap: '20px'}} sx={{
        '& > :not(style)': { width: 500,
        maxWidth: '100%' },
      }}
      noValidate
      autoComplete="off" onSubmit={handleSubmit}>
      <FormControl style={{borderBottom: '3px solid #2dcf2d', borderRadius: '5px'}}>
        <Input htmlFor="component-outlined">Name</Input>
        <OutlinedInput
        id="component-outlined"
        label="Username"
        name='name'
        />
        </FormControl>
        <FormControl style={{borderBottom: '3px solid #2dcf2d', borderRadius: '5px'}}>
        <Input htmlFor="component-outlined">Email</Input>
        <OutlinedInput
        id="component-outlined"
        label="Email"
        name='email'
        />
        </FormControl>
          <FormControl style={{borderBottom: '3px solid #2dcf2d', borderRadius: '5px'}}>
        <Input htmlFor="component-outlined">Password</Input>
        <OutlinedInput
        id="component-outlined"
        label="Password"
        name='password'
        />
        </FormControl>
      <Button style={{height: '40px', color: "#2dcf2d", border: '1px solid #2dcf2d'}} variant="outlined" type="submit">Register</Button>
    </Box>
  );
};