import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Gift, Hourglass, BadgePercent, Monitor, Users2, Handshake } from 'lucide-react'
import BookUsModal from '../BookUsModal';

const Features = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const handleBookApoointment = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Why Choose PartyGhana.Com?
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Clock,
                    title: '24/7 Support',
                    description: 'Our dedicated support team is available around the clock to help with your events.'
                  },
                  {
                    icon: Hourglass,
                    title: 'Time Saving',
                    description: 'We save your attendees the hustle of getting you gifts themselves.'
                  },
                  {
                    icon: BadgePercent,
                    title: 'Enjoy Discounts',
                    description: 'We give you 10% to 20% discount off on gifts items purchased from our partner shops.'
                  },
                  {
                    icon: Monitor,
                    title: 'Free Web Page',
                    description: 'We design Free event invite and web page for you.'
                  },
                  {
                    icon: Users2,
                    title: 'Access to Influencers',
                    description: 'You have access to partner surprise influencers'
                  },
                  {
                    icon: Handshake,
                    title: 'Access to Vendors',
                    description: 'WWe have a wide range of event vendors and suppliers including photographers, videographers, sound, decorators, and more.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
              >
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Gift className="w-16 h-16 mx-auto mb-6 opacity-80" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Book Us Now?</h3>
                  <p className="mb-6 opacity-90">Join thousands of satisfied users who trust PartyGhana.Com for their special events.</p>
                  <motion.button
                    onClick={handleBookApoointment}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Create Your First Event
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <BookUsModal isOpen = {isModalOpen} onClose={() => setIsModalOpen(false)}/>
    
    </>
  )
}

export default Features