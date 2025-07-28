import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const whatsappMessage = `Name:* ${formdata.name}%0A*Email:* ${formdata.email}%0A*Phone:* ${formdata.phone}%0A*Message:* ${formdata.message}`;
        
        
        window.open(`https://wa.me/919244856954?text=${whatsappMessage}`, '_blank');
        
   
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    }

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

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6 text-orange-500" />,
            title: "Email Me",
            info: "mishratamanna210@gmail.com",
            action: "Send a message",
            link: "mailto:mishratamanna210@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6 text-orange-500" />,
            title: "Call Me",
            info: "+91 9244856954",
            action: "Call now",
            link: "tel:+919244856954"
        },
        {
            icon: <MapPin className="w-6 h-6 text-orange-500" />,
            title: "Location",
            info: "Bilaspur, Chhattisgarh, India",
            action: "Get directions",
            link: "https://maps.google.com"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
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
                            Get In Touch
                        </motion.span>
                        <motion.h1 
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                        >
                            Let's Build Something <span className="text-orange-500">Amazing</span> Together
                        </motion.h1>
                        <motion.p 
                            variants={fadeInUp}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                        </motion.p>
                        <motion.div 
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mt-6 rounded-full"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div 
                            variants={fadeInUp}
                            className="space-y-6"
                        >
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-xl shadow-lg border border-orange-50 relative overflow-hidden group hover:shadow-md transition-all"
                                >
                                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl mr-4 shadow-sm">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{method.title}</h3>
                                            <p className="text-gray-600 mb-4">{method.info}</p>
                                            <a 
                                                href={method.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-orange-600 font-medium group"
                                            >
                                                <span className="group-hover:text-orange-700 transition-colors">{method.action}</span>
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div 
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-50 relative overflow-hidden"
                        >
                            <div className="absolute -left-10 -top-10 w-32 h-32 bg-pink-100 rounded-full opacity-20"></div>
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20"></div>
                            
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>
                            
                            <form className="space-y-6" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formdata.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formdata.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        value={formdata.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows="5"
                                        value={formdata.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                        placeholder="Tell me about your project..."

                                    ></textarea>
                                </div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    Send via WhatsApp
                                    <Send className="ml-2 h-4 w-4" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;