import { motion } from 'framer-motion'
import {
  fadeInUp,
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs'
import styles from '@/styles/components/Landing.module.scss'

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
]

const strokeColor = '#A43D69'

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
        width='792'
        height='754'
        viewBox='0 0 792 754'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M392.299 336.5H461.768L525.675 449.368L461.778 561.5H392.299H331.061L265.369 449.368L331.071 336.5H392.299Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M273.813 239L330 336.211L262.951 450H192.53C188.409 344.123 207.654 303.435 273.813 239Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M517.576 241L462 336.446L526.964 450H597.56C605.07 359.081 583.9 305.515 517.576 241Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M192 450H261.377L330 564.019L290.033 631C235.697 568.278 192 500.424 192 450Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M598 450H526.556L460 564.771L497.978 631C549.493 568.158 593.864 516.605 598 450Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M291 632.422L329.013 565H462.998L498 630.915C445.685 683.271 414.824 705.87 396.005 707C373.047 704.74 335.411 679.504 291 632.422Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M323.411 103.084C321.903 123.018 317 140.695 341.891 202C380.735 193.35 405.626 191.469 445.602 202C467.853 141.823 470.187 126.726 468.607 103.084C464.458 41.0265 419.203 32 395.443 32C378.473 32 328.094 41.2025 323.411 103.084Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M209.883 172.337C265.644 161.088 297.292 193.104 315 211.983C279.961 230.485 264.137 244.833 235.88 278.061C172.96 312.421 35.7571 371.683 33.1807 341.873C29.0363 293.919 97.2306 236.031 128.502 212.738C156.382 191.971 191.045 176.137 209.883 172.337Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M582.279 172.296C526.569 161.044 492.692 193.823 475 212.707C497.962 224.037 528.828 244.431 553.671 278.044C616.533 312.412 756.245 371.688 758.819 341.871C762.96 293.906 694.828 236.005 663.586 212.707C635.731 191.935 601.1 176.097 582.279 172.296Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M202.31 647.282L247.213 578C269.852 611.888 284.191 627.326 314 656.319C314 656.319 305.996 674.769 285.7 704.515C254.101 750.829 169.86 695.855 202.31 647.282Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M589.728 647.606L543.561 576C516.912 612.74 503.4 628.111 476 653.979C476 653.979 486.589 674.974 506.778 704.591C538.211 750.704 622.007 695.968 589.728 647.606Z'
          stroke='black'
          stroke-width='8'
          stroke-linecap='round'
        />
        <path
          d='M462.137 336H329.863L275 239.487C318.966 205.556 352.034 195 397.127 195C442.221 195 475.665 210.834 517 240.995L462.137 336Z'
          stroke='black'
          stroke-width='8'
        />
      </svg>
    </motion.div>
  )
}

export default Turtle
