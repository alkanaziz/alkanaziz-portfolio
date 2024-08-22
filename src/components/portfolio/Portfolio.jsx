import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
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
    y: -500,
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
        <div className="wrapper flex h-full max-w-7xl items-center justify-center gap-12">
          <motion.div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className="imageContainer h-1/2 flex-1"
            ref={ref}
          >
            <img
              src={project.img}
              alt={project.title}
              className="size-full object-cover"
            />
          </motion.div>
          <motion.div
            className="textContainer flex flex-1 flex-col justify-center gap-8"
            // style={{ y }}
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <h3 className="text-7xl">{project.title}</h3>
            <p className="text-xl">{project.desc}</p>
            <button className="w-48 rounded-lg bg-orange-400 p-2">
              See Demo
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
      <div className="progress sticky left-0 top-0 pt-12 text-center text-4xl font-black text-orange-400">
        <h2>Featured Works</h2>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-2 rounded-full bg-slate-300"
        ></motion.div>
      </div>

      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Portfolio;
