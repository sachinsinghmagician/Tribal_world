import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'tokenomics', text: 'Tokenomics' },
    { id: 'roadmap', text: 'Roadmap' },
    { id: 'presale', text: 'Presale' },
    { id: 'faq', text: 'FAQ' },
  ];

  return (
    <nav
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? 'bg-crypto-dark/90 backdrop-blur-md shadow-lg'
      //     : 'bg-transparent'
      // }`}
      
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ?  'bg-gradient-to-b from-green-800 to-green-500/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white hover:text-green-800 transition-colors cursor-pointer font-medium">
      
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold gradient-text">
            Tribal World
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6 items-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-primary-400 transition-colors cursor-pointer font-medium"
            >
              {link.text}
            </Link>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center space-x-4"
        >
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
            <FaDiscord size={20} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
            <FaTelegram size={20} />
          </a>
          <button className="bg-gradient-to-b from-green-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-[0_4px_15.7px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#34d399,_inset_0_2px_3px_3px_rgb(14,22,35)] transition-all duration-300 hover:from-green-600 hover:to-gray-800 hover:shadow-[0_4px_20px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#6ee7b7,_inset_0_2px_4px_3px_rgb(14,22,35)]">
            Connect Wallet
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-crypto-dark/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="text-white hover:text-primary-400 transition-colors cursor-pointer py-2 font-medium"
                >
                  {link.text}
                </Link>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 py-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                  <FaDiscord size={20} />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors">
                  <FaTelegram size={20} />
                </a>
              </div>

              <button className="btn btn-primary">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
