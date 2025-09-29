// app/not-found.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Gift Box */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gift Box Base */}
                <motion.rect
                  x="40"
                  y="80"
                  width="120"
                  height="100"
                  rx="8"
                  fill="#8B5CF6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                />
                
                {/* Ribbon Vertical */}
                <motion.rect
                  x="90"
                  y="80"
                  width="20"
                  height="100"
                  fill="#EC4899"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ originY: 0.5 }}
                />
                
                {/* Ribbon Horizontal */}
                <motion.rect
                  x="40"
                  y="120"
                  width="120"
                  height="20"
                  fill="#EC4899"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ originX: 0.5 }}
                />
                
                {/* Bow */}
                <motion.circle
                  cx="100"
                  cy="80"
                  r="15"
                  fill="#F43F5E"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                />
                <motion.ellipse
                  cx="80"
                  cy="75"
                  rx="18"
                  ry="12"
                  fill="#F43F5E"
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                />
                <motion.ellipse
                  cx="120"
                  cy="75"
                  rx="18"
                  ry="12"
                  fill="#F43F5E"
                  initial={{ scale: 0, x: -20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-8xl font-bold text-purple-600 mb-4">404</h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! It seems you have accessed the wrong page.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
            >
              Return Home
            </motion.button>
          </Link>
          
          <Link href="/gifts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Browse Gifts
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-sm text-gray-500"
        >
          <p>Lost? Our gift experts are here to help!</p>
        </motion.div>
      </div>

      {/* Floating Confetti */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: Math.random() * 360
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: Math.random() * 360 + 360
          }}
          transition={{
            duration: Math.random() * 3 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#8B5CF6', '#EC4899', '#F43F5E', '#3B82F6'][Math.floor(Math.random() * 4)],
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
}