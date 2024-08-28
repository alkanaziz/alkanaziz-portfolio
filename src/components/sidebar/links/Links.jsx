import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

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
      className="links absolute flex size-full flex-col items-center justify-center md:gap-5"
      variants={variants}
    >
      {links.map((link) => (
        <motion.a
          className="rounded-lg p-2 text-2xl font-semibold hover:bg-slate-900 hover:text-slate-300 md:text-3xl"
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
      <div>
        <motion.hr variants={itemVariants} className="my-5 border-slate-500" />
        <motion.div variants={itemVariants} className="social flex gap-5">
          <a
            onClick={() => setOpen(false)}
            href="https://github.com/alkanaziz"
            target="_blank"
          >
            <FaGithub
              className="hover:scale-110 hover:text-[#171515] active:scale-95"
              size={20}
            />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="https://www.linkedin.com/in/alkanaziz/"
            target="_blank"
          >
            <FaLinkedin
              className="hover:scale-110 hover:text-[#0e76a8] active:scale-95"
              size={20}
            />
          </a>
          <a onClick={() => setOpen(false)} href="mailto:alkanaziz@gmail.com">
            <BiLogoGmail
              className="hover:scale-110 hover:text-[#c71610] active:scale-95"
              size={20}
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Links;
