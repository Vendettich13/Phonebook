import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Notiflix from 'notiflix';
import { useFormik } from 'formik';
import { validationLogInSchema } from 'constants/validationConstants';
import { AuthForm, AuthField, AuthButton } from 'components/RegisterForm/RegisterForm';

export const LoginForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
     .unwrap()
      .then(() => Notiflix.Notify.success('You have successfully logged in'))
      .catch(() =>
        Notiflix.Notify.failure(
          'Something went wrong. Reload the page or check entered data...'
        )
      );
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLogInSchema,
    onSubmit: handleSubmit,
  })

  return (
    <AuthForm onSubmit={formik.handleSubmit}>
      <AuthField
        required
        autoComplete='off'
        fullWidth
        id="email"
        name="email"
        label="Email"
        placeholder='jacob12345@mail.com'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}/>
      <AuthField
        required
        autoComplete='off'
        fullWidth
        id="password"
        name="password"
        label="Password"
        placeholder='Jacob123'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password} />
      <AuthButton fullWidth type='submit'>Login</AuthButton>
  </AuthForm>
  );
};