import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaLock } from 'react-icons/fa';
import CountUp from 'react-countup';

const Hero = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining until presale ends
  useEffect(() => {
    // Set end date to 30 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const coinVariants = {
    hover: {
      scale: 1.05,
      rotateY: 180,
      transition: {
        duration: 1,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,112,255,0.1)] via-[rgba(0,112,255,0.2)] to-blue-900/90" />
        <div className="absolute inset-0 bg-[url('public/images/blockchain-world.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-primary-500/20"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <motion.div variants={itemVariants}>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 font-display"
            >
              <span className="gradient-text"> MMC</span> Crypto <br /> Plan is Live
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              Welcome to MMC — Your Gateway to Decentralized Wealth Creation!
              Step into a revolutionary platform where blockchain technology meets community empowerment. MMC offers a secure, transparent, and scalable ecosystem that transforms how you earn, grow, and succeed.  Join MMC — where collective success is the foundation, and transparent wealth creation is the goal.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md rounded-lg p-4 border border-crypto-border">
                <div className="text-2xl text-primary-400 font-bold">
                  <CountUp end={45000} separator="," duration={2.5} />+
                </div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>

              <div className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md rounded-lg p-4 border border-crypto-border">
                <div className="text-2xl text-secondary-400 font-bold">
                  $<CountUp end={1200000} separator="," duration={2.5} />
                </div>
                <div className="text-sm text-gray-400">Funds Raised</div>
              </div>

              <div className="bg-[rgba(1, 10, 4, 0)] backdrop-blur-md rounded-lg p-4 border border-crypto-border col-span-2 md:col-span-1">
                <div className="text-2xl text-crypto-accent font-bold">
                  <CountUp end={70} duration={2} />%
                </div>
                <div className="text-sm text-gray-400">Plan Sold</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-gradient-to-b from-blue-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold  transition-all duration-300 hover:from-blue-600 hover:to-gray-800 hover:shadow-[ 0 4px 20px rgba(0, 0, 255, 0.3), 
  inset 0 -2px 2px 1px #3b82f6, 
  inset 0 2px 4px 3px rgb(29, 78, 216)]">
                Sign in
              </button>
              <button className="btn btn-outline rounded-full border-2 border-blue-500 text-white-500hover:from-blue-600 hover:to-gray-800 hover:shadow-[ 0 4px 20px rgba(0, 0, 255, 0.3) hover:text-white transition-all duration-300 ease-in-out px-5">
                View Whitepaper
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Coin display and timer */}
          <motion.div variants={itemVariants} className="text-center">
            {/* Coin image */}
            <motion.div
              whileHover="hover"
              animate={{ y: [0, -15, 0] }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
              className="relative inline-block mb-10"
            >
              <motion.img
                variants={coinVariants}
                src="images/unnamed (7).png"
                alt="Crypto Coin"
                className="w-152 h-152 md:w-72 md:h-72 "
              />
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent rounded-full animate-pulse-slow" />
            </motion.div>

            {/* Countdown timer */}
            <motion.div
              variants={itemVariants}
              className="bg-[rgba(14,26,33,0)] backdrop-blur-md rounded-xl p-6 border border-crypto-border"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Launch Begins In</h3>

              <div className="grid grid-cols-4 gap-2">
                <div className="bg-[rgba(39,89,255,0.52)] p-3 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Days</div>
                </div>
                <div className="bg-[rgba(39,89,255,0.52)] p-3 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="bg-[rgba(39,89,255,0.52)] p-3 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="bg-[rgba(39,89,255,0.52)] p-3 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Seconds</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-3 w-full bg-crypto-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    style={{ width: '70%' }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-400">0 MATIC</span>
                  <span className="text-gray-400">10M MATIC</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
