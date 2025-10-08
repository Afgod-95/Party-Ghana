'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Baby, Cake, Users, Gift, Music, Cloud, Flower2, Check, Sparkles, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

 {/*  interface PackageFeature {
  name: string;
  items: string[];
}
  */}

interface EventPackage {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const EventPackages: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<'basic' | 'standard' | 'premium'>('standard');

  const tiers = [
    {
      id: 'basic',
      name: 'Basic / Essentials',
      description: 'Venue + basic décor + food + sound system',
      price: 'Starting from GH₵',
    },
    {
      id: 'standard',
      name: 'Standard',
      description: 'Adds photography, better décor, entertainment, more food options',
      price: 'Mid-range',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium / Deluxe',
      description: 'All inclusive: high-end décor, full entertainment, extras (photo booth, fireworks, luxury touches)',
      price: 'Luxury Experience',
    },
  ];

  const packages: EventPackage[] = [
    {
      id: 'weddings',
      icon: Heart,
      title: 'Weddings',
      description: 'Make your special day unforgettable',
      features: [
        'Full wedding planning & coordination',
        'Venue + decorations + furniture (chairs, tables, tenting, lighting)',
        'Catering + drinks',
        'Music / DJ / live band',
        'Bridal services (makeup, hair)',
        'Photography/videography',
        'On-day coordination',
        'Additional extras: photo booth, fireworks, guest transport, lodging, honeymoon planning',
      ],
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 'naming',
      icon: Baby,
      title: 'Naming Ceremonies / Outdooring',
      description: 'Celebrate your new bundle of joy',
      features: [
        'Décor + venue (intimate settings)',
        'Catering (family style, kid-friendly)',
        'Music, cultural entertainment',
        'Photography',
        'Gifts / favors for guests',
        'Cake/treats station',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'birthdays',
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Fun celebrations for all ages',
      features: [
        "Kids' birthday themes (cartoons, superheroes, etc.)",
        'Venue + décor + entertainment (magician, face painting, bounce house, games)',
        'Catering & cake',
        'DJ/music',
        'Party favors / goodie bags',
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'reunions',
      icon: Users,
      title: 'Family Reunions / Fun Days',
      description: 'Bring loved ones together',
      features: [
        'Outdoor venue or garden / park setting',
        'Games and recreational activities for all ages',
        'Food & drinks (buffet, food stalls)',
        'Music & dance, cultural performances',
        'Logistics: chairs, tents, sound system, toilets, security',
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 'anniversaries',
      icon: Gift,
      title: 'Anniversaries / Renewal of Vows',
      description: 'Celebrate enduring love',
      features: [
        'Elegant/romantic décor, lighting, floral arrangements',
        'Special dinner menu',
        'Photography and video',
        'Entertainment (band, DJ, cultural dance)',
        'Toasts / speeches, event MC',
      ],
      color: 'red',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      id: 'graduations',
      icon: Sparkles,
      title: 'Graduations & Milestones',
      description: 'Honor achievements and new beginnings',
      features: [
        'Semi-formal décor and catering',
        'Music and entertainment',
        'Photography',
        'Cakes, gifts, guest list management',
        'Venue booking, seating, themed décor',
      ],
      color: 'amber',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'memorials',
      icon: Cloud,
      title: 'Funeral & Memorial Events',
      description: 'Respectful and dignified services',
      features: [
        'Venue + seating, respectful decorations',
        'Music / cultural rites',
        'Catering for after-service gathering',
        'Audio/visual support if needed',
        'Logistics (parking, ushers, accommodation)',
      ],
      color: 'slate',
      gradient: 'from-slate-600 to-gray-700',
    },
    {
      id: 'seasonal',
      icon: Flower2,
      title: 'Seasonal / Holiday Events',
      description: 'Christmas, Easter, and festive celebrations',
      features: [
        'Family fun days with festive décor',
        'Entertainment for kids (Santa, egg hunts, etc.)',
        'Food stalls, music & dance',
        'Group photo opportunities, gift exchanges',
        'Charity component options',
      ],
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                PartyGhana.Com
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Ghana's First & Most Trusted Gift Management Service
              </p>
            </div>
            <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200">
              Back to home
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Event Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Here are some event package ideas to get you started! We can customize or combine them to fit your vision.
          </motion.p>

          {/* Tier Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id as 'basic' | 'standard' | 'premium')}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto ${
                  selectedTier === tier.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:shadow-lg'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Popular
                  </span>
                )}
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                  <p className={`text-sm ${selectedTier === tier.id ? 'text-white/90' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 inline-block"
          >
            <p className="text-gray-800 text-sm sm:text-base">
              Have something specific in mind? <strong>Let us know</strong> and we'll create a tailored package just for you.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Grid */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white`}>
                <pkg.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-white/90">{pkg.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Package Includes:
                </h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.gradient} mt-2 flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 sm:p-12 text-center text-white">
          <Music className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Event?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your vision and get a customized package quote. We're here to make your celebration extraordinary!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hellopartyghana@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="tel:+233531014722"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PartyGhana.Com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EventPackages;