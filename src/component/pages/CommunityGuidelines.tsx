import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Users, Heart, MessageSquare, Shield, Eye, AlertTriangle, Gavel, Star } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  faqs: FAQItem[];
}

const CommunityGuidelines: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: number | null }>({});

  const sections: Section[] = [
    {
      id: 'be-respectful',
      icon: Heart,
      title: '1. Be Respectful',
      faqs: [
        {
          question: 'What does respectful behavior look like?',
          answer: "Treat everyone with kindness, professionalism, and respect — whether they're customers, staff, or other community members. Harassment, hate speech, bullying, or discrimination of any kind will not be tolerated."
        }
      ]
    },
    {
      id: 'stay-relevant',
      icon: MessageSquare,
      title: '2. Stay Relevant',
      faqs: [
        {
          question: 'What topics should I discuss?',
          answer: "We're all here to talk about gifting, events, creativity, and meaningful experiences. Please keep discussions relevant to the platform's purpose.\n\nExamples of acceptable content:\n• Event planning ideas\n• Gift customization suggestions\n• Product feedback or reviews\n• Questions or tips for others using our services"
        }
      ]
    },
    {
      id: 'no-spam',
      icon: AlertTriangle,
      title: '3. No Spam or Self-Promotion',
      faqs: [
        {
          question: 'What promotional activities are not allowed?',
          answer: "Don't post repetitive content, advertisements, or links promoting your own business, unless explicitly invited or approved by our team.\n\nProhibited:\n• Unsolicited commercial offers\n• Affiliate links\n• Mass posting or fake engagement"
        }
      ]
    },
    {
      id: 'protect-privacy',
      icon: Shield,
      title: '4. Protect Privacy — Yours and Others\'',
      faqs: [
        {
          question: 'What information should I not share publicly?',
          answer: "Do not share personal information (like email addresses, phone numbers, or home addresses) — whether your own or someone else's — in public areas of the site. We take privacy seriously, and we expect the same from our community."
        }
      ]
    },
    {
      id: 'honest-feedback',
      icon: Star,
      title: '5. Share Authentic, Honest Feedback',
      faqs: [
        {
          question: 'How should I share my feedback?',
          answer: "We welcome your reviews and suggestions, but please be honest, constructive, and fact-based. If you had a negative experience, we want to hear about it — just express it respectfully and give us a chance to improve."
        }
      ]
    },
    {
      id: 'no-harmful-content',
      icon: AlertTriangle,
      title: '6. No Harmful or Illegal Content',
      faqs: [
        {
          question: 'What content is prohibited?',
          answer: "Any content that contains threats, violence, illegal activity, or materials that are abusive, defamatory, or sexually explicit will be removed and may result in account suspension or reporting to authorities."
        }
      ]
    },
    {
      id: 'intellectual-property',
      icon: Shield,
      title: '7. Respect Intellectual Property',
      faqs: [
        {
          question: 'What can I share?',
          answer: "Only share content you own or have permission to share. This includes images, designs, and written posts. Don't copy others' content or claim it as your own."
        }
      ]
    },
    {
      id: 'reporting',
      icon: Eye,
      title: '8. Reporting Violations',
      faqs: [
        {
          question: 'How do I report a violation?',
          answer: "If you see something that violates these guidelines or makes you feel unsafe, please let us know at hellopartyghana@gmail.com. All reports are confidential, and we take them seriously."
        }
      ]
    },
    {
      id: 'moderation',
      icon: Gavel,
      title: '9. Our Right to Moderate',
      faqs: [
        {
          question: 'What are your moderation rights?',
          answer: "We reserve the right to moderate, edit, or remove any content that violates these guidelines — and to suspend or terminate accounts for repeated or serious violations.\n\nWe also reserve the right to update these guidelines as our community evolves."
        }
      ]
    },
    {
      id: 'build-community',
      icon: Users,
      title: '10. Let\'s Build a Thoughtful Community',
      faqs: [
        {
          question: 'What is our community goal?',
          answer: "Our goal is to make the gifting experience meaningful — not just through great products, but through great people. Help us make this a place where creativity, kindness, and celebration thrive."
        }
      ]
    }
  ];

  const toggleFAQ = (sectionId: string, index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === index ? null : index
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
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
            <Link href="/" className="bg-gradient-to-r text-center justify-center from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
              Back to website
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <Users className="w-20 h-20 text-teal-600" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Community Guidelines
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to the <strong>Party Ghana</strong> community! Whether you're a client, a guest, or simply here to explore, we're excited to have you as part of our gifting experience. To ensure this space remains positive, helpful, and respectful, we've created the following guidelines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl p-4 inline-block"
          >
            <p className="text-gray-800 text-sm sm:text-base">
              By using any interactive features on our website (comments, reviews, user submissions, shared gift ideas, etc.), you agree to abide by these Community Guidelines.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Guidelines Sections */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        {sections.map((section) => (
          <motion.section
            key={section.id}
            variants={itemVariants}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6">
                <div className="flex items-center gap-3 text-white">
                  <section.icon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold">{section.title}</h3>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                {section.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFAQ(section.id, index)}
                      className="w-full py-4 flex items-center justify-between text-left hover:text-teal-600 transition-colors group"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-teal-600 pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openSections[section.id] === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openSections[section.id] === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 text-gray-700 whitespace-pre-line text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Thank You for Being Part of Our Community!</h3>
          <p className="text-teal-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            If you have questions about these guidelines, please reach out to us:
          </p>
          <a 
            href="mailto:hellopartyghana@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            hellopartyghana@gmail.com
          </a>
        </motion.section>
      </motion.main>

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

export default CommunityGuidelines;