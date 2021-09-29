import * as React from 'react';
import { useRouter } from 'next/router';
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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  async function handleLogin() {
    const loginData = {
      identifier: email,
      password: password
    };

    const login = await fetch(`${server}/auth/local`, {
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

    console.log(loginResponse);

    router.push('/');
  };

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
              bgcolor: 'secondary.main'
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
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className={styles.inputEmail}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              className={styles.inputPassword}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
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
