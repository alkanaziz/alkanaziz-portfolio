import { motion, stagger } from 'framer-motion';

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
    <div className="hero relative h-[calc(100vh-96px)] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="wrapper m-auto flex h-full max-w-screen-xl items-center justify-between">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer flex h-full w-1/2 flex-col justify-center gap-10"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl tracking-[10px] text-[#663399]"
          >
            ALKAN AZIZ
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-8xl">
            Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons flex gap-5">
            <motion.button
              variants={textVariants}
              className="rounded-xl border p-5 cursor-pointer z-50"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="rounded-xl border p-5 cursor-pointer z-50"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="size-10"
            src="/scroll.png"
            alt="scroll icon"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer w-1/2 font-bold absolute -bottom-32 flex gap-4 whitespace-nowrap text-[50vh] text-slate-300/5"
      >
        <div className="slidingText">alkan aziz</div>
      </motion.div>
      <div className="absolute right-0 top-0 h-full">
        <img src="/hero.png" alt="hero man picture" />
      </div>
    </div>
  );
};
export default Hero;
