import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={ref}
      className={`parallax overflow-hidden relative flex size-full items-center justify-center bg-gradient-to-b from-slate-800 ${type === 'services' ? 'to-slate-900' : 'to-slate-700'}`}
    >
      <motion.h1 style={{ y: yText }} className="text-8xl">
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className="mountains absolute z-10 size-full bg-[url('/mountains.png')] bg-cover bg-bottom"></motion.div>
      <motion.div style={{ y: yBg }} className={`planets absolute size-full ${type === "services" ? "bg-[url('/planets.png')]" : "bg-[url('/sun.png')]"} bg-cover bg-bottom`}></motion.div>
      <motion.div style={{ x: yBg }}  className="stars absolute z-0 size-full bg-[url('/stars.png')] bg-cover bg-bottom"></motion.div>
    </div>
  );
};
export default Parallax;
