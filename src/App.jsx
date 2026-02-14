import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import ConfessionPage from './components/ConfessionPage'
import FinalPage from './components/FinalPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Data confession pages
  const confessions = [
    {
      title: "Kamu Tahu Nggak?",
      message: "Setiap kali aku lihat notifikasi dari kamu, jantung aku langsung berdetak lebih kencang. Rasanya seneng banget!",
      emoji: "💝"
    },
    {
      title: "Aku Suka...",
      message: "Suka banget sama cara kamu senyum. Senyummu itu bisa bikin hari aku yang tadinya buruk jadi cerah lagi.",
      emoji: "😊"
    },
    {
      title: "Setiap Hari...",
      message: "Aku selalu kepikiran kamu. Di pagi hari, siang hari, sampai malam sebelum tidur. Kamu selalu ada di pikiran aku.",
      emoji: "💭"
    },
    {
      title: "Jujur Nih...",
      message: "Aku nervous banget mau ngomong ini. Tapi aku nggak mau nyesel karena nggak pernah nyoba. Jadi aku beraniin diri...",
      emoji: "😳"
    },
    {
      title: "Yang Jelas...",
      message: "Aku suka sama kamu. Bukan cuma sekedar suka, tapi aku pengen lebih dekat sama kamu. Pengen tau semuanya tentang kamu.",
      emoji: "💖"
    }
  ];

  const handleStart = () => {
    setCurrentPage(1);
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  const renderPage = () => {
    if (currentPage === 0) {
      return <Landing key="landing" onStart={handleStart} />;
    } else if (currentPage <= confessions.length) {
      const confession = confessions[currentPage - 1];
      return (
        <ConfessionPage
          key={`confession-${currentPage}`}
          title={confession.title}
          message={confession.message}
          emoji={confession.emoji}
          onNext={handleNext}
          isLast={currentPage === confessions.length}
        />
      );
    } else {
      return <FinalPage key="final" />;
    }
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  )
}

export default App
