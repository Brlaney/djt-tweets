import { motion } from 'framer-motion';
import {
  // stagger,
  // fadeInUp,
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';
import styles from '@/styles/components/Test.module.scss';

const usRed = '#BF0A30';
const usBlue = '#002868';

const Test = () => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='1044'
        height='1044'
        viewBox='0 0 1044 1044'
        fill='none'
      >
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          {...mainPathVariant}
          cx='661'
          cy='496'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='571'
          cy='621'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='627.5'
          cy='463.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='565.5'
          cy='574.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 488.5 692.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 690.5 103.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='747'
          cy='381'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='648.5'
          cy='346.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='469'
          cy='280'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='444.5'
          cy='303.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='751'
          cy='331'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='451'
          cy='589'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='903'
          cy='647'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='643'
          cy='686'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 885 597)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 722 522)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 569 103)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 648 63)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 952.5 632.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='19'
          transform='matrix(-1 0 0 1 768 468)'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='19'
          transform='matrix(-1 0 0 1 762 167)'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='19'
          transform='matrix(-1 0 0 1 427 139)'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='686'
          cy='584'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 484 327)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 914.5 704.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 776 565)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='535'
          cy='505'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='461'
          cy='510'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='407'
          cy='534'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='888.5'
          cy='534.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='895'
          cy='293'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='489'
          cy='539'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='512'
          cy='583'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='805'
          cy='385'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='385'
          cy='604'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='881'
          cy='216'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='537'
          cy='353'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='617'
          cy='305'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='697'
          cy='631'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 407 459)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='686'
          cy='380'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='708'
          cy='272'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 542 421)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='573'
          cy='255'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='393'
          cy='323'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 475 442)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='619'
          cy='421'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='884'
          cy='452'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='699'
          cy='447'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='833'
          cy='541'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='746.5'
          cy='637.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='485'
          cy='93'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='766'
          cy='684'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='628'
          cy='621'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='488'
          cy='646'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='574.5'
          cy='380.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 845.5 253.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 796.5 514.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 609.5 503.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='521.5'
          cy='249.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 399.5 371.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='687.5'
          cy='327.5'
          r='9.5'
          fill={usRed} />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 408.5 410.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='843'
          cy='628'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 951 689)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 751 113)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 525 43)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='842'
          cy='687'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='951'
          cy='570'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='424'
          cy='55'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='795'
          cy='269'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='19'
          transform='matrix(-1 0 0 1 927 495)'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='436.5'
          cy='340.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}

          r='9.5'
          transform='matrix(-1 0 0 1 698.5 688.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='399'
          cy='192'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='827.5'
          cy='331.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='384'
          cy='115'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='633'
          cy='133'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='569'
          cy='175'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='556'
          cy='678'
          r='29'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 847 476)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 697 157)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='813'
          cy='128'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='634'
          cy='202'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='620'
          cy='555'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 969 390)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='971.5'
          cy='516.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 928.5 247.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='979'
          cy='304'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='480'
          cy='218'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='757'
          cy='217'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='814'
          cy='206'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 501 151)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 851.5 157.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='531'
          cy='300'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 441.5 188.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 647.5 259.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1017'
          cy='563'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 1005 631)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1008.5'
          cy='386.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1003'
          cy='240'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 968 195)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 422.5 218.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 791 617)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 697 218)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 870 370)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 482 379)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='397'
          cy='272'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='919'
          cy='415'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='416'
          cy='674'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 714 70)'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='589'
          cy='33'
          r='14'
          fill={usBlue} />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='612.5'
          cy='366.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='851.5'
          cy='422.5'
          r='7.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 1011.5 704.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 1030.5 357.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='984.5'
          cy='350.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='210.5'
          cy='408'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='296.5'
          cy='559.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='13.5'
          cy='697.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='137.5'
          cy='631.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='334'
          cy='583'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='248'
          cy='550'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='268'
          cy='659'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='162'
          cy='491'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='297'
          cy='502'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 219 516)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14' transform='matrix(-1 0 0 1 123 669)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14' transform='matrix(-1 0 0 1 108 597)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14' transform='matrix(-1 0 0 1 348 535)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14' transform='matrix(-1 0 0 1 281 597)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 179.5 534.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 245.5 418.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='243.5'
          cy='697.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 357.5 688.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='52.5'
          cy='697.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='142.5'
          cy='697.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='286.5'
          cy='691.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='178.5'
          cy='631.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 94.5 692.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24' transform='matrix(-1 0 0 1 300 380)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24' transform='matrix(-1 0 0 1 229 462)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='291'
          cy='443'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 179 679)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='234'
          cy='617'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='177'
          cy='584'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='62'
          cy='664'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='324'
          cy='645'
          r='29'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='134'
          cy='551'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='90.5'
          cy='630.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='333.5'
          cy='336.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='290.5'
          cy='228.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='14'
          transform='matrix(-1 0 0 1 348 299)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 359.5 360.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 264.5 268.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='242.5'
          cy='322.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 186.5 446.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='241'
          cy='375'
          r='24'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='361'
          cy='407'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='357.5'
          cy='156.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 348 471)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='286'
          cy='316'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='224'
          cy='665'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='352.5'
          cy='247.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='315.5'
          cy='701.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 311 267)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='339'
          cy='209'
          r='24'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1013.5'
          cy='325.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1019.5'
          cy='284.5'
          r='9.5'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 1030.5 458.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1018'
          cy='518'
          r='14'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='1024.5'
          cy='413.5'
          r='9.5'
          fill={usRed}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          cx='904'
          cy='166'
          r='19'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='9.5'
          transform='matrix(-1 0 0 1 481.5 9.5)'
          fill={usBlue}
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='19'
          transform='matrix(-1 0 0 1 934 353)'
          fill='white'
        />
        <motion.circle
          {...shapeVariations}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99]
            }
          }}
          initial={{ y: 60, opacity: 0, }}
          r='24'
          transform='matrix(-1 0 0 1 989 459)'
          fill={usRed}
        />
      </svg>
    </motion.div>
  )
};

export default Test;
