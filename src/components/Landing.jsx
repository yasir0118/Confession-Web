import { motion } from 'framer-motion';

const Landing = ({ onStart }) => {
  return (
    <motion.div
      className="page landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="content"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="heart-icon"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ❤️
        </motion.div>
        
        <h1 className="main-title">Ada Yang Ingin</h1>
        <h1 className="main-title">Aku Sampaikan...</h1>
        
        <motion.button
          className="start-button"
          onClick={onStart}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Buka Pesannya
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
