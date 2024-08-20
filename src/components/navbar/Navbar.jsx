import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaMedium } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className="navbar h-24">
      {/* Sidebar */}
      <div className="wrapper m-auto flex h-full max-w-screen-xl items-center justify-between">
        <span className="font-bold">Web Developer Alkan</span>
        <div className="social flex gap-5">
          <a href="#">
            <FaGithub size={20} />
          </a>
          <a href="#">
            <FaLinkedin size={20} />
          </a>
          <a href="#">
            <FaMedium size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
