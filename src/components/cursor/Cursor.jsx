import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position.x+10, y: position.y+10 }}
      className="cursor z-50 fixed size-12 hidden md:block rounded-full border"
    >
    </motion.div>
  );
};
export default Cursor;
