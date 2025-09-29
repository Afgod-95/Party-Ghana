import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 24 123 4567',
      subtitle: 'Mon-Fri, 8am-6pm'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@partygiftgh.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Accra, Ghana',
      subtitle: 'Greater Accra Region'
    }
  ]

  const inputBaseClasses = "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-500 text-slate-900 bg-white"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    }, 5000)
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.message.trim()

  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to create an unforgettable experience? Let's discuss your event vision 
              and how we can bring it to life with precision and creativity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Contact Information
                </h3>
                <p className="text-slate-600 mb-8">
                  We're here to help you plan the perfect event. Reach out to us through 
                  any of the following channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <p className="text-slate-800 text-lg font-medium">{item.value}</p>
                      <p className="text-slate-500 text-sm">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                <p className="text-blue-800 text-sm">
                  We typically respond to all inquiries within 2-4 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-center text-slate-900 mb-2">
                        Send us a Message
                      </h3>
                      <p className="text-slate-600 text-center">
                        Complete the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className={inputBaseClasses}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className={inputBaseClasses}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className={inputBaseClasses}
                            placeholder="+233 24 123 4567"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className={inputBaseClasses}
                            placeholder="Optional"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          required
                          className={`${inputBaseClasses} resize-none`}
                          placeholder="Please describe your event vision, specific requirements, theme preferences, and any special considerations..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                        whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                        disabled={!isFormValid || isSubmitting}
                        type="submit"
                        className={`w-full py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center space-x-2 ${
                          isFormValid && !isSubmitting
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-slate-500 text-sm">
                        * Required fields. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  /* Success Message */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: 0.2 
                      }}
                      className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-slate-600 mb-6"
                    >
                      Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                    >
                      <p className="text-sm text-blue-800">
                        <strong>What's next?</strong> Our team will review your inquiry and contact you to discuss your event in detail.
                      </p>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm text-slate-500 mt-6"
                    >
                      This message will disappear in a few seconds...
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs