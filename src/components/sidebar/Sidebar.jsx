import { useState } from 'react';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import { delay, motion } from 'framer-motion';

const variants = {
  open: {
    clipPath: 'circle(1200px at calc(100% - 50px) 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(0px at calc(100% - 50px) 50px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delay: 0.5,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar flex flex-col items-center justify-center text-slate-900"
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        className="bg fixed bottom-0 right-0 top-0 z-20 h-1/2 w-full rounded-bl-[96px] bg-slate-300 md:h-full md:w-96 md:rounded-bl-full md:bg-transparent md:bg-gradient-to-b md:from-slate-300 md:to-slate-200/70"
        variants={variants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
