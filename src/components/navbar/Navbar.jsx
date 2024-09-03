import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const links = ['Home', 'Skills', 'Portfolio', 'Contact'];

  return (
    <div className="navbar h-24">
      <div className="wrapper m-auto flex h-full max-w-screen-xl items-center justify-start p-5 md:justify-between">
        <div className="social flex gap-5">
          <a href="https://github.com/alkanaziz" target="_blank">
            <FaGithub className="hover:scale-110 active:scale-95" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/alkanaziz/" target="_blank">
            <FaLinkedin className="hover:scale-110 active:scale-95" size={24} />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden font-bold md:flex md:gap-5"
        >
          {links.map((link) => (
            <a
              className="rounded-lg px-2 py-1 text-lg font-semibold duration-200 ease-in hover:bg-slate-300 hover:text-slate-900"
              href={`#${link.toLowerCase()}`}
              key={link}
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
      <Sidebar />
    </div>
  );
};
export default Navbar;
