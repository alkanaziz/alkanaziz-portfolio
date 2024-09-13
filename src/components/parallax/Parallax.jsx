import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiScrollToBottomFill } from 'react-icons/ri';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const scrollAnimation = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`parallax relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-800 ${type === 'skills' ? 'to-slate-900' : 'to-slate-700'}`}
    >
      <motion.div className="flex flex-col items-center justify-center">
        <motion.h1
          style={{ y: yText }}
          className="text-center text-6xl md:text-8xl"
        >
          {type === 'skills' ? 'What I Can?' : 'What I Did?'}
        </motion.h1>
        <motion.div variants={scrollAnimation} animate="scrollButton">
          <RiScrollToBottomFill className="size-10" />
        </motion.div>
      </motion.div>
      <motion.div className="mountains absolute z-10 size-full bg-[url('/mountains.png')] bg-contain bg-bottom bg-no-repeat md:bg-cover"></motion.div>
      <motion.div
        style={{ y: yBg }}
        className={`planets absolute z-[5] size-full ${type === 'skills' ? "bg-[url('/planets.png')]" : "bg-[url('/sun.png')]"} bg-contain bg-bottom bg-no-repeat md:bg-cover`}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="stars absolute z-0 size-full bg-[url('/stars.png')] bg-cover bg-fixed bg-bottom"
      ></motion.div>
    </div>
  );
};
export default Parallax;
