import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: { staggerChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const links = ['Homepage', 'Services', 'Portfolio', 'About', 'Contact'];

  return (
    <motion.div
      className="links absolute flex size-full flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {links.map((link) => (
        <motion.a
          className="text-3xl font-semibold hover:text-slate-300 hover:bg-slate-900 p-2 rounded-lg"
          href={`#${link.toLowerCase()}`}
          key={link}
          variants={itemVariants}
          onClick={() => setOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};
export default Links;
