'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, FileText, UserCheck, CreditCard, Database, XCircle, Copyright, ShieldAlert, AlertTriangle, Scale, ExternalLink, Globe, RefreshCw, MapPin } from 'lucide-react';
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

const TermsOfService: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: number | null }>({});

  const sections: Section[] = [
    {
      id: 'about-us',
      icon: FileText,
      title: '1. About Us',
      faqs: [
        {
          question: 'What is Party Ghana?',
          answer: "Party Ghana is an event gift management company that helps clients plan, customize, and deliver gifts for their guests. We offer a range of services including curated gifting, fulfillment, personalization, and delivery management."
        }
      ]
    },
    {
      id: 'eligibility',
      icon: UserCheck,
      title: '2. Eligibility',
      faqs: [
        {
          question: 'Who can use Party Ghana services?',
          answer: "By using our services, you represent that:\n• You are at least 18 years old or have legal capacity to enter into a binding agreement.\n• You will use the site and services only for lawful purposes.\n• Any information you provide is accurate and complete."
        }
      ]
    },
    {
      id: 'orders-payments',
      icon: CreditCard,
      title: '3. Orders and Payments',
      faqs: [
        {
          question: 'What are your payment and order policies?',
          answer: "• All orders are subject to acceptance and availability.\n• Prices are listed in Ghana cedi/US Dollar (where necessary) and are subject to change without notice.\n• We reserve the right to refuse or cancel any order at our discretion.\n• Payments are processed through secure third-party payment processors, cheques and direct bank transfers. We do not store your full payment details."
        }
      ]
    },
    {
      id: 'event-data',
      icon: Database,
      title: '4. Event and Guest Data',
      faqs: [
        {
          question: 'How do you handle my event data?',
          answer: "You may be asked to provide event-specific information (e.g., guest lists, preferences, delivery addresses). You are responsible for ensuring the accuracy of this data. We use this information only to fulfill your order and enhance the guest experience."
        }
      ]
    },
    {
      id: 'cancellations',
      icon: XCircle,
      title: '5. Cancellations and Refunds',
      faqs: [
        {
          question: 'What is your cancellation and refund policy?',
          answer: "Our cancellation and refund policy is as follows:\n\n• Custom or personalized items: Non-refundable once production has started.\n• Standard items: May be canceled within 24 hours of order confirmation.\n• Delivery errors or damaged items: Contact us within 7 days for replacement or refund eligibility."
        }
      ]
    },
    {
      id: 'intellectual-property',
      icon: Copyright,
      title: '6. Intellectual Property',
      faqs: [
        {
          question: 'Who owns the content on your website?',
          answer: "All content on our website — including text, logos, graphics, images, and software — is the property of Party Ghana or our licensors and is protected by copyright and trademark laws.\n\nYou may not use, reproduce, modify, or distribute our content without our written permission."
        }
      ]
    },
    {
      id: 'user-conduct',
      icon: ShieldAlert,
      title: '7. User Conduct',
      faqs: [
        {
          question: 'What behaviors are prohibited?',
          answer: "You agree not to:\n• Use the website for any illegal or unauthorized purpose\n• Interfere with or disrupt the functionality of our services\n• Transmit any malware, viruses, or harmful code\n• Attempt to gain unauthorized access to our systems or data"
        }
      ]
    },
    {
      id: 'disclaimer',
      icon: AlertTriangle,
      title: '8. Disclaimer of Warranties',
      faqs: [
        {
          question: 'What warranties do you provide?',
          answer: 'Our services are provided "as is" and "as available." We do not guarantee that the site will be error-free or uninterrupted. We make no warranties, express or implied, regarding the accuracy, reliability, or suitability of our services.'
        }
      ]
    },
    {
      id: 'liability',
      icon: Scale,
      title: '9. Limitation of Liability',
      faqs: [
        {
          question: 'What are the limits of your liability?',
          answer: "To the maximum extent permitted by law, Party Ghana shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, or data, arising from your use of or inability to use our services."
        }
      ]
    },
    {
      id: 'indemnification',
      icon: ShieldAlert,
      title: '10. Indemnification',
      faqs: [
        {
          question: 'What are my indemnification obligations?',
          answer: "You agree to indemnify, defend, and hold harmless Party Ghana, its directors, employees, and partners from any claims, liabilities, damages, and expenses arising out of your use of the services or violation of these Terms."
        }
      ]
    },
    {
      id: 'third-party',
      icon: ExternalLink,
      title: '11. Third-Party Services',
      faqs: [
        {
          question: 'Do you use third-party services?',
          answer: "We may use third-party tools or services to help provide our offerings. Your use of those services may be subject to their separate terms and privacy policies."
        }
      ]
    },
    {
      id: 'governing-law',
      icon: Globe,
      title: '12. Governing Law',
      faqs: [
        {
          question: 'What laws govern these terms?',
          answer: "These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law principles."
        }
      ]
    },
    {
      id: 'changes',
      icon: RefreshCw,
      title: '13. Changes to Terms',
      faqs: [
        {
          question: 'Can these terms change?',
          answer: "We reserve the right to update these Terms at any time. Changes will be effective upon posting. Continued use of the site after changes are posted constitutes your acceptance of the revised Terms."
        }
      ]
    },
    {
      id: 'contact',
      icon: MapPin,
      title: '14. Contact Us',
      faqs: [
        {
          question: 'How can I contact you about these terms?',
          answer: "If you have any questions about these Terms, you can reach us at:\n\nParty Ghana\nAccra, Ghana\nHellopartyghana@gmail.com"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
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
            <FileText className="w-20 h-20 text-slate-700" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Terms of Service
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to <strong>Party Ghana</strong>! These Terms of Service ("Terms") govern your use of our website, services, and products. By accessing or using our website or services, you agree to comply with and be bound by these Terms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-4 inline-block"
          >
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              If you do not agree, please do not use our site or services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Terms Sections */}
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
              <div className="bg-gradient-to-r from-slate-700 to-gray-800 p-6">
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
                      className="w-full py-4 flex items-center justify-between text-left hover:text-slate-700 transition-colors group"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-slate-700 pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openSections[section.id] === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-slate-700 flex-shrink-0" />
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
          className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <Scale className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Questions About These Terms?</h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            If you have any questions or concerns about our Terms of Service, please contact us:
          </p>
          <a 
            href="mailto:hellopartyghana@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
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

export default TermsOfService;