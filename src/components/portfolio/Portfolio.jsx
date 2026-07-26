import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaVuejs,
  FaCloudUploadAlt,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandOpenai,
  TbHandFinger,
  TbKeyboard,
  TbApi,
} from 'react-icons/tb';
import {
  SiTailwindcss,
  SiHeadlessui,
  SiMui,
  SiExpress,
  SiMongodb,
  SiVite,
  SiTypescript,
  SiEslint,
  SiCloudflare,
} from 'react-icons/si';
import { HiSquares2X2 } from 'react-icons/hi2';
import { GoPackage } from 'react-icons/go';
import { BiImageAlt, BiMessageAltDetail } from 'react-icons/bi';

const projects = [
  {
    id: 1,
    title: 'UI Homepage Demo',
    img: '/img/Project-1.png',
    desc: 'A clean and modern UI homepage demo showcasing a speaker shop layout with responsive design and smooth interactions.',
    href: 'https://alkanaziz.github.io/layout-speaker-shop/',
    github: 'https://github.com/alkanaziz/layout-speaker-shop',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'HTML', icon: 'FaHtml5' },
          { name: 'CSS', icon: 'FaCss3' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Unit Converter',
    img: '/img/Project-2.png',
    desc: 'A unit converter application built with HTML, CSS, and JavaScript, allowing users to convert between different units of measurement.',
    href: 'https://alkanaziz.github.io/unit-converter-javascript/',
    github: 'https://github.com/alkanaziz/unit-converter-javascript/',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'HTML', icon: 'FaHtml5' },
          { name: 'CSS', icon: 'FaCss3' },
          { name: 'JavaScript', icon: 'FaJs' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Developer Page Layout',
    img: '/img/Project-3.png',
    desc: 'A clean and modern freelance developer page layout with responsive design and smooth interactions.',
    href: 'https://alkanaziz.github.io/freelance-developer-page-layout/',
    github: 'https://github.com/alkanaziz/freelance-developer-page-layout',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'HTML', icon: 'FaHtml5' },
          { name: 'CSS', icon: 'FaCss3' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Transparent Login Page',
    img: '/img/Project-4.png',
    desc: 'A transparent login page with responsive design and smooth interactions.',
    href: 'https://alkanaziz.github.io/data-transparent-login/',
    github: 'https://github.com/alkanaziz/data-transparent-login',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'HTML', icon: 'FaHtml5' },
          { name: 'CSS', icon: 'FaCss3' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Search Movies',
    img: '/img/Project-6.png',
    desc: 'A movie search application with responsive design and smooth interactions, allowing users to search for movies and add them to their favorites.',
    href: 'https://vue-project-movie-search.vercel.app/',
    github: 'https://github.com/alkanaziz/vue-project-workshop',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'Vue.js', icon: 'FaVuejs' },
          { name: 'Vue3-Toastify', icon: 'FaVuejs' },
          { name: 'Vite', icon: 'SiVite' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Full-Stack E-Commerce',
    img: '/img/Project-7.png',
    desc: 'Our team developed a full-stack e-commerce platform using the MERN stack for our final project at DCI.',
    href: 'https://e-commerce.alkanaziz.com/',
    github: 'https://github.com/WebDev-MAP/E-Commerce',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'React', icon: 'FaReact' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
          { name: 'Material UI', icon: 'SiMui' },
          { name: 'React Dropzone', icon: 'FaCloudUploadAlt' },
          { name: 'React Toastify', icon: 'BiMessageAltDetail' },
          { name: 'Nivo Charts', icon: 'GoPackage' },
          { name: 'Vite', icon: 'SiVite' },
        ],
      },
      {
        group: 'Backend',
        items: [
          { name: 'Node.js', icon: 'FaNodeJs' },
          { name: 'Express.js', icon: 'SiExpress' },
        ],
      },
      {
        group: 'Database',
        items: [
          { name: 'MongoDB', icon: 'SiMongodb' },
          { name: 'Mongoose', icon: 'FaDatabase' },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Artist Portfolio',
    img: '/img/Project-8.png',
    desc: 'An artist portfolio website with efficient gallery functionality',
    href: 'https://bostanci-art.alkanaziz.com/',
    github: 'https://github.com/alkanaziz/mehmet-bostanci-portfolio',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'Next.js', icon: 'TbBrandNextjs' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
          { name: 'Headless UI', icon: 'SiHeadlessui' },
          { name: 'Heroicons', icon: 'HiSquares2X2' },
          { name: 'React Icons', icon: 'GoPackage' },
          { name: 'Framer Motion', icon: 'TbBrandFramerMotion' },
          { name: 'Plaiceholder', icon: 'BiImageAlt' },
          { name: 'React Swipeable', icon: 'TbHandFinger' },
          { name: 'React Use Keypress', icon: 'TbKeyboard' },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Stock Predictions AI App',
    img: '/img/Project-9.jpg',
    desc: 'AI-powered stock prediction application with OpenAI API integration and modern design',
    href: 'https://stock-predictions-ai-app.alkanaziz.com/',
    github: 'https://github.com/alkanaziz/stock-predictions/tree/main',
    technologies: [
      {
        group: 'Frontend',
        items: [
          { name: 'Next.js', icon: 'TbBrandNextjs' },
          { name: 'React', icon: 'FaReact' },
          { name: 'TypeScript', icon: 'SiTypescript' },
          { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
          { name: 'React Icons', icon: 'GoPackage' },
        ],
      },
      {
        group: 'Backend & AI',
        items: [
          { name: 'OpenAI API', icon: 'SiOpenai' },
          { name: 'Polygon API', icon: 'PolygonApi' },
          { name: 'Next.js API Routes', icon: 'TbApi' },
          { name: 'Cloudflare Worker', icon: 'SiCloudflare' },
        ],
      },
      {
        group: 'Development & Deployment',
        items: [
          { name: 'ESLint', icon: 'SiEslint' },
          { name: 'Cloudflare Pages', icon: 'SiCloudflare' },
          { name: 'Wrangler', icon: 'SiCloudflare' },
        ],
      },
    ],
  },
];

const imgVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    rotateY: 90,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const imageHoverVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    filter: 'brightness(100%)',
  },
  hover: {
    scale: 1.1,
    rotate: 0,
    filter: 'brightness(50%)',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const circleMaskVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  hover: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const projectTitleVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

const textContainerVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    rotateX: 30,
    scale: 0.9,
    transformPerspective: 1000,
    filter: 'blur(8px)',
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transformPerspective: 1000,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const headingVariants = {
  initial: {
    opacity: 0,
    y: -15,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const paragraphVariants = {
  initial: {
    opacity: 0,
    y: 20,
    x: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const buttonContainerVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      ease: 'easeOut',
      delay: 0.6,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 15,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.4)',
    transition: {
      duration: 0.2,
    },
  },
};

const techItemVariants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.9,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2 + index * 0.06,
      ease: 'easeOut',
    },
  }),
};

const techBackgroundVariants = {
  initial: {
    width: '0%',
  },
  animate: (index) => ({
    width: '100%',
    transition: {
      duration: 0.8,
      delay: index * 0.5,
      ease: 'easeInOut',
    },
  }),
};

const techTextVariants = {
  initial: {
    color: '#94a3b8', // text-slate-300
  },
  animate: (index) => ({
    color: '#1e293b', // text-slate-800
    transition: {
      duration: 0.8,
      delay: index * 0.5,
    },
  }),
};

const SingleProject = ({ project }) => {
  const ref = useRef();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaReact':
        return <FaReact className="size-5 sm:size-6" />;
      case 'TbBrandNextjs':
        return <TbBrandNextjs className="size-5 sm:size-6" />;
      case 'SiTailwindcss':
        return <SiTailwindcss className="size-5 sm:size-6" />;
      case 'SiHeadlessui':
        return <SiHeadlessui className="size-5 sm:size-6" />;
      case 'HiSquares2X2':
        return <HiSquares2X2 className="size-5 sm:size-6" />;
      case 'GoPackage':
        return <GoPackage className="size-5 sm:size-6" />;
      case 'TbBrandFramerMotion':
        return <TbBrandFramerMotion className="size-5 sm:size-6" />;
      case 'BiImageAlt':
        return <BiImageAlt className="size-5 sm:size-6" />;
      case 'TbHandFinger':
        return <TbHandFinger className="size-5 sm:size-6" />;
      case 'TbKeyboard':
        return <TbKeyboard className="size-5 sm:size-6" />;
      case 'FaHtml5':
        return <FaHtml5 className="size-5 sm:size-6" />;
      case 'FaCss3':
        return <FaCss3 className="size-5 sm:size-6" />;
      case 'FaJs':
        return <FaJs className="size-5 sm:size-6" />;
      case 'FaVuejs':
        return <FaVuejs className="size-5 sm:size-6" />;
      case 'SiVite':
        return <SiVite className="size-5 sm:size-6" />;
      case 'SiMui':
        return <SiMui className="size-5 sm:size-6" />;
      case 'FaCloudUploadAlt':
        return <FaCloudUploadAlt className="size-5 sm:size-6" />;
      case 'BiMessageAltDetail':
        return <BiMessageAltDetail className="size-5 sm:size-6" />;
      case 'SiExpress':
        return <SiExpress className="size-5 sm:size-6" />;
      case 'SiMongodb':
        return <SiMongodb className="size-5 sm:size-6" />;
      case 'FaDatabase':
        return <FaDatabase className="size-5 sm:size-6" />;
      case 'FaNodeJs':
        return <FaNodeJs className="size-5 sm:size-6" />;
      case 'SiTypescript':
        return <SiTypescript className="size-5 sm:size-6" />;
      case 'SiOpenai':
        return <TbBrandOpenai className="size-5 sm:size-6" />;
      case 'TbApi':
        return <TbApi className="size-5 sm:size-6" />;
      case 'PolygonApi':
        return (
          <img
            src="/polygon-icon.svg"
            alt="Polygon API"
            className="size-5 rounded-full bg-white p-1 sm:size-6"
          />
        );
      case 'SiEslint':
        return <SiEslint className="size-5 sm:size-6" />;
      case 'SiCloudflare':
        return <SiCloudflare className="size-5 sm:size-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen snap-center overflow-hidden">
      <div className="flex h-full items-center justify-center">
        <div className="container px-3 sm:px-4 md:px-0">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <motion.div
              variants={imgVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              className="imageContainer perspective-1000 group relative flex h-1/3 max-h-64 w-full max-w-xs flex-1 items-center justify-center overflow-hidden rounded-xl sm:h-1/2 sm:max-h-80 sm:max-w-sm md:max-h-96 md:max-w-md"
              ref={ref}
            >
              <motion.div
                className="absolute z-10 h-full w-full"
                variants={circleMaskVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-orange-400/90 to-slate-800/90 blur-md" />
              </motion.div>
              <motion.img
                src={project.img}
                alt={project.title}
                variants={imageHoverVariants}
                className="h-full w-full rounded-xl object-cover shadow-2xl"
              />
              <motion.div
                className="absolute flex h-full w-full flex-col items-center justify-center"
                variants={projectTitleVariants}
                initial="initial"
                whileHover="hover"
              >
                <h3 className="text-xl font-black text-white drop-shadow-lg sm:text-2xl">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
            <motion.div
              className="textContainer mt-3 flex flex-1 flex-col items-center gap-4 px-2 sm:gap-6 md:mt-0 md:items-start md:justify-center md:gap-8"
              variants={textContainerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h3
                variants={headingVariants}
                className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl md:text-left md:text-4xl lg:text-5xl"
              >
                {project.title}
              </motion.h3>

              <motion.div
                className="h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-slate-700 md:w-32"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <motion.p
                variants={paragraphVariants}
                className="text-center text-sm leading-relaxed text-slate-300 sm:text-base md:text-left md:text-lg"
              >
                {project.desc}
              </motion.p>

              {project.technologies && (
                <motion.div
                  variants={textVariants}
                  className="flex w-full flex-col gap-2 sm:gap-4"
                >
                  {project.technologies.map((techGroup, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex flex-col gap-1 sm:gap-2"
                    >
                      {project.technologies.length > 1 && (
                        <motion.h4
                          variants={textVariants}
                          className="text-base font-semibold text-orange-400 sm:text-lg"
                        >
                          {techGroup.group}
                        </motion.h4>
                      )}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {techGroup.items.map((tech, index) => (
                          <motion.div
                            key={index}
                            variants={techItemVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            whileHover={{
                              y: -5,
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }}
                            className="relative flex items-center gap-1 overflow-hidden rounded-lg bg-slate-800/50 px-2 py-1 text-xs text-slate-300 transition-all hover:bg-orange-400 hover:text-slate-800 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
                          >
                            <motion.div
                              variants={techBackgroundVariants}
                              initial="initial"
                              whileInView="animate"
                              custom={index}
                              className="absolute inset-0 bg-orange-400"
                              style={{ zIndex: -1 }}
                            />
                            {getIcon(tech.icon)}
                            <motion.span
                              variants={techTextVariants}
                              initial="initial"
                              whileInView="animate"
                              custom={index}
                              className="select-none md:select-text"
                            >
                              {tech.name}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div
                variants={buttonContainerVariants}
                className="flex gap-2 sm:gap-4"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="w-36 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-1 text-sm shadow-md hover:text-slate-800 sm:w-48 sm:p-2 sm:text-base"
                >
                  <a
                    href={project.href}
                    target="_blank"
                    className="flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <FaExternalLinkAlt className="size-3 sm:size-4" /> Demo
                  </a>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="w-36 rounded-lg border border-orange-400/30 bg-gradient-to-r from-slate-700 to-slate-800 p-1 text-sm hover:border-orange-400 sm:w-48 sm:p-2 sm:text-base"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <FaGithub className="size-3 sm:size-4" /> Code
                  </a>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        group: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ),
  }).isRequired,
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="progress sticky left-0 top-0 z-10 pt-4 text-center text-2xl font-black text-orange-400 sm:pt-6 sm:text-3xl md:pt-8 md:text-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text font-bold text-transparent"
        >
          My Works
        </motion.h2>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-1 rounded-full bg-gradient-to-r from-orange-400 to-slate-700 sm:h-2"
        ></motion.div>
      </div>

      {[...projects].reverse().map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Portfolio;
