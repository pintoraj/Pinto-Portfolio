'use client';

import Link from 'next/link';
// Import useRouter from next/router (or next/navigation in newer Next.js versions)
import { useRouter } from 'next/router'; 
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Added useEffect for path update
import { motion } from 'framer-motion'; 

// --- [SquigglyUnderline Component remains unchanged] ---

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
];

const SquigglyUnderline = ({ isHovered, isSelected }) => {
    if (!isHovered && !isSelected) return null;
    const color = isSelected ? "#A3A3A3" : "#A3A3A3"; 

    return (
        <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
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
    // 1. Use usePathname to get the current URL path
    const activePath = usePathname(); 
    const [hoveredItem, setHoveredItem] = useState(null);

    // Note: We no longer need the useEffect or the useState(router.pathname) initialization
    // because usePathname() automatically provides the up-to-date path.

    return (
        <nav className="fixed top-0 left-0 w-full z-20 backdrop-filter backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-700/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Name */}
                    <Link href="/" className="text-xl font-bold tracking-wider text-white hover:text-neutral-400 transition duration-300">
                        Pint0
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex space-x-4">
                        {navItems.map((item) => {
                            // 2. Compare the item href against the current activePath
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
                </div>
            </div>
        </nav>
    );
}