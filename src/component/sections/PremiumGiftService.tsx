import { motion } from 'framer-motion';
import { Calendar, Share2, Bell, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function PremiumGiftService() {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      icon: Calendar,
      title: 'Create Your Event',
      description: 'We create a custom event page packed with all the details, your gift wish list, and your own unique branding—everything in one stylish spot!',
      gradientClasses: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      icon: Share2,
      title: 'Share with Guests',
      description: 'Ping it on WhatsApp, drop it in an email, or post it like a pro—your custom event link is ready to share anywhere!',
      gradientClasses: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      icon: Bell,
      title: 'Set Reminders',
      description: 'No need to chase—our friendly reminders make sure your guests are in the loop before the party starts!',
      gradientClasses: 'bg-gradient-to-br from-orange-400 to-orange-600'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-white"
      id="premium-gift-service"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gift Management System Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Gift Management System</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Book us in minutes and let our super-simple, time-saving gift management system do the heavy lifting!
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            See {isExpanded ? 'Less' : 'More'}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>

        {/* How It Works - Expandable Section */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-12">How It Works</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isExpanded ? 1 : 0, 
                  y: isExpanded ? 0 : 50 
                }}
                transition={{ delay: isExpanded ? index * 0.2 : 0, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-2xl ${step.gradientClasses} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-sm font-bold text-slate-700">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform translate-x-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personalised Gift Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <h2 className="text-4xl md:text-2xl font-bold text-slate-900 mb-6">Personalised Gift Service</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Make every occasion unforgettable with our personalized gift service. Whether you're celebrating a birthday, anniversary, corporate milestone, or simply want to show appreciation, we curate thoughtful, beautifully packaged gifts tailored to your needs. From handpicked products to custom wrapping and delivery, we take care of every detail — so you don't have to.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With options for every style, budget, and sentiment, our service ensures your gift feels as special as the person receiving it.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-full min-h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-8xl mb-4"
                    >
                      🎁
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2">Premium Gifts</h3>
                    <p className="text-lg opacity-90">Curated with Love</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10 text-6xl opacity-20"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 left-10 text-6xl opacity-20"
                >
                  🎀
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}