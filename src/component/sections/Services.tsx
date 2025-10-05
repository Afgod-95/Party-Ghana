import React from 'react'
import { motion } from 'framer-motion'
import BookUsModal from '../BookUsModal';

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
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const handleBookApoointment = () => {
        setIsModalOpen(true)
    }
    const services = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1686824684748-181198b5b44a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Honeymoon Planning',
            description: 'Craft dreamy honeymoons where your forever begins in unforgettable style!',
            category: 'Marriage'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1716999414358-3c5728a25435?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Local Tours Planning',
            description: 'Discover hidden gems and local wonders — expertly planned, effortlessly enjoyed.',
            category: 'Tours'
        },
        {
            image: 'https://images.unsplash.com/photo-1621461111591-fe005d6a4245?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Baby Naming Planning',
            description: 'Celebrate new beginnings with beautifully planned baby naming moments.',
            category: 'Outdooring'
        },
        {
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Event Planning and Management ',
            description: 'Coordinate activities, set reminders, and manage timelines with smart scheduling tools.',
            category: 'Event Services'
        },
        {
            image: 'https://dfjx2uxqg3cgi.cloudfront.net/img/photo/139924/139924_tt.jpg?20180207091824',
            title: 'Birthday Celebrations',
            description: 'Bring birthday dreams to life with unforgettable celebrations and flawless planning.',
            category: 'Birthdays'
        },
        {
            image: 'https://friscofreshmarket.com/wp-content/uploads/2021/07/African-American-Vendors-At-Farmers-Market-In-Frisco.jpg',
            title: 'Home of Experienced Vendors',
            description: 'Connect with top-tier vendors to turn every event into an extraordinary experience.',
            category: 'Vendors'
        }
    ];

    return (
        <>
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
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Lock in any service below and boom—our gift management package is yours, no charge!
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
                                        onClick={handleBookApoointment}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Book Us Now
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
                            <h3 className="text-2xl font-bold mb-4">Your Dream Event? Let’s Make It Real.</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Let’s chat about your vision and turn it into reality with our all-in-one event service package!
                            </p>
                            <motion.button
                                onClick={handleBookApoointment}
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
            <BookUsModal isOpen = {isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>

    )
}

export default Services