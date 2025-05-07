import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle, FaSpinner, FaRocket } from 'react-icons/fa';

const Roadmap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Roadmap data with phases and milestones
  const roadmapData = [
    {
      phase: 'Phase 1: Foundation',
      quarter: 'Q2 2025',
      status: 'completed',
      milestones: [
        'Concept development and whitepaper publication',
        'Team formation and advisory board establishment',
        'Initial seed funding secured',
        'Community building initiatives launched',
        'Smart contract development and auditing'
      ]
    },
    {
      phase: 'Phase 2: Presale & Development',
      quarter: 'Q3 2025',
      status: 'current',
      milestones: [
        'Private sale for strategic investors',
        'Public presale launch',
        'Testnet deployment and bug bounty program',
        'Partnership announcements',
        'Expanded marketing campaign across platforms'
      ]
    },
    {
      phase: 'Phase 3: Launch & Growth',
      quarter: 'Q4 2025',
      status: 'upcoming',
      milestones: [
        'Mainnet launch and token generation event',
        'DEX and CEX listings',
        'Staking platform deployment',
        'Cross-chain bridge implementation',
        'First governance proposal voting'
      ]
    },
    {
      phase: 'Phase 4: Expansion',
      quarter: 'Q1 2026',
      status: 'upcoming',
      milestones: [
        'Mobile wallet application release',
        'Developer grants program',
        'Layer-2 scaling solutions',
        'Additional chain integrations',
        'Enterprise adoption initiatives'
      ]
    },
    {
      phase: 'Phase 5: Ecosystem Maturity',
      quarter: 'Q2 2026',
      status: 'upcoming',
      milestones: [
        'Complete decentralization of governance',
        'Incubator for ecosystem projects',
        'Advanced privacy features implementation',
        'Global expansion and localization',
        'Self-sustaining ecosystem development'
      ]
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 12
      }
    }
  };

  // Status icons for milestones
  const statusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-crypto-accent" />;
      case 'current':
        return <FaSpinner className="text-primary-400 animate-spin" />;
      case 'upcoming':
        return <FaRocket className="text-secondary-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="relative overflow-hidden py-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,112,255,0.1)] via-[rgba(0,112,255,0.2)] to-blue-900/90 "  />
      <div className="absolute inset-0 bg-[url('/images/blockchain-world.jpg')] bg-cover bg-center opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Project <span className="gradient-text">Roadmap</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Our strategic development plan is designed to ensure continuous innovation
            and sustainable growth over time. Here's our journey ahead.
          </motion.p>
        </motion.div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />

          {roadmapData.map((phase, index) => (
            <motion.div
              key={`phase-${phase.phase}`}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center md:items-start mb-16 last:mb-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 z-10 hidden md:block" />

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className={`card hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1 ${phase.status === 'current' ? 'border-primary-500 shadow-lg shadow-primary-500/20' : ''
                  }`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary-500/20 text-primary-400">
                      {phase.quarter}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div>{statusIcon(phase.status)}</div>
                    <div className="text-sm">
                      <span className="capitalize">{phase.status}</span>
                      {phase.status === 'current' && (
                        <span className="text-primary-400"> - In Progress</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, mIndex) => (
                      <li
                        key={`milestone-${index}-${mIndex}`}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="min-w-4 h-4 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        </div>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile year indicator */}
              <div className="flex md:hidden w-full justify-start my-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                  <span className="text-sm font-semibold text-primary-400">{phase.quarter}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Excited about our journey? Join us now and be part of the revolution!
          </p>
          <button className="bg-gradient-to-b from-blue-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold  transition-all duration-300 hover:from-blue-600 hover:to-gray-800 hover:shadow-[ 0 4px 20px rgba(0, 0, 255, 0.3), 
  inset 0 -2px 2px 1px #3b82f6, 
  inset 0 2px 4px 3px rgb(29, 78, 216)]">
            Join Our Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
