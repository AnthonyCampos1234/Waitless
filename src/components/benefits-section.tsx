'use client';

import { motion } from "framer-motion";
import { CheckCircle2, DollarSign, Clock, Shield, Users } from "lucide-react";

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
      className="py-20 sm:py-32 px-4 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-sky-50/50 pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Waitless?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Benefits for everyone in the community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "For Students Seeking Classes",
              description: "Get the classes you need without the stress",
              points: [
                {
                  icon: Shield,
                  text: "Secure and reliable registration assistance",
                },
                {
                  icon: Clock,
                  text: "Save time and reduce registration stress",
                },
                {
                  icon: DollarSign,
                  text: "Flexible and transparent payment options",
                },
                {
                  icon: CheckCircle2,
                  text: "Higher chance of getting desired classes",
                },
              ],
              gradient: "from-sky-500 to-blue-500",
            },
            {
              title: "For Students Helping Others",
              description: "Turn your early registration time into an opportunity",
              points: [
                {
                  icon: DollarSign,
                  text: "Earn money helping fellow students",
                },
                {
                  icon: Clock,
                  text: "Flexible schedule on your terms",
                },
                {
                  icon: Users,
                  text: "Build your campus network",
                },
                {
                  icon: Shield,
                  text: "Safe and secure platform",
                },
              ],
              gradient: "from-blue-500 to-indigo-500",
            },
          ].map((benefit, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-xl border border-sky-100/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-100/50"
              variants={itemVariants}
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>

              <div className="space-y-6">
                {benefit.points.map((point, pointIndex) => (
                  <div 
                    key={pointIndex} 
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="p-2 bg-sky-50 rounded-xl group-hover/item:scale-110 transition-transform duration-300">
                        <point.icon className="w-5 h-5 text-sky-500 stroke-[1.5]" />
                      </div>
                    </div>
                    <span className="text-gray-600 text-lg group-hover/item:text-gray-800 transition-colors duration-300">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 