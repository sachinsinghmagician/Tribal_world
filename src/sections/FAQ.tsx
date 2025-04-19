import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ item open/close
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "What is the total supply of tokens?",
      answer: "The total supply is capped at 100,000,000 tokens. This fixed supply ensures scarcity and prevents inflation, potentially increasing the value of each token over time as demand grows."
    },
    {
      question: "How can I participate in the presale?",
      answer: "To participate in the presale, you need to connect your wallet on our platform, complete the KYC process if required, and follow the simple steps to contribute ETH, BNB, or USDT. Minimum contribution is $50 equivalent, and tokens will be distributed after the presale ends."
    },
    {
      question: "When will tokens be released to presale participants?",
      answer: "Tokens purchased during the presale will be released immediately after the presale concludes and the initial liquidity is added to decentralized exchanges. This is expected to happen within 48 hours of the presale ending."
    },
    {
      question: "Are the team tokens locked?",
      answer: "Yes, all team and advisor tokens are subject to a vesting schedule. 10% will be released at token generation event (TGE), with the remaining 90% vested linearly over 18 months. This demonstrates our long-term commitment to the project."
    },
    {
      question: "What blockchain is the token built on?",
      answer: "Our token is initially deployed on the Ethereum blockchain as an ERC-20 token, but we're implementing cross-chain compatibility to support multiple blockchains including Binance Smart Chain, Polygon, and Solana in the future."
    },
    {
      question: "Will there be liquidity mining or staking rewards?",
      answer: "Yes, we'll implement staking and liquidity mining programs after the initial exchange listing phase. These programs will reward long-term holders and liquidity providers with additional tokens and governance rights."
    },
    {
      question: "Has the smart contract been audited?",
      answer: "Yes, our smart contracts have been thoroughly audited by two leading blockchain security firms to ensure they are secure and free from vulnerabilities. The full audit reports are available on our Github repository."
    },
    {
      question: "What makes this project different from others?",
      answer: "Our project combines high scalability, security, and decentralization through our novel consensus mechanism. We also focus on real-world adoption with strategic partnerships in various industries and a clear roadmap for continuous development."
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
        stiffness: 50,
        damping: 15
      }
    }
  };

  return (
    <section id="faq" className="section absolute inset-0 bg-gradient-to-b from-[rgba(39,255,119,0.1)] via-[rgba(39,255,119,0.2)] to-crypto-dark/90
 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/network-blue-orange.jpg')] bg-cover bg-center opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="section-subtitle">
            Get answers to the most common questions about our presale,
            token distribution, and project development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={`faq-${index}`}
              variants={itemVariants}
              className="mb-4 last:mb-0"
            >
              <div
                className={`card cursor-pointer hover:border-primary-500 transition-all duration-300 ${
                  openIndex === index ? 'border-primary-500' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-primary-400 mr-3 min-w-6" />
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  </div>
                  <FaChevronDown
                    className={`text-primary-400 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-crypto-border pt-4 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our team is always ready to help. Reach out to us through any of our community channels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-primary bg-gradient-to-b from-green-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-[0_4px_15.7px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#34d399,_inset_0_2px_3px_3px_rgb(14,22,35)] transition-all duration-300 hover:from-green-600 hover:to-gray-800 hover:shadow-[0_4px_20px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#6ee7b7,_inset_0_2px_4px_3px_rgb(14,22,35)]">
              Join Discord Community
            </button>
            <button className="btn btn-outline rounded-full border-2 border-green-500 text-white-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out px-5">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
