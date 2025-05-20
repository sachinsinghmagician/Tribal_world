import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Whitepaper', href: '/whitepaper' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Token', href: '/token' },
        { name: 'Staking', href: '/staking' },
        { name: 'Governance', href: '/governance' },
        { name: 'Developer Portal', href: '/developers' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com' },
    { name: 'Discord', icon: <FaDiscord size={20} />, href: 'https://discord.com' },
    { name: 'Telegram', icon: <FaTelegram size={20} />, href: 'https://telegram.org' },
    { name: 'Github', icon: <FaGithub size={20} />, href: 'https://github.com' },
    { name: 'Medium', icon: <FaMedium size={20} />, href: 'https://medium.com' },
    { name: 'Email', icon: <FaEnvelope size={20} />, href: 'mailto:info@cryptopresale.com' }
  ];

  // Navigation links for quick access
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'tokenomics', text: 'Tokenomics' },
    { id: 'roadmap', text: 'Roadmap' },
    { id: 'presale', text: 'Presale' },
    { id: 'faq', text: 'FAQ' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer id='footer' className="bg-gradient-to-b from-[rgba(39,57,255,0.13)] via-[rgba(39, 255, 118, 0.02)] to-[rgba(50,39,255,0.1)]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">
                MMC
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              The future of decentralized finance with industry-leading security,
              scalability, and accessibility for all.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={`social-${link.name}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-crypto-surface flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-crypto-surface/80 transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="mb-6 md:mb-0"
            >
              <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Nav & Newsletter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="border-t border-crypto-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Site Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
              >
                {link.text}
              </Link>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="w-full md:w-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md bg-crypto-surface border border-crypto-border focus:outline-none focus:border-primary-500 w-full md:w-64 text-white"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-secondary-500 text-white px-4 py-2 rounded-r-md transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          © {currentYear} MMC. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
