// UpcomingFeatures.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaChartLine, FaExchangeAlt, FaGamepad, FaGlobe, FaMoneyBillWave } from 'react-icons/fa';
import { SiBinance, SiCoinmarketcap, } from 'react-icons/si';

const UpcomingFeatures = () => {
  const features = [
    {
      title: "BEP-20",
      description: "Advanced token utility with multi-chain support and improved staking mechanisms.",
      icon: <FaCoins className="h-8 w-8" />,
      timeline: "Q4 2025"
    },
    {
      title: "Upcoming Blockchain",
      description: " scaling solutions with zero-knowledge proofs for enhanced and Upcoming Blockchain.",
      icon: <FaGlobe className="h-8 w-8" />,
      timeline: "Q1 2026"
    },
    {
      title: "Social Media Hub",
      description: "Integrated Web3 social platform with tokenized rewards for community engagement.",
      icon: <FaChartLine className="h-8 w-8" />,
      timeline: "Q2 2026"
    },
    {
      title: "Web3 Exchange",
      description: "Decentralized exchange with cross-chain swaps and advanced trading features.",
      icon: <FaExchangeAlt className="h-8 w-8" />,
      timeline: "Q3 2026"
    },
    {
      title: "Crypto Gaming",
      description: "Play-to-earn gaming ecosystem with NFT integration and tournament rewards.",
      icon: <FaGamepad className="h-8 w-8" />,
      timeline: "Q4 2026"
    },
    {
      title: "Forex Trading",
      description: "Bridge between crypto and forex markets with leveraged trading options.",
      icon: <FaMoneyBillWave className="h-8 w-8" />,
      timeline: "Q1 2027"
    }
  ];

  const exchanges = [
    { 
      name: "Binance", 
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z"/>
        </svg>
      ) 
    },
    { 
      name: "CoinMarketCap", 
      icon: (
       <svg viewBox="0 0 400 400" fill="currentColor" className="h-8 w-8">
    <path d="M200 0C89.543 0 0 89.543 0 200s89.543 200 200 200 200-89.543 200-200S310.457 0 200 0zm98.656 262.053c-13.936 0-24.868-6.502-32.346-18.41l-33.72-56.008c-1.53-2.546-5.112-1.442-5.112 1.495v53.872c0 16.61-13.457 30.067-30.067 30.067-10.035 0-19.002-5.006-24.313-13.384l-58.383-91.896c-1.736-2.733-5.795-1.478-5.795 1.775v108.496c0 3.314-2.686 6-6 6s-6-2.686-6-6V150.75c0-15.174 10.212-28.508 24.768-32.376 14.563-3.872 29.91 2.6 37.598 15.412l53.63 87.479c1.546 2.523 5.082 1.446 5.082-1.476v-49.138c0-16.611 13.457-30.068 30.068-30.068 10.057 0 19.033 5.017 24.338 13.401l33.764 56.078c1.586 2.634 5.57 1.445 5.57-1.677v-14.073c0-3.314 2.686-6 6-6s6 2.686 6 6v14.073c0 15.169-10.196 28.491-24.729 32.369-2.842.752-5.746 1.119-8.58 1.119z"/>
  </svg>

      ) 
    },
    { 
      name: "PancakeSwap", 
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" className="h-8 w-8">
    <path d="M391.8 193.4c13.9-4.1 25.7-12.8 34.1-24.5 10.8-15.1 13.5-33.9 7.6-51.2-8.5-25-31.4-42-57.7-42-7.7 0-15.3 1.4-22.6 4.2-3.7 1.4-6.3 4.7-6.8 8.6-0.4 3.9 1.2 7.7 4.2 10.2 17.1 14.7 27 36.1 26.7 58.3-0.1 4.4-0.5 8.8-1.4 13.2-.8 4.1 1.1 8.2 4.7 10.3 2.8 1.6 6.2 2 9.3 1zm-271.6 0c13.9-4.1 25.7-12.8 34.1-24.5 10.8-15.1 13.5-33.9 7.6-51.2-8.5-25-31.4-42-57.7-42-7.7 0-15.3 1.4-22.6 4.2-3.7 1.4-6.3 4.7-6.8 8.6-0.4 3.9 1.2 7.7 4.2 10.2 17.1 14.7 27 36.1 26.7 58.3-0.1 4.4-0.5 8.8-1.4 13.2-.8 4.1 1.1 8.2 4.7 10.3 2.8 1.6 6.2 2 9.3 1zM256 109.3c-64.3 0-116.5 52.2-116.5 116.5v25.3c-56.5 20.2-94.2 73.8-94.2 133.3 0 80.3 65.2 145.5 145.5 145.5h130.3c80.3 0 145.5-65.2 145.5-145.5 0-59.5-37.7-113.1-94.2-133.3v-25.3c0-64.3-52.2-116.5-116.5-116.5zM182.2 336c-14.6 0-26.5-11.9-26.5-26.5s11.9-26.5 26.5-26.5 26.5 11.9 26.5 26.5-11.9 26.5-26.5 26.5zm147.6 0c-14.6 0-26.5-11.9-26.5-26.5s11.9-26.5 26.5-26.5 26.5 11.9 26.5 26.5-11.9 26.5-26.5 26.5z" />
  </svg>
      ) 
    },
    { 
      name: "LBank", 
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" className="h-8 w-8">
    <path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm128.8 347.2c-15.8 0-29.6-8-38.1-20.2l-45.6-67.6v70.4c0 15.2-12.3 27.5-27.5 27.5-9.5 0-18.4-4.8-23.7-12.7l-70.2-103.9c-1.1-1.7-3.6-0.9-3.6 1v95.2c0 23.7-19.3 43-43 43s-43-19.3-43-43v-90.5c0-25.7 20.9-46.6 46.6-46.6 15.6 0 30.1 7.8 39 20.7l67.2 98.8v-70.2c0-15.2 12.3-27.5 27.5-27.5 9.2 0 17.8 4.6 23.1 12.3l62.2 92.2c1.1 1.6 3.5 0.9 3.5-1v-85.3c0-23.7 19.3-43 43-43s43 19.3 43 43v90.5c0 25.7-20.9 46.6-46.6 46.6z" />
  </svg>
      ) 
    },
    { 
      name: "CoinGecko", 
      icon: (
        <svg viewBox="0 0 512 512" fill="currentColor" className="h-8 w-8">
    <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm134.1 340.4c-33.3 42.7-89.5 61.1-153.7 49.1-34.6-6.4-64.2-26.3-83.1-55.5-23.7-36.6-23.9-78.2-0.5-114.7 25.2-39.4 70.5-61.5 122.4-59.4 50.1 2 94.4 27.6 116.8 68.2 21.3 38.1 19.2 85.2-2.1 112.3zM209.7 180c-9.5 0-17.3-7.7-17.3-17.3s7.7-17.3 17.3-17.3 17.3 7.7 17.3 17.3-7.8 17.3-17.3 17.3z" />
  </svg>
      ) 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section absolute inset-0 bg-gradient-to-b from-[rgba(0,112,255,0.1)] via-[rgba(0,112,255,0.2)] to-blue-900/90
 relative overflow-hidden">

    {/* Background elements */}
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/network-blue-orange.jpg')] bg-cover bg-center opacity-5" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
           <motion.h2 variants={itemVariants} className="section-title">
            <span className="gradient-text">Upcomping Platform & token listing </span>
          </motion.h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the next evolution of our ecosystem with these groundbreaking features currently in development.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md  rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                  {feature.icon}
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-blue-300 rounded-full">
                  {feature.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Token Listings Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md rounded-2xl p-8 border border-gray-700 mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Token Listings & Partnerships
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our token is available on leading exchanges and recognized by top market aggregators.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-blue-700/50 rounded-lg px-6 py-4 border border-gray-600 hover:border-blue-400 transition-all"
              >
                <div className="text-blue-400 mr-3">
                  {exchange.icon}
                </div>
                <span className="text-white font-medium">{exchange.name}</span> 
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-gradient-to-b from-blue-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold  transition-all duration-300 hover:from-blue-600 hover:to-gray-800 hover:shadow-[ 0 4px 20px rgba(0, 0, 255, 0.3), 
  inset 0 -2px 2px 1px #3b82f6, 
  inset 0 2px 4px 3px rgb(29, 78, 216)]">
            View Full Roadmap
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;