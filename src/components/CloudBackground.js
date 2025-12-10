import React from "react";
import { motion } from "framer-motion";

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cloud 1 */}
      <motion.div
        initial={{ x: -100, y: 50, opacity: 0.4 }}
        animate={{ x: 100, y: -20, opacity: 0.5 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute w-64 h-32 bg-white/40 rounded-full blur-3xl"
      />

      {/* Cloud 2 */}
      <motion.div
        initial={{ x: 150, y: 200, opacity: 0.35 }}
        animate={{ x: -80, y: 150, opacity: 0.45 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute w-72 h-36 bg-white/40 rounded-full blur-3xl"
      />

      {/* Cloud 3 */}
      <motion.div
        initial={{ x: -60, y: 350, opacity: 0.3 }}
        animate={{ x: 60, y: 330, opacity: 0.4 }}
        transition={{ duration: 26, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute w-80 h-40 bg-white/40 rounded-full blur-3xl"
      />
    </div>
  );
}
