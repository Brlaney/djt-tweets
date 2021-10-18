import { motion } from 'framer-motion';
import {
  fadeInUp,
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';
import styles from '@/styles/components/Landing.module.scss';

const colors = [
  '#885053',
  '#1B9AAA',
  '#FE5F55',
  '#736AAF',
  '#A43D69',
  '#002E3D',
  '#C6ECAE',
  '#457EBB',
  '#955392',
  '#324B4F',
  '#55BF81',
];

const strokeColor = '#A43D69';

const Turtle = () => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='981'
        height='934'
        viewBox='0 0 981 934'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_8:5)'>
          <motion.path
            {...mainPathVariant}
            {...shapeVariations}
            d='M486.5 412H579.796L665.673 563.491L579.806 714H486.5H404.15L315.871 563.491L404.16 412H486.5Z'
            stroke='black'
            strokeWidth='11'
          />
          <motion.path
            {...shapeVariations}
            d='M580.5 718L626 800.5'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M487 225C328.5 225 202 385.5 220.5 564'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M487 225C551.039 225 608.089 248.157 653.435 286M760 565C773.856 457.298 730.589 350.39 653.435 286M578 415L653.435 286'
            stroke='black'
            strokeWidth='16'
          />
          <motion.path
            {...shapeVariations}
            d='M404.5 413L329.5 284'
            stroke='black'
            strokeWidth='16'
          />
          <motion.path
            {...shapeVariations}
            d='M313 564H220.5'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M758.5 564H666'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M220.5 564C266 763 439 904 491.5 904'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M760 563.5C741.5 719 544 904 491.5 904'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M402.5 716.5L352 806'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M419.5 228.5C386.5 147 395.5 127.5 395.5 103C395.5 20.5 468.5 8.5 491 8.5C522.5 8.5 582.5 20.5 588 103C590.095 134.43 592.5 148.5 563 228.5'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M382.5 242C359 217 319 180.604 245 195.5C220 200.532 174 221.5 137 249C95.5 279.845 5 356.5 10.5 420C13.9191 459.475 198.5 380.5 282 335'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M601 242C624.5 217 664.5 180.604 738.5 195.5C763.5 200.532 809.5 221.5 846.5 249C888 279.845 978.5 356.5 973 420C969.581 459.475 785 380.5 701.5 335'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M293 735L234.5 826C191.5 890.5 303.128 963.5 345 902C371.894 862.5 382.5 840 382.5 840'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
          <motion.path
            {...shapeVariations}
            d='M690.5 735L749 826C792 890.5 680.372 963.5 638.5 902C611.606 862.5 601 840 601 840'
            stroke='black'
            strokeWidth='16'
            strokeLinecap='round'
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default Turtle;
