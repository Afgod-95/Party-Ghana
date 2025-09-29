import React from 'react'
import { motion } from 'framer-motion'

export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Services = () => {
    const services = [
        {
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Smart Gift Registry',
            description: 'Create intelligent gift lists with priority levels, price ranges, and automatic duplicate prevention.',
            category: 'Gift Services'
        },
        {
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Guest Management',
            description: 'Organize guest lists, manage invitations, and track attendance with advanced filtering.',
            category: 'Planning Tools'
        },
        {
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'RSVP Tracking',
            description: 'Real-time RSVP monitoring with automated reminders and response analytics.',
            category: 'Guest Coordination'
        },
        {
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Event Scheduling',
            description: 'Coordinate activities, set reminders, and manage timelines with smart scheduling tools.',
            category: 'Planning Tools'
        },
        {
            image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Photo Gallery',
            description: 'Collaborative photo sharing with automatic organization and beautiful gallery displays.',
            category: 'Media Services'
        },
        {
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Music Curation',
            description: 'Collaborative playlists with guest contributions and professional music recommendations.',
            category: 'Entertainment'
        },
        {
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Venue Selection',
            description: 'Discover and book perfect venues with virtual tours and availability matching.',
            category: 'Venue Services'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Catering Coordination',
            description: 'Menu planning, dietary accommodation, and premium catering partner access.',
            category: 'Food & Beverage'
        },
        {
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Decor & Styling',
            description: 'Theme development, decor planning, and professional styling services.',
            category: 'Design Services'
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-24 relative bg-slate-50"
            id="services"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 text-slate-600 uppercase tracking-wider text-sm font-medium mb-4">
                        <div className="w-12 h-px bg-slate-300"></div>
                            Our Services
                        <div className="w-12 h-px bg-slate-300"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Complete Event Management Solutions
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        End-to-end event services that transform your vision into unforgettable experiences,
                        handled with precision and creative excellence.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                {/* Category Badge */}
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                                    {service.category}
                                </span>
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Learn More
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </motion.button>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16 max-w-7xl mx-auto"
                >
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Create Something Extraordinary?</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let's discuss your event vision and bring it to life with our comprehensive service package.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Services