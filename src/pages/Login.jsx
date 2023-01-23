import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { FormWrapper } from './Register';

export default function Login() {
  return (
    <FormWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </FormWrapper>
  );
}
