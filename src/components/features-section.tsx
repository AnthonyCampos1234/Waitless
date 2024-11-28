'use client';

import { motion } from "framer-motion";
import { Users, CalendarCheck, Target } from "lucide-react";

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

export function FeaturesSection() {
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
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Connect",
              description: "Find students who can help secure your desired classes.",
              Icon: Users,
              gradient: "from-sky-500 to-blue-500",
              border: "border-sky-100",
            },
            {
              title: "Coordinate",
              description: "Easily communicate and arrange class registration assistance.",
              Icon: CalendarCheck,
              gradient: "from-blue-500 to-indigo-500",
              border: "border-blue-100",
            },
            {
              title: "Succeed",
              description: "Get into the classes you need and help others do the same.",
              Icon: Target,
              gradient: "from-indigo-500 to-sky-500",
              border: "border-indigo-100",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white to-sky-50/50 backdrop-blur-xl border border-white/50 rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />
              
              {/* Icon container with gradient background */}
              <div className="relative mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br border border-white/20 backdrop-blur-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`} />
                <div className="relative h-full flex items-center justify-center">
                  <feature.Icon className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent stroke-[1.5]`} />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 