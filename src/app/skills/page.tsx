'use client';

import React from 'react';
import { easeOut, motion, Variants } from 'framer-motion'; // Ensure Variants is imported
import { Code, Server, Database, GitBranch, Terminal, Shield, Briefcase, Star, Lightbulb } from 'lucide-react'; 
import NavBar from '@/components/NavBar';
import { PulseBeams } from '@/components/PulseBeams';

// --- TYPE DEFINITIONS (FIXED) ---

type SkillLevel = "Familiar" | "Proficient" | "Advanced" | "Expert";

interface SkillItem {
    name: string;
    level: SkillLevel; // Enforces the literal strings
    tag?: string;
}

interface SkillGroup {
    category: string;
    icon: React.ElementType; // Type for Lucide icon components
    skills: SkillItem[];
}

interface SkillBarProps {
    level: SkillLevel;
    tag?: string; 
}


// --- Data Structure for Skills (Typed) ---
const skillsData: SkillGroup[] = [
    {
        category: "Backend & Core Languages",
        icon: Server,
        skills: [
            { name: "Java / Core Java", level: "Advanced" },
            { name: "Spring Boot", level: "Expert", tag: "Primary Focus" },
            { name: "RESTful APIs", level: "Expert" },
            { name: "Python", level: "Proficient" },
            { name: "PHP", level: "Familiar" },
        ]
    },
    {
        category: "Frontend Development",
        icon: Code,
        skills: [
            { name: "React / Next.js", level: "Expert", tag: "Primary Focus" },
            { name: "HTML5 / CSS3", level: "Expert" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "JavaScript / TypeScript", level: "Proficient" },
            { name: "Bootstrap / jQuery", level: "Familiar" },
        ]
    },
    {
        category: "Database & Data Tools",
        icon: Database,
        skills: [
            { name: "MySQL", level: "Advanced" },
            { name: "MongoDB", level: "Proficient" },
            { name: "Firebase (Firestore)", level: "Familiar" },
        ]
    },
    {
        category: "DevOps & Tools",
        icon: Terminal,
        skills: [
            { name: "Git / GitHub", level: "Expert" },
            { name: "Postman", level: "Advanced" },
            { name: "JUnit & Mockito", level: "Proficient" },
            { name: "Docker (Basic)", level: "Familiar" },
        ]
    },
    {
        category: "Cybersecurity & Research",
        icon: Shield,
        skills: [
            { name: "Cryptography", level: "Proficient" },
            { name: "AI/ML Concepts", level: "Proficient" },
            { name: "Network Security", level: "Familiar" },
        ]
    }
];

// --- Framer Motion Variants ---

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: {
            staggerChildren: 0.1,
        }
    }
};


const skillGroupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 10,
            mass: 0.5,
        },
    }
}


const skillItemVariants: Variants = {
     hidden: { opacity: 0, x: -10 },
    // Simplified the visible state for list items to match the 'hidden' properties
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
};



// --- Skill Level Bar Component (Typed) ---
const SkillBar: React.FC<SkillBarProps> = ({ level, tag }) => {
    let width = 0;
    let barClasses = "bg-neutral-700"; // Default
    let levelTextClass = "text-neutral-500";
    
    // Strict Monochrome Color Scheme with gradients for visual flair
    switch(level) {
        case "Familiar": width = 40; barClasses = "bg-neutral-700"; levelTextClass = "text-neutral-600"; break;
        case "Proficient": width = 70; barClasses = "bg-neutral-600"; levelTextClass = "text-neutral-500"; break;
        case "Advanced": width = 85; barClasses = "bg-gradient-to-r from-neutral-600 to-neutral-500"; levelTextClass = "text-neutral-400"; break;
        case "Expert": width = 95; barClasses = "bg-gradient-to-r from-neutral-400 to-white"; levelTextClass = "text-white font-bold"; break; 
        default: width = 0;
    }

    return (
        <div className="flex items-center space-x-3 w-full">
            <div className="relative w-full bg-neutral-900 rounded-full h-2 shadow-inner shadow-black/50">
                <motion.div
                    className={`h-2 rounded-full ${barClasses}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
            </div>
            <span className={`text-xs w-20 text-right font-mono tracking-wider ${levelTextClass}`}>{level}</span>
             {tag && (
                <span className="flex items-center text-[10px] uppercase font-bold text-black bg-white/80 px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap shadow-md">
                    <Star className="inline w-3 h-3 mr-1 text-black" fill="black" />
                    {tag}
                </span>
            )}
        </div>
    );
};

// --- Main Skills Page Component (Renamed to App and Hydration Fix Applied) ---
const App = () => {
    const customStyles = `
        /* Add a simple pulse animation for the mock beams */
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.3; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
        }
    `;

    return (
        // MAIN CONTAINER: Set dark background and relative position
        <div className="relative min-h-screen bg-black text-white pt-16 font-sans">
            {/* FIX: Use dangerouslySetInnerHTML to correctly inject global CSS and resolve the 'global' prop warning */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <NavBar />
            
            {/* 2. Pulse Beams Background Layer: Opacity/Blur adjustment */}
            <div className="fixed inset-0 overflow-hidden opacity-20 backdrop-blur-sm"> 
                <PulseBeams />
            </div>

            {/* 3. Main Content Layer (z-index 10) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                
                {/* IMPROVED HEADER: Stronger Monochrome gradient */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 drop-shadow-lg">
                            Technical Stack
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-400 max-w-4xl mx-auto font-light">
                        A detailed breakdown of the technologies and tools I leverage to build scalable, secure, and user-friendly full-stack applications.
                    </p>
                </motion.header>

                {/* Skills Grid Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible" // Use whileInView for staggered entry as user scrolls
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillsData.map((group, index) => (
                        // HYDRATION FIX: Consolidated the className into one line without breaks.
                        <motion.div
                            key={index}
                            variants={skillGroupVariants}
                            className="flex flex-col p-8 rounded-3xl bg-neutral-900/80 border border-neutral-700/50 shadow-2xl shadow-black/70 backdrop-blur-sm transition-all duration-500 hover:border-white/50 hover:shadow-white/10 hover:shadow-inner hover:scale-[1.01] group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-neutral-800">
                                {/* ICON IMPROVEMENT: Neutral color with hover highlight */}
                                <div className="p-2 bg-neutral-950 rounded-lg border border-neutral-800 shadow-md">
                                    <group.icon className="w-6 h-6 text-neutral-400 transition-colors duration-500 group-hover:text-white" />
                                </div>
                                <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">
                                    {group.category}
                                </h2>
                            </div>
                            
                            {/* Inner List Stagger */}
                            <motion.ul 
                                className="space-y-6 flex-grow"
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                            >
                                {group.skills.map((skill, skillIndex) => (
                                    <motion.li 
                                        key={skillIndex} 
                                        variants={skillItemVariants}
                                        className="flex flex-col"
                                    >
                                        <p className="font-semibold text-neutral-200 mb-1 flex justify-between items-center text-sm">
                                            {skill.name}
                                        </p>
                                        <SkillBar level={skill.level} tag={skill.tag} />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certification Section (Optional CTA) */}
                <section className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                        <Lightbulb className="w-7 h-7 mr-3 text-neutral-400" /> Continuous Growth & Vision
                    </h2>
                    <p className="mt-3 text-lg text-neutral-500 mb-10 max-w-3xl mx-auto">
                        My expertise is built on practical projects and a commitment to learning new concepts like Docker/Cloud (basic familiarity) and advanced AI/ML applications.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    >
                        {/* HYDRATION FIX: Converted Link to anchor and consolidated className */}
                        <a
                            href="/experience"
                            aria-label="View my work experience and projects timeline"
                            className="inline-flex items-center px-10 py-3 text-lg font-extrabold rounded-full text-white tracking-wider bg-neutral-800/60 border border-neutral-600/70 shadow-2xl shadow-black/80 backdrop-blur-sm hover:bg-neutral-700/70 hover:border-neutral-500 transition-all duration-500 transform hover:scale-[1.03] group"
                        >
                            <Briefcase className="w-5 h-5 mr-3 group-hover:rotate-6 transition-transform" />
                            Explore Projects & Experience
                        </a>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default App;