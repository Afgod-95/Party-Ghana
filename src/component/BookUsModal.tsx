import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, MessageCircle, Calendar, Users, ChevronDown } from 'lucide-react';

interface BookUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  //email: string;
  phone: string;
  //eventType: string;
  //eventDate: string;
  //guestCount: string;
  message: string;
}

const BookUsModal: React.FC<BookUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    //email: '',
    phone: '',
    //eventType: '',
    //eventDate: '',
    //guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isEventTypeOpen, setIsEventTypeOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEventTypeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventTypeSelect = (type: string) => {
    setFormData(prev => ({
      ...prev,
      eventType: type
    }));
    setIsEventTypeOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: '', 
        //email: '', 
        phone: '', 
        //eventType: '', 
        //eventDate: '', 
        //guestCount: '', 
        message: '' 
      });
      onClose();
    }, 3000);
  };

  //const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.eventType.trim() && formData.eventDate.trim() && formData.message.trim();
  const isFormValid = formData.name.trim() && formData.phone.trim() && formData.message.trim();
  const inputBaseClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-500 text-slate-900 bg-white";
  
  const eventTypes = [
    'Wedding',
    'Birthday Party',
    'Corporate Event',
    'Anniversary',
    'Baby Shower',
    'Graduation',
    'Other'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4"
            onClick={onClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="relative w-full h-full sm:h-auto sm:max-w-2xl sm:mx-auto flex items-stretch sm:items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="bg-white w-full h-full sm:h-auto sm:rounded-2xl shadow-2xl border-0 sm:border sm:border-slate-200 overflow-hidden flex flex-col sm:max-h-[90vh]">
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg border border-slate-200"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </motion.button>

                {!isSubmitted ? (
                  <>
                    {/* Fixed Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-6 sm:p-8 text-white flex-shrink-0">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-2"
                      >
                        Book Our Services
                      </motion.h2>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-blue-100 text-center text-xs sm:text-sm lg:text-base"
                      >
                        Complete the form below and we'll get back to you within 24 hours
                      </motion.p>
                    </div>

                    {/* Scrollable Form Content */}
                    <div className="flex-1 overflow-y-auto overscroll-contain">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-4 sm:p-6 lg:p-8"
                      >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                          
                          {/* Personal Information */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className={`${inputBaseClasses} pl-9 sm:pl-10`}
                                  placeholder="Enter your name"
                                  required
                                />
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                Mobile Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className={`${inputBaseClasses} pl-9 sm:pl-10`}
                                  placeholder="+233 24 123 4567"
                                  required
                                />
                              </div>
                            </div>
                            
                            {/**EMAIL FIELD
                             * 
                             * 
                              <div className="flex flex-col">
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                  Email Address *
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className={inputBaseClasses}
                                  placeholder="your.email@example.com"
                                  required
                                />
                              </div>
                             * 
                             */}
                            
                          </div>

                          {/* Contact Details 
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                Mobile Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className={`${inputBaseClasses} pl-9 sm:pl-10`}
                                  placeholder="+233 24 123 4567"
                                  required
                                />
                              </div>
                            </div>

                            {/* Event Type Dropdown 
                              <div className="flex flex-col relative" ref={dropdownRef}>
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                  Event Type *
                                </label>
                                <div className="relative">
                                  <button
                                    type="button"
                                    onClick={() => setIsEventTypeOpen(!isEventTypeOpen)}
                                    className={`${inputBaseClasses} text-left flex items-center justify-between ${
                                      !formData.eventType ? 'text-slate-500' : 'text-slate-900'
                                    }`}
                                  >
                                    <span className="truncate">{formData.eventType || 'Select event type'}</span>
                                    <motion.div
                                      animate={{ rotate: isEventTypeOpen ? 180 : 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                    </motion.div>
                                  </button>
                                  
                                  <AnimatePresence>
                                    {isEventTypeOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-20 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                                      >
                                        {eventTypes.map((type) => (
                                          <button
                                            key={type}
                                            type="button"
                                            onClick={() => handleEventTypeSelect(type)}
                                            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm sm:text-base hover:bg-slate-50 transition-colors ${
                                              formData.eventType === type 
                                                ? 'bg-blue-50 text-blue-600 font-medium' 
                                                : 'text-slate-700'
                                            }`}
                                          >
                                            {type}
                                          </button>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </div>
                            
                          </div>
                          */}
                         

                          {/* Event Details 
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                              <div className="flex flex-col">
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                  Event Date *
                                </label>
                                <div className="relative">
                                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                  <input
                                    type="date"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleInputChange}
                                    className={`${inputBaseClasses} pl-9 sm:pl-10`}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col">
                                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                                  Estimated Guests
                                </label>
                                <div className="relative">
                                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                  <input
                                    type="number"
                                    name="guestCount"
                                    value={formData.guestCount}
                                    onChange={handleInputChange}
                                    className={`${inputBaseClasses} pl-9 sm:pl-10`}
                                    placeholder="e.g., 50"
                                    min="1"
                                  />
                                </div>
                              </div>
                            </div>
                          */}

                          {/* Message */}
                          <div className="flex flex-col">
                            <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                              Event Details *
                            </label>
                            <div className="relative">
                              <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className={`${inputBaseClasses} pl-9 sm:pl-10 resize-none`}
                                placeholder="Describe your event vision and requirements..."
                                required
                              />
                            </div>
                          </div>

                          {/* Submit Button */}
                          <motion.button
                            whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                            whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                            disabled={!isFormValid || isSubmitting}
                            className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 ${
                              isFormValid
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <span>Submit Booking Request</span>
        
                              </>
                            )}
                          </motion.button>

                          <p className="text-center text-slate-500 text-xs sm:text-sm">
                            * Required fields
                          </p>
                        </form>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  // Success State
                  <div className="flex flex-col h-full min-h-[400px] sm:min-h-0">
                    <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                        >
                          <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                        </motion.div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Thank You!</h3>
                        <p className="text-sm sm:text-base text-slate-600 mb-2">Your booking request has been submitted.</p>
                        <p className="text-xs sm:text-sm text-slate-500">We'll contact you within 24 hours.</p>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookUsModal;