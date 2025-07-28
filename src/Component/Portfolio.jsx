import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Portfolio = () => {
    const portfolioList = [
        {
            id: 1,
            title: 'Rashmi Neuro Hospital',
            subtitle: 'Best Neurologist in Bilaspur',
            desc: 'A leading multi-speciality Hospital specializing in neurology & neurosurgery. With conveniently located in Bilaspur Chattisgarh',
            url: 'http://www.rashmineurohospital.in/',
            icon: '🏥'
        },
        {
            id: 2,
            title: 'Gajmohni Parisar',
            subtitle: 'Bilaspur Chhattisgarh',
            desc: "Discover a world where luxury meets affordability. Gajmohani Parisar offers modern homes designed to provide comfort, convenience, and elegance",
            url: 'https://gajmohiniparisar.in/',
            icon: '🏡'
        },
        {
            id: 3,
            title: 'ATHARV CHILD & EYE HOSPITAL',
            subtitle: 'Specialized Pediatric Care in Bilaspur',
            desc: 'Atharv Hospital in Sarkanda, Bilaspur-chhattisgarh has a well-equipped clinic with all the modern equipment.',
            url: 'http://www.atharvhospital.co.in/',
            icon: '👁️'
        },
        {
            id: 4,
            title: 'Shivam Motors',
            subtitle: 'Bilaspur Chhattisgarh',
            desc: "Shivam Motors products are sold to customers for its reliability and viability.",
            url: 'https://www.shivammotors.co.in/',
            icon: '🏍️'
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            } 
        }
    }

    return (
        <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2
                        }}
                        className="inline-flex items-center text-sm font-medium bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full mb-6"
                    >
                        My Work
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Project Portfolio
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and expertise.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {portfolioList.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-xl transition-all"
                        >
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            
                            <div className="flex items-start mb-4">
                                <div className="text-4xl mr-4">{project.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                    <p className="text-sm text-orange-500 font-medium">{project.subtitle}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 mb-6 pl-14">{project.desc}</p>
                            
                            <Link
                                to={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg hover:from-orange-500 hover:to-pink-500 transition-all group/link"
                            >
                                Visit Website
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio