import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={ref}
      className={`parallax relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-800 ${type === 'skills' ? 'to-slate-900' : 'to-slate-700'}`}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-center text-6xl md:text-8xl"
      >
        {type === 'skills' ? 'What I Can?' : 'What I Did?'}
      </motion.h1>
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
