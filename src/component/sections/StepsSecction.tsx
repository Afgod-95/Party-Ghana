import { motion } from 'framer-motion';
import { Calendar, Share2, Bell } from 'lucide-react';

export default function StepsSection() {
  // Define complete color classes for each step
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
    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
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
  );
}