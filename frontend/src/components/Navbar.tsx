import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from '@/styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <AppBar
        className={styles.navbar}
        position='static'
        color='default'
        elevation={0}
        sx={{
          borderBottom: (theme) =>
            `1px solid ${theme.palette.divider}`
        }}
      >
        <Toolbar
          className={styles.toolbar}
          sx={{ flexWrap: 'wrap' }}
        >
          <Typography
            className={styles.brand}
            variant='h6'
            color='primary'
            noWrap
            sx={{ flexGrow: 1 }}
          >
            App | Home
          </Typography>
          <nav className={styles.nav}>
            <Link
              className={styles.link}
              variant='button'
              color='text.primary'
              href='#'
              sx={{ my: 1, mx: 1.5 }}
            >
              Shop
            </Link>
            <Link
              className={styles.link}
              variant='button'
              color='text.primary'
              href='#'
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact
            </Link>
            <Link
              className={styles.link}
              variant='button'
              color='text.primary'
              href='#'
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button
            className={styles.login}
            href='/auth/login'
            color='primary'
            variant='outlined'
            sx={{ my: 1, mx: 0.4 }}
          >
            Login
          </Button>
          <Button
            className={styles.register}
            href='/auth/register'
            color='secondary'
            variant='outlined'
            sx={{ my: 1, mx: 0.4 }}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
