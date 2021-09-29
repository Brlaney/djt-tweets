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
import styles from '@/styles/Auth.module.scss';

const Register = () => {
  const router = useRouter();
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  async function handleRegister(event) {
    event.preventDefault();
    const { email, password } = event.target;
    setData({
      email: email.value,
      password: password.value
    });

    const register = await fetch(`${server}/auth/local`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const registerResponse = await register.json();

    console.log(registerResponse);
    router.push('/');
  };

  return (
    <>
      <Container
        className={styles.container}
        component='main' maxWidth='xs'
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
              bgcolor: 'primary.main'
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            className={styles.title}
            component='h1'
            variant='h5'
          >
            Sign up
          </Typography>
          <Box
            className={styles.form}
            component='form'
            noValidate
            onSubmit={handleRegister}
          >
            <Grid className={styles.grid} container spacing={2}>
              <Grid className={styles.gridItem} item xs={12}>
                <TextField
                  className={styles.inputEmail}
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid className={styles.gridItem} item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='password'
                  value={data.password}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid className={styles.gridItem} item xs={12}>
                <FormControlLabel
                  className={styles.formControl}
                  control={<Checkbox value='allowExtraEmails' color='secondary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                  sx={{ fontSize: '16px' }}
                />
              </Grid>
            </Grid>
            <Button
              className={styles.register}
              type='submit'
              color='primary'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid className={styles.grid} container justifyContent='flex-end'>
              <Grid className={styles.gridItem} item>
                <Link href='/auth/login' variant='body2' className={styles.gridLink}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
};

export default Register;
