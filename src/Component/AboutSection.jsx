import React from 'react';
import { Code, GraduationCap, Briefcase, Target, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const workContent = [
        {
            title: "Mathematical Mindset",
            desc: "I approach coding problems with analytical precision and algorithmic thinking.",
            icon: "🧮"
        },
        {
            title: "Attention to Detail",
            desc: "I craft pixel-perfect UIs with meticulous attention to design specifications.",
            icon: "🔍"
        },
        {
            title: "Continuous Learner",
            desc: "I stay updated with the latest web technologies and best practices.",
            icon: "🚀"
        }
    ];

    const skills = {
        frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        design: ['Figma', 'Responsive Design', 'Accessibility'],
        problemSolving: ['Algorithms', 'Data Structures', 'Optimization']
    };

    const experienceItems = [
        "Built 15+ responsive web applications with React and TypeScript",
        "Improved performance by 40% through code optimization",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Integrated REST APIs and implemented state management"
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto"
                >
               
                    <motion.div variants={fadeInUp} className="text-center mb-16">
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
                            <Sparkles className="mr-2 h-4 w-4" />
                            About Me
                        </motion.span>
                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
                        >
                            Crafting Digital Experiences <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">With Precision & Passion</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute bottom-2 left-0 w-full h-3 bg-orange-400 opacity-30 -z-0"
                                    style={{ originX: 0 }}
                                />
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            I combine mathematical problem-solving with elegant code to build exceptional user experiences that delight and engage.
                        </motion.p>
                    </motion.div>

                    
                    <div className="grid md:grid-cols-2 gap-8">
                        
                        <motion.div
                            variants={fadeInUp}
                            whileHover="hover"
                        
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl mr-4 shadow-sm">
                                    <GraduationCap className="text-orange-600 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                            </div>
                            <div className="pl-16">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">B.Sc Mathematics</h3>
                                <p className="text-gray-600 mb-4">Prof. Rajendra Singh University | 2023-2026</p>
                                <p className="text-gray-700 mb-6">
                                    My mathematics background gives me strong analytical skills and logical thinking abilities that translate directly to clean, efficient code architecture.
                                </p>
                            </div>
                        </motion.div>

                        
                        <motion.div
                            variants={fadeInUp}
                            whileHover="hover"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-pink-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl mr-4 shadow-sm">
                                    <Code className="text-orange-600 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
                            </div>
                            <div className="pl-16">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} className="mb-6 last:mb-0">
                                        <h3 className="font-medium text-gray-800 mb-2 capitalize">
                                            {category.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill) => (
                                                <motion.span 
                                                    key={skill}
                                                    whileHover={{ y: -2 }}
                                                    className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm hover:bg-orange-100 transition-colors"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        
                        <motion.div
                            variants={fadeInUp}
                            whileHover="hover"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl mr-4 shadow-sm">
                                    <Briefcase className="text-orange-600 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
                            </div>
                            <div className="pl-16">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">Frontend Developer</h3>
                                <p className="text-gray-600 mb-4">Freelance | 2022-Present</p>
                                <ul className="space-y-3 mb-6">
                                    {experienceItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start text-gray-700 group"
                                        >
                                            <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                                            <span className="group-hover:text-gray-800 transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center text-orange-600 font-medium cursor-pointer group"
                                >
                                    <Link to='/portfolio' onClick={()=>window.scrollTo(0, 0)} className="group-hover:text-orange-700 transition-colors">View projects</Link>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.div>
                            </div>
                        </motion.div>

                        
                        <motion.div
                            variants={fadeInUp}
                            whileHover="hover"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="absolute -left-10 -top-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl mr-4 shadow-sm">
                                    <Target className="text-orange-600 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Mission Statement</h2>
                            </div>
                            <div className="pl-16">
                                <p className="text-gray-700 mb-6 relative">
                                    <span className="absolute -left-4 text-orange-400 text-2xl">“</span>
                                    I'm passionate about creating web applications that are not only visually stunning but also deliver exceptional user experiences through thoughtful design and robust engineering.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    My goal is to write clean, maintainable code that solves real problems while staying on the cutting edge of frontend technologies.
                                </p>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center text-orange-600 font-medium cursor-pointer group"
                                >
                                    <span className="group-hover:text-orange-700 transition-colors">My principles</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    
                    <motion.div
                        variants={fadeInUp}
                        className="mt-20 bg-gradient-to-r from-orange-50 to-pink-50 p-10 rounded-2xl border border-orange-100 shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-200 rounded-full opacity-10"></div>
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pink-200 rounded-full opacity-10"></div>

                        <motion.h3
                            whileInView={{ scale: [0.95, 1] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold text-gray-800 mb-8 text-center"
                        >
                            Why Work With Me?
                        </motion.h3>

                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {workContent.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { 
                                            duration: 0.5,
                                            delay: index * 0.1
                                        } 
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        y: -5, 
                                        scale: 1.02,
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-semibold text-orange-600 mb-3">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;