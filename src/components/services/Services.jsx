import { animate, motion } from 'framer-motion';

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
}

const Services = () => {
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className="services p-3 flex size-full flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-800">
      <motion.div variants={variants}  className="textContainer flex flex-1 items-center justify-center gap-5 self-end">
        <p className="text-right text-xl font-thin text-slate-500">
          I focus on helping your brand grow
          <br />
          by creating a unique online presence.
        </p>
        <hr className="w-[500px] border-t-2 border-slate-700" />
      </motion.div>
      <motion.div variants={variants}  className="titleContainer flex flex-[2] flex-col items-center justify-center">
        <div className="title flex items-center gap-12">
          <img
            className="h-24 w-80 rounded-[50px] object-cover"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-7xl font-thin">
            <b className="font-black hover:text-orange-400">Unique</b> Ideas
          </h1>
        </div>
        <div className="title flex items-center gap-12">
          <h2 className="text-7xl font-thin">
            <b className="font-black hover:text-orange-400">For Your</b> Business.
          </h2>
          <button className="h-24 w-80 cursor-pointer rounded-[50px] bg-orange-400 text-2xl text-slate-900">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div variants={variants}  className="listContainer m-auto flex max-w-7xl flex-[2] items-center justify-center">
        <div className="box flex flex-col justify-between gap-3 rounded-l-lg border border-slate-500 p-12 hover:bg-slate-300 hover:text-slate-900">
          <h3 className='font-black text-xl'>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-3xl bg-orange-400 p-2 text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-3 border border-slate-500 p-12 hover:bg-slate-300 hover:text-slate-900">
          <h3 className='font-black text-xl'>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-3xl bg-orange-400 p-2 text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-3 border border-slate-500 p-12 hover:bg-slate-300 hover:text-slate-900">
          <h3 className='font-black text-xl'>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-3xl bg-orange-400 p-2 text-slate-900">
            Go
          </button>
        </div>
        <div className="box flex flex-col justify-between gap-3 rounded-r-lg border border-slate-500 p-12 hover:bg-slate-300 hover:text-slate-900">
          <h3 className='font-black text-xl'>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam
            unde sunt. Et incidunt at, commodi esse repellat voluptas. Officiis
            similique esse ratione odit iure quo aperiam quibusdam eaque ea.
          </p>
          <button className="cursor-pointer rounded-3xl bg-orange-400 p-2 text-slate-900">
            Go
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
