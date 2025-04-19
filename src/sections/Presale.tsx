import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaRocket, FaCalendarAlt, FaGift, FaDiscord, FaTelegram } from 'react-icons/fa';

const Presale = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Form state
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('eth');
  const [email, setEmail] = useState<string>("");

  // Conversion rates (for demo purposes)
  const conversionRates = {
    eth: 20000,
    bnb: 10000,
    usdt: 20000,
  };

  // Calculate token amount
  const calculateTokens = () => {
    if (!amount || Number.isNaN(parseFloat(amount))) return 0;
    const inputAmount = parseFloat(amount);
    const rate = conversionRates[paymentMethod as keyof typeof conversionRates];
    return inputAmount * rate;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You are about to purchase ${calculateTokens()} tokens for ${amount} ${paymentMethod.toUpperCase()}`);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

    <>


      <section id="presale" className="section absolute inset-0 bg-gradient-to-b from-[rgba(39,255,119,0.1)] via-[rgba(39,255,119,0.2)] to-crypto-dark/90 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/blockchain-network.jpg')] bg-cover bg-center opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              coming <span className="gradient-text">soon</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="section-subtitle">
              Be among the first to acquire our tokens at the most favorable presale price before our public launch.
            </motion.p>
          </motion.div>

          <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden px-16">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url("public/images/photo-1657014513094-9103919ebe20.png")` }}></div>

            {/* Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-32 bg-green-400/10 backdrop-blur-sm rounded-xl border border-green-500/30 shadow-[0_0_40px_6px_rgba(34,197,94,0.4)] pointer-events-none"></div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-xl w-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tribe World</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Something awesome is coming soon. Stay tuned!
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-6 mb-10 text-2xl font-semibold">
                <div>
                  <p className="text-white">30</p>
                  <span className="text-sm text-gray-300">Days</span>
                </div>
                <div>
                  <p className="text-white">10</p>
                  <span className="text-sm text-gray-300">Hours</span>
                </div>
                <div>
                  <p className="text-white">45</p>
                  <span className="text-sm text-gray-300">Minutes</span>
                </div>
                <div>
                  <p className="text-white">00</p>
                  <span className="text-sm text-gray-300">Seconds</span>
                </div>
              </div>

              {/* Email Subscription */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full w-full sm:w-auto flex-1 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-gradient-to-b from-green-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-[0_4px_15.7px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#34d399,_inset_0_2px_3px_3px_rgb(14,22,35)] transition-all duration-300 hover:from-green-600 hover:to-gray-800 hover:shadow-[0_4px_20px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#6ee7b7,_inset_0_2px_4px_3px_rgb(14,22,35)]">
                  Notify Me
                </button>
              </form>

              {/* Social Media */}
              <div className="flex justify-center gap-6 text-lg text-gray-300">
                <a href="#" className="hover:text-white transition-all"><FaFacebookF /></a>
                <a href="#" className="hover:text-white transition-all"><FaTwitter /></a>
                <a href="#" className="hover:text-white transition-all"><FaInstagram /></a>
                <a href="#" className="hover:text-white transition-all"><FaDribbble /></a>
              </div>
            </div>
          </div>
          {/* Events */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Token Launch */}
            <div className="bg-gradient-to-br from-green-800/20 to-green-500/10 border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              <FaRocket className="text-green-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Token Launch</h3>
              <p className="text-gray-400 mb-2">Our official token launch is scheduled.</p>
              <p className="text-sm text-green-300">📅 April 30, 2025</p>
            </div>

            {/* Exchange Listing */}
            <div className="bg-gradient-to-br from-green-800/20 to-green-500/10 border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              <FaCalendarAlt className="text-green-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exchange Listing</h3>
              <p className="text-gray-400 mb-2">Soon to be listed on top global exchanges.</p>
              <p className="text-sm text-green-300">📅 May 10, 2025</p>
            </div>

            {/* Airdrop */}
            <div className="bg-gradient-to-br from-green-800/20 to-green-500/10 border border-green-500/30 rounded-xl p-6 shadow-lg hover:shadow-green-500/30 transition-all duration-300">
              <FaGift className="text-green-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Airdrop Announcement</h3>
              <p className="text-gray-400 mb-2">Get free tokens by completing simple tasks.</p>
              <p className="text-sm text-green-300">📅 Status: Coming Soon</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-xl text-gray-300 mb-4">Want to stay ahead?</p>
            <div className="flex justify-center flex-wrap gap-4">
              <button className="bg-gradient-to-b from-green-500 to-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-[0_4px_15.7px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#34d399,_inset_0_2px_3px_3px_rgb(14,22,35)] transition-all duration-300 hover:from-green-600 hover:to-gray-800 hover:shadow-[0_4px_20px_rgba(12,7,50,0),_inset_0_-2px_2px_1px_#6ee7b7,_inset_0_2px_4px_3px_rgb(14,22,35)]">Stay Updated</button>
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-green-500 px-5 py-2 rounded-full hover:bg-green-700 transition">
                <FaDiscord /> Join Discord
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-green-500 px-5 py-2 rounded-full hover:bg-green-700 transition">
                <FaTelegram /> Join Telegram
              </a>
            </div>
          </div>


        </div>
      </section>


    </>

  );
};

export default Presale;
