import { IoReturnUpBackOutline } from 'react-icons/io5';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
// import styles from '@/styles/Buttons.module.scss';

const Goback = ({ link }) => {
  return (
    <>
      <Link href={link}>
        <IconButton
          // className={styles.goback}
          color='primary'
          aria-label='Back to homepage'
        >
          <IoReturnUpBackOutline
            // className={styles.backIcon}
            size='2rem'
            color='primary'
          />
        </IconButton>
      </Link>
    </>
  )
};

export default Goback;
