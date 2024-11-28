'use client';

import { motion } from "framer-motion";
import { Shield, Zap, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <motion.div 
      className="text-left max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get Your{" "}
        <span className="relative">
          <span className="relative z-10 text-sky-500 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Dream Classes
          </span>
          <span className="absolute -bottom-2 left-0 right-0 h-3 bg-sky-100/50 -rotate-1 rounded-full blur-sm" />
        </span>{" "}
        With Ease
      </motion.h1>
      <motion.p 
        className="text-gray-600 text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Join Waitless - where students help each other secure their perfect class schedule. Simple, secure, and stress-free.
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="group flex items-center gap-3 text-gray-600 bg-gradient-to-br from-white to-sky-50/50 px-6 py-3 rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
          <span className="text-sky-500 p-2 bg-sky-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-5 h-5 stroke-[1.5]" />
          </span>
          <span className="font-medium">Secure Platform</span>
        </div>
        <div className="group flex items-center gap-3 text-gray-600 bg-gradient-to-br from-white to-sky-50/50 px-6 py-3 rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
          <span className="text-sky-500 p-2 bg-sky-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-5 h-5 stroke-[1.5]" />
          </span>
          <span className="font-medium">Quick & Easy</span>
        </div>
        <div className="group flex items-center gap-3 text-gray-600 bg-gradient-to-br from-white to-sky-50/50 px-6 py-3 rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
          <span className="text-sky-500 p-2 bg-sky-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Clock className="w-5 h-5 stroke-[1.5]" />
          </span>
          <span className="font-medium">Fast Results</span>
        </div>
      </motion.div>
    </motion.div>
  );
} 