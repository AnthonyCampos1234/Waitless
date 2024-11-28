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
      className="py-20 sm:py-32 px-4 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-white/50 pointer-events-none" />
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Three simple steps to secure your classes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Connect",
              description: "Find students with earlier registration times who can help secure your desired classes.",
              Icon: Users,
              gradient: "from-sky-500 to-blue-500",
            },
            {
              title: "Coordinate",
              description: "Easily communicate and arrange class registration assistance through our secure platform.",
              Icon: CalendarCheck,
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: "Succeed",
              description: "Get into the classes you need while helping fellow students do the same.",
              Icon: Target,
              gradient: "from-indigo-500 to-sky-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/80 backdrop-blur-xl border border-sky-100/50 rounded-2xl p-6 md:p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-100/50"
            >
              {/* Icon container */}
              <div className="relative mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-sky-100/50 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative h-full flex items-center justify-center">
                  <feature.Icon className={`w-8 h-8 stroke-[1.5] text-sky-500`} />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 