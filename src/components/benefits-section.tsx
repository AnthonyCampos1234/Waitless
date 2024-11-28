'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function BenefitsSection() {
  return (
    <motion.section 
      className="py-32 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16"
          variants={itemVariants}
        >
          Why Choose Waitless?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "For Students Seeking Classes",
              points: [
                "Higher chance of getting desired classes",
                "Reduce stress during registration",
                "Flexible payment options",
                "Secure and reliable platform",
              ],
              gradient: "from-sky-500 to-blue-500",
            },
            {
              title: "For Students Helping Others",
              points: [
                "Earn money helping fellow students",
                "Flexible schedule",
                "Build your network",
                "Make a difference in your community",
              ],
              gradient: "from-blue-500 to-indigo-500",
            },
          ].map((benefit, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-sky-50/50 backdrop-blur-xl border border-white/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]"
              variants={itemVariants}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />

              <h3 className="text-2xl font-semibold text-gray-800 mb-8 bg-gradient-to-br bg-clip-text text-transparent relative">
                <span className={`bg-gradient-to-r ${benefit.gradient}`}>
                  {benefit.title}
                </span>
                <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-50" />
              </h3>

              <ul className="space-y-6">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-4 group/item">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-20 rounded-full blur group-hover/item:opacity-100 transition-opacity duration-300`} />
                      <CheckCircle2 className={`w-6 h-6 bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent stroke-[1.5] relative z-10`} />
                    </div>
                    <span className="text-gray-600 text-lg group-hover/item:text-gray-800 transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 