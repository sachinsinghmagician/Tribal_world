import React from "react";
import { motion } from "framer-motion";

interface TokenDetail {
  icon: JSX.Element;
  label: string;
  value: string;
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const SpinningBorderCard: React.FC<{ tokenDetails: TokenDetail[] }> = ({ tokenDetails }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={itemVariants}
      className="card mb-8 bg-[rgba(50, 196, 98, 0.77)] backdrop-blur-md p-6 rounded-lg relative overflow-hidden"
    >
      {/* Spinning Border Overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{ borderColor: ["#00f", "#1E90FF", "#4682B4", "#1E90FF", "#00f"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#00f",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {tokenDetails.map((detail, index) => (
          <div
            key={`detail-${index}`}
            className={`flex justify-between items-center py-4 ${
              index !== tokenDetails.length - 1 ? "border-b border-crypto-border" : ""
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
      </div>
    </motion.div>
  );
};

export default SpinningBorderCard;
