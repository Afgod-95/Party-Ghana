import React from 'react'
import { motion } from 'framer-motion'
import { Gift, Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 text-white py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">PartyGhana.Com</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Ghana&apos;s premier gift management platform. Making celebrations memorable and stress-free.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: 'Services',
                links: [
                  { label: 'Event planning and management', href: '/packages' },
                  { label: 'Honeymoon Planning', href: '/packages' },
                  { label: 'Local Tours Planning', href: '/packages' },
                  { label: 'Baby Naming Planning', href: '/packages'  },
                  { label: 'Birthday Celebrations', href: '/packages'  },
                  { label: 'Home of Experienced vendors', href: null }
                ]
              },
              {
                title: 'Company',
                links: [
                  { label: 'About Us', href: '/about' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact-us' }]
              },
              {
                title: 'Support',
                links: [
                  { label: 'Help Center', href: '/help' },
                  { label: 'Safety', href: '/safety' },
                  { label: 'Community Guidelines', href: '/community-guidelines' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' }
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {typeof link.href === 'string' ? (
                        <Link
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-all duration-200"
                        >
                          <motion.p whileHover={{ x: 5 }}>{link.label}</motion.p>
                        </Link>
                      ) : (
                        <span className="text-slate-400">{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-t border-slate-800 pt-8 text-center"
          >
            <p className="text-slate-400">
              © {new Date().getFullYear()} Party Ghana. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer