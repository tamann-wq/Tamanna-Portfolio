import React from 'react';
import HeroImage from '/img/logo.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Sparkles, Code, Palette, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const socialLinks = [
        { icon: <FaInstagram size={18} />, url: "#", color: "bg-gradient-to-br from-pink-500 to-purple-600" },
        { icon: <FaGithub size={18} />, url: "https://github.com/tamann-wq", color: "bg-gradient-to-br from-gray-800 to-gray-900" },
        { icon: <FaYoutube size={18} />, url: "#", color: "bg-gradient-to-br from-red-500 to-red-600" },
        { icon: <FaLinkedin size={18} />, url: "#", color: "bg-gradient-to-br from-blue-600 to-blue-700" }
    ];

    const skills = [
        { icon: <Code className="w-4 h-4" />, name: "React.js" },
        { icon: <Code className="w-4 h-4" />, name: "TypeScript" },
        { icon: <Palette className="w-4 h-4" />, name: "Tailwind CSS" },
        { icon: <Smartphone className="w-4 h-4" />, name: "Responsive Design" }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-[#fff9f5] min-h-screen flex items-center">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
            />
            
            <div className='container mx-auto px-6 relative z-10'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-16 py-20'>
                    
                    <motion.div 
                        className='lg:w-1/2 w-full'
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="mb-6">
                            <span className='text-xs font-semibold text-orange-600 bg-orange-100/80 px-4 py-1.5 rounded-full inline-flex items-center border border-orange-200'>
                                <Sparkles className="mr-2 h-3.5 w-3.5" />
                                Welcome to my creative space
                            </span>
                        </motion.div>
                        
                        <motion.h1 variants={fadeInUp} className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                            Crafting <span className="text-orange-600">Digital</span> <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Experiences</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/60 z-0"></span>
                            </span>
                        </motion.h1>
                        
                        <motion.p variants={fadeInUp} className='text-lg text-gray-600 mb-8 leading-relaxed max-w-lg'>
                            Hi, I'm <span className="font-bold text-orange-600">Tamanna Mishra</span>, a passionate Frontend Developer specializing in creating beautiful, functional web experiences with React, TypeScript, and modern CSS.
                        </motion.p>
                        
                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
                            <button  className="group px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center">
                                <Link to='/portfolio'>View My Work</Link>
                                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button className="px-8 py-3.5 bg-white text-gray-800 font-medium rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:text-orange-600">
                                <Link to = '/img/Tamanna_Mishra_Resume.pdf' target='_blank' rel="noopener noreferrer"  download>Download CV</Link>
                            </button>
                        </motion.div>
                        
                   
                        <motion.div variants={fadeInUp} className="mb-10">
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 border border-gray-100 shadow-sm">
                                        {skill.icon}
                                        <span className="ml-1.5">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Connect with me</h3>
                            <div className='flex space-x-3'>
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        className={`w-9 h-9 ${link.color} text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                    
                  
                    <motion.div 
                        className="lg:w-1/2 w-full relative mt-16 lg:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative max-w-md mx-auto">
                         
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -top-10 -left-10 w-24 h-24 bg-orange-100 rounded-full z-0"
                            />
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-100 rounded-full z-0"
                            />
                            
                           
                            <div className="relative z-10">
                                <motion.div 
                                    initial={{ rotate: 5, opacity: 0 }}
                                    animate={{ rotate: 6, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-[2.5rem] shadow-2xl"
                                />
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
                                >
                                    <img 
                                        src={HeroImage} 
                                        alt="Tamanna Mishra" 
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            </div>
                            
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="absolute -bottom-6 -right-6 bg-white px-4 py-2 rounded-full shadow-lg z-20 border border-gray-100 flex items-center"
                            >
                                <Code className="w-4 h-4 text-orange-500 mr-1.5" />
                                <span className="text-sm font-bold text-orange-500">React.js</span>
                            </motion.div>
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-lg z-20 border border-gray-100 flex items-center"
                            >
                                <Code className="w-4 h-4 text-orange-500 mr-1.5" />
                                <span className="text-sm font-bold text-orange-500">TypeScript</span>
                            </motion.div>
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.6 }}
                                className="absolute -bottom-10 left-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 border border-gray-100 flex items-center"
                            >
                                <Palette className="w-4 h-4 text-orange-500 mr-1.5" />
                                <span className="text-sm font-bold text-orange-500">Tailwind CSS</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;