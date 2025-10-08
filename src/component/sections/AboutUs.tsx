
import React from 'react'
import { motion } from 'framer-motion'
import {  Gift,  Award } from 'lucide-react'
import Link from 'next/link';

const AboutUs = () => {
  const stats = [
    //{ number: "2,500+", label: "Events Executed", icon: Calendar },
    //{ number: "15,000+", label: "Clients Served", icon: Users },
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
            At Party Ghana, we believe every moment deserves to be memorable—and every gift should feel personal.
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
                    Party Ghana has been all about good vibes, great memories, and making every 
                    celebration a total vibe! We spice up everyday moments and 
                    remain your ultimate plug for unforgettable parties and awesome gifting.
                  </p>

                  <p>
                    We specialize in curating thoughtful, beautifully designed gifting experiences 
                    and seamless event solutions for individuals, families, associations, brands, and 
                    businesses. Whether you're planning a milestone celebration, a corporate retreat, 
                    or looking to elevate client appreciation through meaningful gifts and events, 
                    we’re here to make it effortless and unforgettable.
                  </p>

                  <p>
                    From concept to execution, we combine creativity, attention to detail, and exceptional 
                    service to bring your vision to life. 
                    Our curated gifts and event designs reflect your story, your style, and your purpose.
                    Because it’s not just about the event or the gift—it’s about the feeling it leaves behind.
                  </p>
                  <p>
                    Let’s create something unforgettable together.
                  </p>
                  <p>
                    Keep only the satisfaction rate and years of experience. Remove events executed and clients served. 
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
              "Our philosophy is simple: good vibes, smooth planning, and moments you’ll never forget. We don’t just 
              throw events—we help you make stories worth telling!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-left">
                <Link href = 'https://www.linkedin.com/in/prince-baah-duodu-pbd-4b407514/' target='blank'  className="text-white font-semibold hover:text-blue-300 transition-colors duration-300">Prince Baah-Duodu</Link>
                <p className="text-slate-400 text-sm">Founder & CEO</p>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
            </div>
          </motion.div>

          {/* CTA Section 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p> Start Planning Your Event</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Book Us Now
            </button>
            <p className="text-slate-600 text-sm mt-4">
              Let's discuss your vision and bring it to life
            </p>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs