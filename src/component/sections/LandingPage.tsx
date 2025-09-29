import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from './Services'
import BackgroundImage from '@/assets/background.png'
import { Sparkles, Gift, ArrowRight } from 'lucide-react'

const LandingPage = () => {
  return (
   <section
          className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-t"
          id="home"
          style={{
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 bg-blue-50/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ghana&apos;s Premier Gift Management Platform</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-8"
              >
                Transform Your
                <span className="block text-white">
                  Gift-Giving Experience
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Streamline gift management for birthdays, weddings, and special occasions.
                Create beautiful gift registries, track contributions, and ensure every celebration is memorable.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center space-x-3"
                >
                  <Gift className="w-5 h-5" />
                  <span>Start Managing Gifts</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
              >
                {[
                  { number: 5, suffix: 'k+', label: 'Events Managed', color: 'blue' },
                  { number: 50, suffix: 'k+', label: 'Gifts Tracked', color: 'purple' },
                  { number: 98, suffix: '%', label: 'Satisfaction Rate', color: 'pink' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold text-${stat.color}-400`}>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.2, duration: 1 }}
                      >
                        {stat.number}{stat.suffix}
                      </motion.span>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
  )
}

export default LandingPage