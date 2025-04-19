import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCoins, FaChartPie, FaExchangeAlt, FaLock, FaRocket, FaFileContract } from 'react-icons/fa';

const Tokenomics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold : 0.1 });

  // Token distribution data
  const tokenDistribution = [
    { name: 'Public Sale', percentage: 30, color: 'from-primary-400 to-primary-600' },
    { name: 'Liquidity Pool', percentage: 25, color: 'from-primary-500 to-primary-700' },
    { name: 'Team & Advisors', percentage: 15, color: 'from-primary-600 to-primary-800' },
    { name: 'Ecosystem Growth', percentage: 10, color: 'from-secondary-400 to-secondary-600' },
    { name: 'Marketing', percentage: 10, color: 'from-secondary-500 to-secondary-700' },
    { name: 'Reserve', percentage: 10, color: 'from-secondary-600 to-secondary-800' },
  ];

  // Token details
  const tokenDetails = [
    {
      icon: <FaCoins />,
      label: 'Token Name',
      value: 'CRYPTO'
    },
    {
      icon: <FaFileContract />,
      label: 'Token Type',
      value: 'ERC-20'
    },
    {
      icon: <FaChartPie />,
      label: 'Total Supply',
      value: '100,000,000'
    },
    {
      icon: <FaExchangeAlt />,
      label: 'Initial Price',
      value: '$0.05'
    },
    {
      icon: <FaLock />,
      label: 'Vesting Period',
      value: '12 Months'
    },
    {
      icon: <FaRocket />,
      label: 'Launch Date',
      value: 'Q3 2025'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 20
      }
    }
  };

  return (
    <section id="tokenomics" className="section absolute absolute inset-0 bg-gradient-to-b from-[rgba(39,255,119,0.1)] via-[rgba(39,255,119,0.2)] to-crypto-dark/90

 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/network-blue-orange.jpg')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="gradient-text">Tokenomics</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Our token economy is designed to ensure long-term sustainability, fair distribution,
            and continuous value appreciation for all stakeholders.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Distribution chart */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Token Distribution
            </motion.h3>

            {/* Pie chart visualization */}
            <motion.div variants={itemVariants} className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                {tokenDistribution.map((item, index) => {
                  // Calculate SVG parameters for pie chart
                  const startAngle = tokenDistribution
                    .slice(0, index)
                    .reduce((sum, curr) => sum + curr.percentage, 0) * 3.6; // Convert to degrees (360 / 100)

                  const endAngle = startAngle + item.percentage * 3.6;

                  // Convert to SVG arc coordinates
                  const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
                  const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
                  const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
                  const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));

                  // Determine if the arc should take the large-arc-flag
                  const largeArcFlag = item.percentage > 50 ? 1 : 0;

                  return (
                    <motion.div
                      key={`pie-${item.name}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className={`stop-${item.color.split(' ')[0]}`} />
                            <stop offset="100%" className={`stop-${item.color.split(' ')[1]}`} />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                          fill={`url(#gradient-${index})`}
                          stroke="#0a0e1c"
                          strokeWidth="0.5"
                          className="hover:opacity-90 transition-opacity cursor-pointer"
                        />
                      </svg>
                    </motion.div>
                  );
                })}

                {/* Center circle with icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-crypto-dark flex items-center justify-center animate-pulse-slow">
                    <img
                      src="/images/glass-bitcoin.png"
                      alt="Token"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legend */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {tokenDistribution.map((item, index) => (
                <motion.div
                  key={`legend-${item.name}`}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <div className={`w-4 h-4 rounded-sm bg-gradient-to-r ${item.color} mr-2`} />
                  <div className="text-sm">
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="text-gray-400 ml-2">{item.percentage}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Token details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Token Details
            </motion.h3>

            <motion.div variants={itemVariants} className="card mb-8 bg-[rgba(50, 196, 98, 0.77)] backdrop-blur-md p-6 rounded-lg border border-crypto-border hover:border-green-500">
              {tokenDetails.map((detail, index) => (
                <div
                  key={`detail-${index}`}
                  className={`flex justify-between items-center py-4 ${
                    index !== tokenDetails.length - 1 ? 'border-b border-crypto-border' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400">
                      {detail.icon}
                    </div>
                    <span className="text-gray-300">{detail.label}</span>
                  </div>
                  <span className="font-medium text-white">{detail.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Token benefits */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-4">Token Utility</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  </div>
                  <span>Governance rights for platform decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  </div>
                  <span>Reduced transaction fees on the platform</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  </div>
                  <span>Access to exclusive platform features</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  </div>
                  <span>Staking rewards for network security</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
