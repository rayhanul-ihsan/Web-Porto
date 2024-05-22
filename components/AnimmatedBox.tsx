// components/AnimatedBox.js
import { motion } from 'framer-motion';

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Framer Motion in Next.js</h1>
    </motion.div>
  );
};

export default AnimatedBox;
