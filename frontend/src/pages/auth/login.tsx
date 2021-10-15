import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { server } from '@/lib/config/endpoints';
import styles from '@/styles/pages/Auth.module.scss';
import Redirect from '@/components/Redirect';

// import nookies, { setCookie } from 'nookies'
import { BsFillShieldLockFill } from 'react-icons/bs';


const Login = () => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      identifier: 'testing123@gmail.com',
      password: 'Abc37920!',
    },
    onSubmit: values => {
      axios.post(`${server}/auth/local`, {
        identifier: values.identifier,
        password: values.password,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      setShouldRedirect(true);
    }
  });

  if (shouldRedirect) {
    return <Redirect to='/auth/success' />
  };

  /*
    const loginData = {
      identifier: email,
      password: password
    };

    const login = await fetch(`${server}/auth/local`, {
      identifier: 'testing123@gmail.com',
      password: 'Abc37920!',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    const loginResponse = await login.json();

    setCookie(null, 'jwt', loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });
  },
  */

  return (
    <>
      <Container
        className={styles.container}
        component='main'
        maxWidth='xs'
      >
        <Box
          className={styles.box}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            className={styles.avatar}
            sx={{ m: 1, bgcolor: '#002868' }}
          >
            <BsFillShieldLockFill
              color='white'
              size='1.3rem'
            />
          </Avatar>
          <Typography
            className={styles.title}
            component='h1'
            variant='h5'
            color='text.primary'
          >
            Sign in
          </Typography>
          <Box
            className={styles.form}
            component='form'
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              id='email'
              name='identifier'
              className={styles.inputEmail}
              margin='normal'
              label='Email Address'
              type='email'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              value={formik.values.identifier}
              autoFocus
              fullWidth
              required
            />
            <TextField
              id='password'
              name='password'
              className={styles.inputPassword}
              margin='normal'
              label='Password'
              type='password'
              placeholder='Enter your password'
              autoComplete='current-password'
              onChange={formik.handleChange}
              value={formik.values.password}
              fullWidth
              required
            />
            <FormControlLabel
              className={styles.formControl}
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              className={styles.login}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container className={styles.grid}>
              <Grid item xs className={styles.gridItem}>
                <Link
                  href='#'
                  variant='body2'
                  className={styles.gridLink}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item className={styles.gridItem}>
                <Link
                  href='/auth/register'
                  variant='body2'
                  color='secondary'
                  className={styles.gridLink}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
};

export default Login;
