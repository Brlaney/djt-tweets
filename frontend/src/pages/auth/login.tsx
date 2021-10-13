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
import nookies, { setCookie } from 'nookies'
import styles from '@/styles/Auth.module.scss';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      // username: 'brlaney',
      identifier: 'testing123@gmail.com',
      password: 'Abc37920!',
    },
    onSubmit: values => {
      // Testing response:
      // alert(JSON.stringify(values, null, 2));

      axios.post(`${server}/auth/local`, {
        identifier: values.identifier,
        password: values.password,
      })
    }
  });

  //   const loginData = {
  //     identifier: email,
  //     password: password
  //   };

  //   const login = await fetch(`${server}/auth/local`, {
  //     identifier: 'testing123@gmail.com',
  //     password: 'Abc37920!',
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(loginData)
  //   });

  //   const loginResponse = await login.json();

  //   setCookie(null, 'jwt', loginResponse.jwt, {
  //     maxAge: 30 * 24 * 60 * 60,
  //     path: '/'
  //   });
  // },

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
            sx={{
              m: 1,
              bgcolor: 'primary'
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            className={styles.title}
            component='h1'
            variant='h5'
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
            {/* <TextField
              id='username'
              name='username'
              className={styles.inputEmail}
              margin='normal'
              fullWidth
              label='Username'
              autoComplete='Username'
              autoFocus
            /> */}
            <TextField
              id='email'
              name='identifier'
              className={styles.inputEmail}
              margin='normal'
              label='Email Address'
              autoComplete='email'
              type='email'
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
                <Link href='#' variant='body2' className={styles.gridLink}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item className={styles.gridItem}>
                <Link href='/auth/register' variant='body2' className={styles.gridLink}>
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
