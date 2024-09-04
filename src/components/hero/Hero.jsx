import { motion } from 'framer-motion';
import { RiScrollToBottomFill } from 'react-icons/ri';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 50,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero relative h-[calc(100vh-96px)] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 p-5">
      <div className="wrapper m-auto flex h-full max-w-screen-xl flex-col items-center md:flex-row md:justify-between">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-full md:w-1/2 md:items-start md:gap-10"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl tracking-[10px] text-[#663399]"
          >
            ALKAN AZIZ
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-4xl z-10 md:text-7xl">
            Web Developer
          </motion.h1>
          <motion.div variants={textVariants} animate="scrollButton">
            <RiScrollToBottomFill className="size-10" />
          </motion.div>
        </motion.div>
        <motion.div variants={textVariants} className="buttons z-10 flex gap-5">
          <motion.button
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="cursor-pointer rounded-xl border p-2 text-sm md:p-5 md:text-lg"
          >
            See the Latest Works
          </motion.button>
          <motion.button
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="cursor-pointer rounded-xl border p-2 text-sm md:p-5 md:text-lg"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer absolute -bottom-32 flex w-1/2 gap-4 whitespace-nowrap text-[50vh] font-bold text-slate-300/5"
      >
        <div className="slidingTex">
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            a
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            l
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            k
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            a
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            n
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            {' '}
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            a
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            z
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            i
          </span>
          <span className="transform duration-1000 ease-in hover:text-slate-700">
            z
          </span>
        </div>
      </motion.div>
      {/* <div className="absolute md:right-0 md:top-0 bottom-0 h-1/2 w-full md:w-max md:h-full">
        <img className='object-cover' src="/hero.png" alt="hero man picture" />
      </div> */}
    </div>
  );
};
export default Hero;
