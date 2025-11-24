"use client";

import NavBar from '@/components/NavBar';
import { PulseBeams } from '@/components/PulseBeams'; 
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Server, Database, GitBranch, Terminal, Shield, Briefcase, Star } from 'lucide-react'; 

// --- Data Structure for Skills ---
const skillsData = [
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

// --- Framer Motion Variants (Unchanged, as they control dynamics, not color) ---

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: {
            staggerChildren: 0.1,
        }
    }
};

const skillGroupVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
            mass: 0.5,
        }
    }
};

const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};


// --- Skill Level Bar Component (Strict Monochrome) ---
const SkillBar = ({ level, tag }: { level: string, tag?: string }) => {
    let width = 0;
    let color = "bg-neutral-500";
    let tooltipColor = "text-neutral-400";
    
    // Strict Monochrome Color Scheme
    switch(level) {
        case "Familiar": width = 40; color = "bg-neutral-700"; tooltipColor = "text-neutral-500"; break;
        case "Proficient": width = 70; color = "bg-neutral-600"; tooltipColor = "text-neutral-400"; break;
        case "Advanced": width = 85; color = "bg-neutral-400"; tooltipColor = "text-neutral-300"; break;
        case "Expert": width = 95; color = "bg-white"; tooltipColor = "text-white"; break; 
    }

    return (
        <div className="flex items-center space-x-3 w-full">
            <div className="relative w-full bg-neutral-900 rounded-full h-2">
                <motion.div
                    className={`h-2 rounded-full ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
            </div>
            <span className={`text-xs w-20 text-right font-semibold ${tooltipColor}`}>{level}</span>
             {tag && (
                <span className="text-[10px] uppercase font-bold text-white bg-neutral-700/70 px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap">
                    <Star className="inline w-3 h-3 mr-1 text-neutral-400" />
                    {tag}
                </span>
            )}
        </div>
    );
};

// --- Main Skills Page Component (Strict Monochrome) ---
export default function SkillsPage() {
    return (
        // MAIN CONTAINER: Set dark background and relative position
        <div className="relative min-h-screen bg-black text-white pt-16">
            <NavBar />
            
            {/* 2. Pulse Beams Background Layer: Opacity/Blur adjustment */}
            <div className="fixed inset-0 overflow-hidden opacity-30 backdrop-blur-sm"> 
                <PulseBeams />
            </div>

            {/* 3. Main Content Layer (z-index 10) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                
                {/* IMPROVED HEADER: Monochrome gradient */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-white">
                        <span className="text-neutral-500 mr-3 text-4xl">04.</span> Core Expertise
                    </h1>
                    <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto font-light">
                        A detailed breakdown of the technologies and tools I utilize in Full-Stack development and Cybersecurity.
                    </p>
                </motion.header>

                {/* Skills Grid Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skillsData.map((group, index) => (
                        // IMPROVED CARD UI: Monochrome hover and border
                        <motion.div
                            key={index}
                            variants={skillGroupVariants}
                            className="p-8 rounded-3xl bg-neutral-900/70 border border-neutral-700/50 shadow-2xl backdrop-blur-md transition-all duration-500 
                                       hover:bg-neutral-800/80 hover:border-neutral-500/80 hover:scale-[1.02] cursor-pointer group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-neutral-800">
                                {/* ICON IMPROVEMENT: Neutral color */}
                                <group.icon className="w-8 h-8 text-neutral-400 transition-colors duration-500 group-hover:text-white" />
                                <h2 className="text-2xl font-extrabold text-white uppercase tracking-widest">
                                    {group.category}
                                </h2>
                            </div>
                            
                            {/* Inner List Stagger */}
                            <motion.ul 
                                className="space-y-6 flex-grow"
                                variants={containerVariants}
                            >
                                {group.skills.map((skill, skillIndex) => (
                                    <motion.li 
                                        key={skillIndex} 
                                        variants={skillItemVariants}
                                        className="flex flex-col"
                                    >
                                        <p className="font-semibold text-gray-100 mb-1 flex justify-between items-center">
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
                <section className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Certifications & Honors 🏆
                    </h2>
                    <p className="mt-3 text-lg text-neutral-400 mb-8">
                        View my detailed resume for specific certifications and academic achievements.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
                    >
                        <Link
                            href="/experience"
                            // IMPROVED CTA BUTTON: Monochrome glass-like background
                            className="inline-flex items-center px-12 py-4 text-lg font-extrabold rounded-full text-white tracking-wider 
                                       bg-neutral-700/30 border border-neutral-500/50 shadow-xl backdrop-blur-sm
                                       hover:bg-neutral-600/50 hover:border-white transition-all duration-500 transform hover:scale-105"
                        >
                            <Briefcase className="w-6 h-6 mr-3" />
                            View Experience Timeline
                        </Link>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}