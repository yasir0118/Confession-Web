import { motion } from 'framer-motion';
import { useState } from 'react';

const FinalPage = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonText, setNoButtonText] = useState('Tidak');
  const [showConfetti, setShowConfetti] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    'Tidak',
    'Yakin?',
    'Serius?',
    'Coba lagi deh',
    'Jangan dong',
    'Mikir lagi yuk',
    'Ayo dong...',
    'Pleeease 🥺'
  ];

  const handleNoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount < messages.length) {
      setNoButtonText(messages[newCount]);
    }
    
    // Move button to random position
    setNoButtonStyle({
      position: 'absolute',
      left: `${Math.random() * 60 + 20}%`,
      top: `${Math.random() * 40 + 30}%`,
      transform: 'translate(-50%, -50%)'
    });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
  };

  return (
    <motion.div
      className="page final-page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {!showConfetti ? (
        <motion.div
          className="content"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <motion.div
            className="big-emoji"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌹
          </motion.div>
          
          <motion.h1
            className="final-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Jadi...
          </motion.h1>
          
          <motion.h2
            className="final-question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Mau nggak jadi pacar aku?
          </motion.h2>
          
          <motion.div
            className="button-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              className="yes-button"
              onClick={handleYesClick}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                scale: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Iya Mau! ❤️
            </motion.button>
            
            <motion.button
              className="no-button"
              onClick={handleNoClick}
              whileHover={{ scale: 1.1 }}
              style={noButtonStyle}
            >
              {noButtonText}
            </motion.button>
          </motion.div>
          
          <motion.p
            className="hint-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            (Psst... tombol "Iya" aja yang bener loh 😊)
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="success-content"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <motion.div
            className="success-emoji"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 1,
              ease: "easeInOut"
            }}
          >
            🎉
          </motion.div>
          
          <h1 className="success-title">Yeayyyy! 🥳</h1>
          <p className="success-message">
            Aku janji bakal jadi yang terbaik buat kamu! ❤️
          </p>
          
          {/* Multiple confetti hearts */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="confetti-heart"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                rotate: 0
              }}
              animate={{
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                opacity: 0,
                rotate: Math.random() * 720,
                scale: [1, 1.5, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            >
              {['❤️', '💖', '💕', '💗', '💝'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FinalPage;
