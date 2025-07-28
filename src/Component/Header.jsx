import React, { useState } from 'react';
import { navList } from '../Constant/constant';
import logoImage from '/img/logo.png';
import { Link } from 'react-router-dom';
import { AlignLeft, X, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <header className='bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100 shadow-sm'>
                <div className='container mx-auto px-6'>
                    <div className='flex justify-between items-center py-4'>
                        {/* Logo Section */}
                        <motion.div 
                            className='flex items-center space-x-3'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                src={logoImage}
                                alt="logo_image"
                                className='w-12 h-12 object-contain'
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <div>
                                <h1 className='text-2xl font-bold text-gray-900'>
                                    Tama<span className='text-orange-500'>nna</span>
                                </h1>
                                <p className='text-xs font-semibold text-gray-500'>
                                    Frontend Developer
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className='hidden lg:flex items-center space-x-8'>
                            <ul className='flex space-x-8 items-center'>
                                {navList.map((navItems) => (
                                    <motion.li
                                        key={navItems.id}
                                        className='relative group'
                                        whileHover={{ y: -2 }}
                                        onClick={()=>window.scrollTo(0, 0)}
                                    >
                                        <Link
                                            to={navItems.url}
                                            className='text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium flex flex-col items-center'
                                        >
                                            {navItems.title}
                                            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            
                            {/* Hire Now Button (Desktop) */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="/contact"
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    Hire Me
                                </a>
                            </motion.div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className='lg:hidden flex items-center gap-4'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full shadow-md"
                            >
                                Hire Me
                            </motion.button>
                            <button 
                                onClick={toggleMenu}
                                className="p-2 rounded-full hover:bg-orange-50 transition-colors"
                            >
                                {menuOpen ? (
                                    <X className='w-6 h-6 text-gray-700' />
                                ) : (
                                    <AlignLeft className='w-6 h-6 text-gray-700' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <motion.div 
                            className='lg:hidden bg-white py-4 border-t border-orange-50'
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className='flex flex-col space-y-4'>
                                {navList.map((navItems) => (
                                    <motion.li
                                        key={navItems.id}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link
                                            to={navItems.url}
                                            className='block py-2 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium'
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {navItems.title}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;