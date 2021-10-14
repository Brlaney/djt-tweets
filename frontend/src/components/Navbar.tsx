import { BiHomeAlt } from 'react-icons/bi';
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
        color='transparent'
        elevation={0}
      >
        <Toolbar
          className={styles.toolbar}
          sx={{ flexWrap: 'wrap' }}
        >
          <Typography
            className={styles.brand}
            variant='h6'
            color='white'
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <BiHomeAlt
              className={styles.homeicon}
              color='white'
              size='2.2rem'
            />
          </Typography>
          <nav className={styles.nav}>
            <Link
              className={styles.link}
              variant='button'
              href='/tweets'
              sx={{ my: 1, mx: 1.5, color: 'white' }}
            >
              Tweets
            </Link>
          </nav>
          <Button
            className={styles.login}
            href='/auth/login'
            sx={{ my: 1, mx: 0.4, color: 'white' }}
          >
            Sign-in
          </Button>
          <Button
            className={styles.register}
            href='/auth/register'
            sx={{ my: 1, mx: 0.4, color: 'white' }}
          >
            Sign-up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
