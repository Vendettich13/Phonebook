import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box component='form' sx={{
        '& > :not(style)': { width: 500,
        maxWidth: '100%', borderColor: '#2dcf2d', },
      }}
      noValidate
      autoComplete="off" onSubmit={handleSubmit}>
      <TextField style={{margin: '10px 0px'}} id="outlined-basic" label="Email" variant="outlined" name='email'/>
      <TextField style={{margin: '10px 0px 20px'}} id="outlined-basic" label="Password" variant="outlined" name='password'/>
      <Button style={{height: '40px', color: "#2dcf2d"}} variant="outlined" type="submit">Login</Button>
    </Box>
  );
};