import { motion } from 'framer-motion';

// Helper function to calculate experience in months
const calculateExperience = (startDate) => {
  const start = new Date(startDate.split('.').reverse().join('-'));
  const now = new Date();

  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();

  return years * 12 + months;
};

// Function to determine experience level color and text
const getExperienceLevel = (months) => {
  if (months < 3) return { level: 'Beginner', color: 'bg-red-500' };
  if (months < 12) return { level: 'Intermediate', color: 'bg-yellow-500' };
  return { level: 'Advanced', color: 'bg-green-500' };
};

// Skills data
const skills = [
  {
    name: 'HTML',
    img: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    startDate: '01.05.2023',
  },
  {
    name: 'CSS3',
    img: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    startDate: '01.05.2023',
  },
  {
    name: 'JavaScript',
    img: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    startDate: '01.11.2023',
  },
  {
    name: 'React',
    img: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    startDate: '01.01.2024',
  },
  {
    name: 'Node.js',
    img: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
    startDate: '01.11.2023',
  },
  {
    name: 'Express.js',
    img: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    startDate: '01.06.2024',
  },
  {
    name: 'MongoDB',
    img: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
    startDate: '01.07.2024',
  },
  {
    name: 'Git',
    img: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
    startDate: '01.09.2023',
  },
  {
    name: 'GitHub',
    img: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
    startDate: '01.09.2023',
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <div className="services flex size-full flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-3">
      <div className="titleContainer mb-3 pt-1 text-center">
        <h2 className="text-4xl font-thin md:text-7xl">
          <strong className="font-black hover:text-orange-400">Skills</strong>
        </h2>
      </div>
      <div className="listContainer mx-auto flex w-full max-w-7xl flex-col items-center justify-center md:flex-row">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          className="skills grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:justify-center"
        >
          {skills.map((skill) => {
            const experience = calculateExperience(skill.startDate);
            const { level, color } = getExperienceLevel(experience);
            const progressWidth = Math.min((experience / 18) * 100, 100);

            return (
              <motion.div
                key={skill.name}
                variants={item}
                className="skill group flex flex-col items-center gap-6 rounded-2xl border border-solid border-slate-300 px-2 py-3 shadow-xl md:min-w-[300px]"
              >
                <img
                  src={skill.img}
                  alt={`${skill.name} icon`}
                  className="h-8 transition-all duration-500 group-hover:scale-125 group-hover:rounded-lg"
                />
                <h3 className="hidden text-2xl font-black">{skill.name}</h3>

                {/* Experience Level Badge */}
                <span
                  className={`hidden rounded-full px-2 py-1 text-sm font-semibold text-white lg:flex ${color}`}
                >
                  {level}
                </span>

                {/* Progress Bar */}
                <div className="mt-2 h-2.5 w-full rounded-full bg-gray-300">
                  <div
                    className={`h-2.5 rounded-full ${color}`}
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>

                {/* Experience Text */}
                <span className="hidden text-lg lg:flex">
                  {experience > 0
                    ? `${experience} month${experience === 1 ? '' : 's'} experience`
                    : 'Less than a month experience'}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
