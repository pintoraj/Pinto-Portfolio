'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Only need useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import React from 'react';

// --- TYPE DEFINITIONS ---
interface UnderlineProps {
    isHovered: boolean;
    isSelected: boolean;
}

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
];

// --- SquigglyUnderline Component ---
const SquigglyUnderline: React.FC<UnderlineProps> = ({ isHovered, isSelected }) => {
    if (!isHovered && !isSelected) return null;
    const color = isSelected ? "#A3A3A3" : "#A3A3A3"; 

    return (
        // Added 'flex justify-center' to center the SVG under the link text
        <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px] flex justify-center">
            <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke={color} 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                        strokeDashoffset: 0,
                    }}
                    transition={{
                        duration: 0.5, 
                    }}
                />
            </svg>
        </motion.div>
    );
};

// --------------------------------------------------------------------------------

export default function NavBar() {
    const activePath = usePathname(); 
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    // State for managing the mobile menu's open/closed state
    const [isOpen, setIsOpen] = useState(false); 

    // Mobile menu animation variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-20 backdrop-filter backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-700/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Name */}
                    <Link href="/" className="text-xl font-bold tracking-wider text-white hover:text-neutral-400 transition duration-300">
                        Pint0
                    </Link>

                    {/* Desktop Navigation Links (Hidden on small screens) */}
                    <div className="hidden sm:flex space-x-4">
                        {navItems.map((item) => {
                            const isSelected = item.href === activePath; 
                            const isHovered = item.name === hoveredItem;
                            
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition duration-300 group 
                                        ${isSelected ? 'text-white' : 'text-gray-200 hover:text-neutral-400'}`
                                    }
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item.name}
                                    <SquigglyUnderline isHovered={isHovered} isSelected={isSelected} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Hamburger Menu Button (Visible on small screens) */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/20 focus:outline-none transition duration-150 ease-in-out"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {/* Icon for the button (Ternary operator to switch between Hamburger and Close) */}
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Content with Framer Motion Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="sm:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    variants={linkVariants}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 
                                            ${item.href === activePath 
                                                ? 'text-white bg-white/20' 
                                                : 'text-gray-300 hover:text-white hover:bg-white/10'}`
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}