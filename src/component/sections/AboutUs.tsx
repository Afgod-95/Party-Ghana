import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Gift, Users, Award } from 'lucide-react'

const AboutUs = () => {
  const stats = [
    { number: "2,500+", label: "Events Executed", icon: Calendar },
    { number: "15,000+", label: "Clients Served", icon: Users },
    { number: "98%", label: "Satisfaction Rate", icon: Award },
    { number: "5+", label: "Years Excellence", icon: Gift }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white" id="about-us">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-slate-600 uppercase tracking-wider text-sm font-medium mb-4">
            <div className="w-12 h-px bg-slate-300"></div>
            About Us
            <div className="w-12 h-px bg-slate-300"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Crafting Unforgettable Experiences
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With over five years of excellence in event management and gifting solutions, 
            we bring precision and passion to every celebration.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Our Story
                </h3>
                
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    Founded on the principle that every celebration deserves perfection, 
                    <strong className="text-slate-900"> Party Ghana</strong> has been at the forefront 
                    of event management and gifting solutions since 2018. Our journey began with 
                    a simple mission: to transform ordinary moments into extraordinary memories.
                  </p>

                  <p>
                    We specialize in creating bespoke experiences that reflect your unique vision. 
                    From intimate gatherings to large-scale corporate events, our team of seasoned 
                    professionals ensures every detail is meticulously planned and executed.
                  </p>

                  <p>
                    What sets us apart is our commitment to understanding your story. We believe 
                    that successful events are built on collaboration, attention to detail, and 
                    a deep understanding of our clients' aspirations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-2xl/10 border border-slate-100 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</p>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-2xl p-12 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 max-w-4xl mx-auto">
              "Our philosophy is simple: exceptional service, meticulous planning, and 
              unforgettable experiences. We don't just plan events—we create memories 
              that last a lifetime."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-left">
                <p className="text-white font-semibold">Sarah Mensah</p>
                <p className="text-slate-400 text-sm">Founder & CEO</p>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Start Planning Your Event
            </button>
            <p className="text-slate-600 text-sm mt-4">
              Let's discuss your vision and bring it to life
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs