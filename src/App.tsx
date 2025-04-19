import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Tokenomics from './sections/Tokenomics';
import Roadmap from './sections/Roadmap';
import Presale from './sections/Presale';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import { BsArrowUp } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Control scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Presale />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-lg transition-all z-50"
            aria-label="Scroll to top"
          >
            <BsArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
