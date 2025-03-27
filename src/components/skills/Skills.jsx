import { motion } from 'framer-motion';

// // Helper function to calculate experience in months
// const calculateExperience = (startDate) => {
//   const start = new Date(startDate.split('.').reverse().join('-'));
//   const now = new Date();

//   const years = now.getFullYear() - start.getFullYear();
//   const months = now.getMonth() - start.getMonth();

//   return years * 12 + months;
// };

// // Function to determine experience level color and text
// const getExperienceLevel = (months) => {
//   if (months < 3) return { level: 'Beginner', color: 'bg-red-500' };
//   if (months < 12) return { level: 'Intermediate', color: 'bg-yellow-500' };
//   return { level: 'Advanced', color: 'bg-green-500' };
// };

// Skills data
const skills = [
  // Frontend Skills
  {
    name: 'HTML',
    img: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    startDate: '01.05.2023',
    category: 'Frontend',
  },
  {
    name: 'CSS3',
    img: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    startDate: '01.05.2023',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    img: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    startDate: '01.11.2023',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    img: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },
  {
    name: 'React',
    img: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    startDate: '01.01.2024',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    img: 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    img: 'https://img.shields.io/badge/tailwindcss-%2338BDF8.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },
  {
    name: 'Chakra UI',
    img: 'https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakra-ui&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },
  {
    name: 'Bootstrap',
    img: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },
  {
    name: 'Material UI',
    img: 'https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white',
    startDate: '01.01.2025',
    category: 'Frontend',
  },

  // Backend Skills
  {
    name: 'Node.js',
    img: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
    startDate: '01.11.2023',
    category: 'Backend',
  },
  {
    name: 'Express.js',
    img: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    startDate: '01.06.2024',
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    img: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
    startDate: '01.07.2024',
    category: 'Backend',
  },
  {
    name: 'REST API',
    img: 'https://img.shields.io/badge/rest-000000?style=for-the-badge&logo=rest&logoColor=white',
    startDate: '01.01.2025',
    category: 'Backend',
  },

  // Other Skills
  {
    name: 'Git',
    img: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
    startDate: '01.09.2023',
    category: 'Version Control',
  },
  {
    name: 'GitHub',
    img: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
    startDate: '01.09.2023',
    category: 'Version Control',
  },
];

// Animasyon varyantları
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const titleAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.2,
    },
  },
};

const Skills = () => {
  // Kategorilere göre becerileri gruplama
  const categories = {
    Frontend: skills.filter((skill) => skill.category === 'Frontend'),
    Backend: skills.filter((skill) => skill.category === 'Backend'),
    'Version Control': skills.filter(
      (skill) => skill.category === 'Version Control'
    ),
  };

  return (
    <div className="services flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-8 sm:py-12">
      <motion.div
        className="titleContainer mb-6 text-center sm:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={titleAnimation}
      >
        <h2 className="text-4xl font-thin sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-black text-transparent">
            Skills
          </span>
        </h2>
        <motion.div
          className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 sm:w-20"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
        />
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {Object.entries(categories).map(([category, categorySkills]) => (
          <motion.div key={category} className="mb-5 sm:mb-6" variants={item}>
            <motion.h3
              className="mb-3 border-l-4 border-orange-400 pl-3 text-center text-xl font-bold sm:mb-4 sm:text-2xl md:text-left"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: false }}
            >
              {category}
            </motion.h3>

            <motion.div
              className="xs:grid-cols-3 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-6"
              variants={categoryContainer}
            >
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover="hover"
                  className="skill flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 p-2 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-orange-400/50 sm:p-3"
                >
                  <motion.div className="mb-1 sm:mb-2">
                    <img
                      src={skill.img}
                      alt={`${skill.name} icon`}
                      className="h-6 sm:h-8"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
