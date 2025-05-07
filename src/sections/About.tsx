import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaBolt, FaUsers, FaChartLine, FaExchangeAlt, FaLock } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const features = [
    {
      icon: <FaShieldAlt size={32} className="text-primary-400" />,
      title: 'Enhanced Security',
      description: 'Our blockchain uses advanced cryptographic algorithms to ensure the highest level of security for all transactions and user data.'
    },
    {
      icon: <FaBolt size={32} className="text-primary-400" />,
      title: 'Lightning Fast',
      description: 'Experience transaction speeds of up to 10,000 TPS with minimal latency, making our platform ideal for real-world applications.'
    },
    {
      icon: <FaUsers size={32} className="text-primary-400" />,
      title: 'Community Governed',
      description: 'Governance is controlled by the community through a transparent voting mechanism, ensuring fair representation for all token holders.'
    },
    {
      icon: <FaChartLine size={32} className="text-primary-400" />,
      title: 'Scalable Architecture',
      description: 'Our layer-2 scaling solution enables unlimited growth potential without compromising on decentralization or security aspects.'
    },
    {
      icon: <FaExchangeAlt size={32} className="text-primary-400" />,
      title: 'Cross-Chain Compatibility',
      description: 'Seamlessly interact with other major blockchains through our bridging technology, allowing for versatile asset transfers.'
    },
    {
      icon: <FaLock size={32} className="text-primary-400" />,
      title: 'Privacy-Focused',
      description: 'Optional privacy features allow users to shield sensitive transaction details while still maintaining compliance with regulations.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="absolute inset-0 bg-gradient-to-b from-[rgba(0,112,255,0.1)] via-[rgba(0,112,255,0.2)] to-blue-900/90
 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/blockchain-world.jpg')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title pt-16">
            About <span className="gradient-text">Our Project</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
          MMC's blockchain infrastructure resolves the trilemma — ensuring top-tier security, genuine decentralization, and scalable performance, all within one cohesive tribal ecosystem.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="relative">
                <img
                  src="images/hitech-lab-robotics-setup-1.png"
                  alt="Blockchain Network"
                  className="rounded-lg shadow-2xl"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-lg mix-blend-overlay" />
              </div>

              {/* Floating coin decoration */}
              <motion.div
                className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="images/unnamed (7).png"
                  alt="Ethereum Coin"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Stats card */}
              <motion.div
                className="absolute -bottom-10 -left-10 md:left-10 bg-blue-900 backdrop-blur-sm p-4 rounded-lg border border-crypto-border shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-3xl text-primary-400 font-bold">99%</div>
                  <div className="text-sm text-gray-300">Uptime <br />Guarantee</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Reimagining the <span className="gradient-text">Redefining the Future of Community-Driven Finance.</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-8"
            >
             MMC is more than a platform — it's a movement. Our blockchain ecosystem empowers communities with fast, secure, and decentralized financial tools. Through innovative tokenomics, real-world utility, and a reward-driven model, we’re cultivating a sustainable digital tribe where every member thrives and contributes to lasting value creation.
            </motion.p>

            {/* Features grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-4 pb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={`feature-${index}`}
                  variants={itemVariants}
                  className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md p-6 rounded-lg border border-crypto-border hover:border-blue-500 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
