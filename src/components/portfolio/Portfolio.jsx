import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Speaker Shop Layout',
    img: '/img/Project-1.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://alkanaziz.github.io/layout-speaker-shop/',
    github: 'https://github.com/alkanaziz/layout-speaker-shop',
  },
  {
    id: 2,
    title: 'Unit Converter',
    img: '/img/Project-2.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://alkanaziz.github.io/unit-converter-javascript/',
    github: 'https://github.com/alkanaziz/unit-converter-javascript/',
  },
  {
    id: 3,
    title: 'Freelance Developer Page Layout',
    img: '/img/Project-3.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://alkanaziz.github.io/freelance-developer-page-layout/',
    github: 'https://github.com/alkanaziz/freelance-developer-page-layout',
  },
  {
    id: 4,
    title: 'Transparent Login Page',
    img: '/img/Project-4.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://alkanaziz.github.io/data-transparent-login/',
    github: 'https://github.com/alkanaziz/data-transparent-login',
  },
  {
    id: 5,
    title: 'UI - UX Demo Page',
    img: '/img/Project-5.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://alkanaziz.github.io/ui-ux-nonamepeople-page/',
    github: 'https://github.com/alkanaziz/ui-ux-nonamepeople-page',
  },
  {
    id: 6,
    title: 'Search Movies and Add to Favorite',
    img: '/img/Project-6.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    href: 'https://vue-project-movie-search.vercel.app/',
    github: 'https://github.com/alkanaziz/vue-project-workshop',
  },
  {
    id: 7,
    title: 'Full-Stack E-Commerce',
    img: '/img/Project-7.png',
    desc: 'Our team developed a full-stack e-commerce platform using the MERN stack for our final project at DCI. The site includes features like user authentication, product search, a shopping cart, and an admin dashboard for managing products and orders.',
    href: 'https://e-commerce.alkanaziz.com/',
    github: 'https://github.com/WebDev-MAP/E-Commerce',
  },
];

const imgVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  initial: {
    y: -300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const SingleProject = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="project h-screen snap-center">
      <div className="container m-auto flex size-full items-center justify-center overflow-hidden">
        <div className="wrapper mx-5 mt-36 flex h-full max-w-7xl flex-col items-center justify-center md:m-0 md:flex-row md:gap-12">
          <motion.div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className="imageContainer group flex h-1/2 max-h-96 max-w-96 flex-1 items-center justify-center overflow-hidden rounded-xl hover:border"
            ref={ref}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-11/12 rounded-xl shadow-2xl transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-125 group-hover:brightness-50"
            />
            <div className="absolute hidden h-80 w-72 flex-col justify-evenly transition-all ease-in-out group-hover:flex sm:w-80">
              <h3 className="text-2xl font-black text-orange-400 [text-shadow:1px_1px_orange]">
                {project.title}
              </h3>
              <div className="flex gap-2 text-sm text-slate-200 md:text-lg">
                <a
                  href={project.href}
                  target="_blank"
                  aria-label={`See ${project.title} demo`}
                >
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-400 p-2 hover:bg-orange-300 hover:text-slate-800">
                    <FaExternalLinkAlt className="size-4" /> Demo
                  </button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  aria-label={`See ${project.title} code`}
                >
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-400 p-2 hover:bg-orange-300 hover:text-slate-800">
                    Code <FaGithub className="size-4" />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="textContainer mt-3 flex flex-1 flex-col items-center gap-8 md:mt-0 md:items-start md:justify-center"
            // style={{ y }}
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <h3 className="text-center text-3xl md:text-left md:text-7xl">
              {project.title}
            </h3>
            {/* <p className="text-lg md:text-xl">{project.desc}</p> */}
            <button className="w-48 rounded-lg bg-orange-400 p-2 hover:bg-orange-300 hover:text-slate-800">
              <a href={project.href} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
      <div className="progress sticky left-0 top-0 z-10 pt-8 text-center text-3xl font-black text-orange-400 md:text-4xl">
        <h2>Demo Works</h2>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-2 rounded-full bg-slate-300"
        ></motion.div>
      </div>

      {[...projects].reverse().map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Portfolio;
