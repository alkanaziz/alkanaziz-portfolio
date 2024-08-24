import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      // whileInView="animate"
      // animate="animate"
      animate={'animate'}
      ref={ref}
      className="services flex size-full flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-800 p-3"
    >
      <motion.div
        variants={variants}
        className="textContainer mb-5 flex flex-1 flex-col items-center justify-center gap-5 self-center md:mb-0 md:flex-row md:self-end"
      >
        <p className="text-xl font-thin text-slate-500 md:text-right">
          I focus on helping your brand grow
          <br />
          by creating a unique online presence.
        </p>
        <hr className="w-72 border-t-2 border-slate-700 md:w-[500px]" />
      </motion.div>
      <motion.div
        variants={variants}
        className="titleContainer flex w-full flex-[2] flex-col items-center justify-center"
      >
        <div className="title mb-5 flex flex-col items-center gap-6 text-center md:flex-row md:gap-12">
          <img
            className="h-14 w-72 rounded-[50px] object-cover md:h-24 md:w-80"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-4xl font-thin md:text-7xl">
            <b className="font-black hover:text-orange-400">Unique</b> Ideas
          </h1>
        </div>
        <div className="title flex flex-col items-center gap-6 text-center md:flex-row md:gap-12">
          <h2 className="text-4xl font-thin md:text-7xl">
            <b className="font-black hover:text-orange-400">For Your</b>{' '}
            Business.
          </h2>
          <button className="h-14 w-48 cursor-pointer rounded-[50px] bg-orange-400 text-xl text-slate-900 md:h-24 md:w-80 md:text-2xl">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="listContainer m-auto flex w-full max-w-7xl flex-[2] flex-col items-center justify-center md:flex-row"
      >
        <div className="box flex flex-col justify-between gap-5 border-slate-500 p-6 md:gap-3 md:rounded-l-lg md:border md:p-12 md:hover:bg-slate-300 md:hover:text-slate-900">
          <h3 className="text-xl font-black">Branding</h3>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 md:rounded-3xl md:bg-orange-400 md:p-2 md:text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-5 border-slate-500 p-6 md:gap-3 md:border md:p-12 md:hover:bg-slate-300 md:hover:text-slate-900">
          <h3 className="text-xl font-black">Branding</h3>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 md:rounded-3xl md:bg-orange-400 md:p-2 md:text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-5 border-slate-500 p-6 md:gap-3 md:border md:p-12 md:hover:bg-slate-300 md:hover:text-slate-900">
          <h3 className="text-xl font-black">Branding</h3>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 md:rounded-3xl md:bg-orange-400 md:p-2 md:text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-5 border-slate-500 p-6 md:gap-3 md:rounded-r-lg md:border md:p-12 md:hover:bg-slate-300 md:hover:text-slate-900">
          <h3 className="text-xl font-black">Branding</h3>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 md:rounded-3xl md:bg-orange-400 md:p-2 md:text-slate-900">
            Go
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
