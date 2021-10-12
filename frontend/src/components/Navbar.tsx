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
            color='#1d2031'
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
              href='/tweets'
              sx={{ my: 1, mx: 1.5 }}
            >
              Tweets
            </Link>
          </nav>
          <Button
            className={styles.login}
            href='/auth/login'
            color='primary'
            variant='outlined'
            sx={{ my: 1, mx: 0.4 }}
          >
            Sign-in
          </Button>
          <Button
            className={styles.register}
            href='/auth/register'
            color='secondary'
            variant='outlined'
            sx={{ my: 1, mx: 0.4 }}
          >
            Sign-up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
