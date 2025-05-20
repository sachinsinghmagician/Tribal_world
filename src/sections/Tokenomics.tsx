import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FaCoins, FaChartPie, FaExchangeAlt, FaLock, FaRocket, FaFileContract } from 'react-icons/fa';
import SpinningBorderCard from "../components/SpinningBorderCard";
import SpaceTunnel from "../components/Spacetunnel";

interface TokenDetail {
  icon: JSX.Element;
  label: string;
  value: string;
}

interface DistributionItem {
  name: string;
  percentage: number;
  color: string;
}

const Tokenomics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Token distribution data
  const tokenDistribution: DistributionItem[] = [
    { name: 'Public Sale', percentage: 30, color: 'from-primary-400 to-primary-600' },
    { name: 'Liquidity Pool', percentage: 25, color: 'from-primary-500 to-primary-700' },
    { name: 'Team & Advisors', percentage: 15, color: 'from-primary-600 to-primary-800' },
    { name: 'Ecosystem Growth', percentage: 10, color: 'from-secondary-400 to-secondary-600' },
    { name: 'Marketing', percentage: 10, color: 'from-secondary-500 to-secondary-700' },
    { name: 'Reserve', percentage: 10, color: 'from-secondary-600 to-secondary-800' },
  ];

  // Token details
  const tokenDetails: TokenDetail[] = [
    {
      icon: <FaCoins />,
      label: 'Investment Tier',
      value: 'Tier 1: $100 - $1,000'
    },
    {
      icon: <FaFileContract />,
      label: 'Token Type',
      value: 'ERC-20'
    },
    {
      icon: <FaChartPie />,
      label: 'Total Supply',
      value: '100,000,000 CRYPTO'
    },
    {
      icon: <FaExchangeAlt />,
      label: 'Initial Price',
      value: '$0.05 per Token'
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
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
    <section 
      id="tokenomics" 
      className="relative inset-0 bg-gradient-to-b from-[rgba(0,112,255,0.1)] via-[rgba(0,112,255,0.2)] to-blue-900/90 overflow-hidden"
    >
      {/* Background elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/network-blue-orange.jpg')] bg-cover bg-center opacity-10" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10 py-16" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="gradient-text">Investment-driven Plan </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Our token economy is built to guarantee long-term sustainability, equitable distribution, and consistent value growth for all stakeholders.
          </motion.p>
        </motion.div>

        <div className="min-h-screen bg-gradient-to-l text-white rounded-md">
          <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Welcome Banner */}
            <div className="flex flex-col items-center justify-center space-y-8">
             
              {/* <SpaceTunnel /> */}
            </div>

            {/* Right side - Token Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-center mb-8"
              >
               
              </motion.h3>

              {/* <div className="p-8 w-full">
                <h2 className="text-2xl font-bold text-white text-center mb-8">Token Information</h2>
                <SpinningBorderCard tokenDetails={tokenDetails} />
              </div> */}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-16 items-center mt-16">
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              
            </motion.h3>
            {/* Add your pie chart visualization here */}
          </div>

          {/* Token benefits */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4">MMC Utility</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                </div>
                <span>Participate in Governance: Have a voice in key platform decisions, from feature updates to future developments</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                </div>
                <span>Lower Transaction Costs: Enjoy reduced fees on all transactions within the MMC ecosystem, maximizing your earnings.</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                </div>
                <span>Exclusive Feature Access: Unlock premium tools and services available only to CRYPTO token holders</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 mt-1">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                </div>
                <span>Earn Staking Rewards: Secure the network and earn passive income by staking your tokens</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;