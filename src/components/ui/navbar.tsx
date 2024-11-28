'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto">
        <div className="mx-4 my-4">
          <div className="rounded-full bg-white/70 backdrop-blur-xl border border-sky-100/50 shadow-lg shadow-sky-100/20">
            <div className="px-4 sm:px-8 h-16 flex items-center justify-between">
              {/* Logo/Brand */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 text-transparent bg-clip-text">
                  Waitless
                </span>
              </Link>

              {/* Navigation Links - Center */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#features" 
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  Features
                </Link>
                <Link 
                  href="#benefits" 
                  className="text-gray-600 hover:text-sky-500 transition-colors"
                >
                  Benefits
                </Link>
              </nav>

              {/* CTA Button - Right */}
              <div>
                <Button 
                  className="bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:opacity-90 transition-all duration-200"
                  onClick={() => {
                    document.getElementById('interest-form')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                >
                  Get Ready
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 