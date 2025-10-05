import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Lock, Database, Share2, Clock, Shield, Cookie, UserCheck, ExternalLink, Baby, RefreshCw, MapPin } from 'lucide-react';
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

const PrivacyPolicy: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: number | null }>({});

  const sections: Section[] = [
    {
      id: 'information-collect',
      icon: Database,
      title: '1. Information We Collect',
      faqs: [
        {
          question: 'What personal information do you collect?',
          answer: "When you interact with us (e.g., filling out a form, placing an order, or creating an account), we may collect:\n• Full name\n• Email address\n• Phone number\n• Billing and shipping address\n• Event details (e.g., guest names, dates, preferences)\n• Payment information (processed securely through third-party providers)"
        },
        {
          question: 'What non-personal information do you collect?',
          answer: "We may collect non-identifiable data such as:\n• Browser type and version\n• Device type\n• IP address\n• Pages visited and time spent on the website\n• Cookies and usage data"
        }
      ]
    },
    {
      id: 'how-we-use',
      icon: UserCheck,
      title: '2. How We Use Your Information',
      faqs: [
        {
          question: 'How do you use my information?',
          answer: "We use the information we collect to:\n• Provide and manage our event gift services\n• Communicate with you about orders, inquiries, and updates\n• Personalize the experience for your guests and event\n• Improve our website and services\n• Ensure security and prevent fraud\n• Comply with legal obligations"
        }
      ]
    },
    {
      id: 'sharing-info',
      icon: Share2,
      title: '3. Sharing Your Information',
      faqs: [
        {
          question: 'Do you sell my personal information?',
          answer: "We do NOT sell your personal information. We may share your information with:\n\n• Service Providers: Third-party vendors (e.g., payment processors, delivery services) to fulfill orders and provide our services.\n• Legal Requirements: When required by law or in response to valid legal processes.\n• Business Transfers: In the event of a merger, sale, or acquisition."
        }
      ]
    },
    {
      id: 'data-retention',
      icon: Clock,
      title: '4. Data Retention',
      faqs: [
        {
          question: 'How long do you keep my data?',
          answer: "We retain your information only as long as necessary for the purposes described in this policy or as required by law. You may request deletion of your personal information at any time (see Section 7)."
        }
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: '5. Security',
      faqs: [
        {
          question: 'How do you protect my data?',
          answer: "We use appropriate technical and organizational measures to protect your data, including encryption, access controls, and secure servers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        }
      ]
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: '6. Cookies and Tracking Technologies',
      faqs: [
        {
          question: 'How do you use cookies?',
          answer: "We use cookies and similar technologies to:\n• Improve website functionality\n• Analyze user behavior\n• Remember user preferences\n\nYou can manage cookie settings in your browser. Disabling cookies may limit certain features of our site."
        }
      ]
    },
    {
      id: 'your-rights',
      icon: UserCheck,
      title: '7. Your Rights and Choices',
      faqs: [
        {
          question: 'What rights do I have regarding my data?',
          answer: "Depending on your location, you may have the following rights:\n• Access the personal information we hold about you\n• Correct inaccuracies in your data\n• Request deletion of your data\n• Object to or restrict certain data processing\n• Withdraw consent where processing is based on consent\n\nTo exercise any of these rights, please contact us at: hellopartyghana@gmail.com"
        }
      ]
    },
    {
      id: 'third-party-links',
      icon: ExternalLink,
      title: '8. Third-Party Links',
      faqs: [
        {
          question: 'Are you responsible for third-party websites?',
          answer: "Our website may contain links to other sites not operated by us. We are not responsible for the privacy practices of such third parties."
        }
      ]
    },
    {
      id: 'children-privacy',
      icon: Baby,
      title: '9. Children\'s Privacy',
      faqs: [
        {
          question: 'Do you collect information from children?',
          answer: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children."
        }
      ]
    },
    {
      id: 'policy-changes',
      icon: RefreshCw,
      title: '10. Changes to This Policy',
      faqs: [
        {
          question: 'Can this privacy policy change?',
          answer: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with the "Last Updated" date revised. Continued use of the site after such changes constitutes acceptance.'
        }
      ]
    },
    {
      id: 'contact-us',
      icon: MapPin,
      title: '11. Contact Us',
      faqs: [
        {
          question: 'How can I contact you about privacy concerns?',
          answer: "If you have any questions or concerns about this Privacy Policy or our practices, you can contact us at:\n\nParty Ghana\nAccra, Ghana\nHellopartyghana@gmail.com"
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
            <Lock className="w-20 h-20 text-indigo-600" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Privacy Policy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            <strong>Party Ghana</strong> respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our event gift management services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-4 inline-block"
          >
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Please read this policy carefully. If you do not agree with the terms, please do not access the site or use our services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Privacy Sections */}
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
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
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
                      className="w-full py-4 flex items-center justify-between text-left hover:text-indigo-600 transition-colors group"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-indigo-600 pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openSections[section.id] === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0" />
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
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <Lock className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Your Privacy Matters to Us</h3>
          <p className="text-indigo-100 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us:
          </p>
          <a 
            href="mailto:hellopartyghana@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
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

export default PrivacyPolicy;