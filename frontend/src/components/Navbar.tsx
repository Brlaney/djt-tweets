import { motion } from 'framer-motion';
import {
  stagger,
  fadeInUp,
} from '@/lib/config/animations/svgs/staggered';

import { BiHomeAlt } from 'react-icons/bi';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from '@/styles/components/Navbar.module.scss';

import { BsChatRightQuote } from 'react-icons/bs';
import { FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.div
      className={styles.navcontainer}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <AppBar
        className={styles.navbar}
        position='static'
        color='transparent'
        elevation={0}
        sx={{ height: '90px', justifyContent: 'center' }}
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
            <Link href='/'>
              <BiHomeAlt
                className={styles.homeicon}
                color='white'
                size='2.2rem'
              />
            </Link>
          </Typography>
          <nav className={styles.nav}>
            <Link
              className={styles.link}
              variant='button'
              href='/tweets'
              sx={{ my: 1, mx: 1.5 }}
            >
              <BsChatRightQuote
                color='white'
                size='1.75rem'
              />
            </Link>
            <Link
              className={styles.link}
              variant='button'
              href='/tests'
              sx={{ my: 1, mx: 1.5, color: 'white' }}
            >
              Tests
            </Link>
          </nav>
          <IconButton
            href='/auth/login'
            className={styles.login}
            aria-label='Login-button'
            sx={{ my: 1, mx: 0.4 }}
          >
            <FaSignInAlt
              color='white'
              size='1.75rem'
            />
          </IconButton>
          <Button
            className={styles.register}
            href='/auth/register'
            sx={{ my: 1, mx: 0.4, color: 'white' }}
          >
            Sign-up
          </Button>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Navbar;
