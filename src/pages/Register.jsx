import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styled from '@emotion/styled';

export const FormWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export default function Register() {
  return (<FormWrapper>
      <Helmet>
        <title>Registration</title>
      </Helmet>
    <RegisterForm />
    </FormWrapper>
  );
}