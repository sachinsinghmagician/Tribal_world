import React from "react";

const SpaceTunnel: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue text-white">
      <div className="relative w-full h-screen flex items-center justify-center">
       

        <div className="relative w-60 h-60 perspective-800">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-full h-full border border-cyan-400 opacity-60"
              style={
                {
                  animation: `fly 3s linear ${index * 0.4}s infinite`,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 128, 255, 0.2)",
                  filter: "drop-shadow(2px 0 red) drop-shadow(-2px 0 blue)",
                } as React.CSSProperties
              }
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fly {
          0% { transform: translateZ(600px) scale(0.1) rotate(0deg); opacity: 0; }
          25% { opacity: 1; }
          100% { transform: translateZ(-800px) scale(2.5) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default SpaceTunnel;
