'use client';

import { Briefcase, School, Code2, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { PulseBeams } from '@/components/PulseBeams';
import React from 'react';

// --- MOCK COMPONENTS AND STYLES (for single-file environment) ---
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


interface WorkEvent {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    tags: string[];
}

interface EducationEvent {
    title: string;
    institution: string;
    location: string;
    duration: string;
    description: string;
    tags: string[];
}

// Union type for the data prop
type TimelineData = WorkEvent | EducationEvent;

// Define the Props interface for the TimelineCard component
interface TimelineCardProps {
    data: TimelineData;
    index: number;
    type: 'work' | 'education';
}
// --- 1. DATA CONFIGURATION ---
const workExperience = [
    {
        title: "FTE - Programmer Analyst Trainee",
        company: "Cognizant Technology Solutions",
        location: "Chennai, India",
        duration: "July 2025 - Present",
        description: "Allocated to Ford Mo-ISIS & SV2 Migration project. Previously developed a Full-stack eCommerce application during training using React (Vite) and Spring Boot. Implemented RESTful APIs, MySQL optimization, and testing with JUnit & Mockito.",
        tags: ["Java", "Spring Boot", "React", "AWS", "DevOps", "MySQL"],
    },
    {
        title: "Intern - Full Stack Developer",
        company: "Calanjiyam Technologies",
        location: "Remote / Hybrid",
        duration: "Aug 2023 - Nov 2023",
        description: "Led development using PHP and MySQL. Utilized XAMPP for local testing and Git for version control, ensuring smooth collaboration and meeting customer requirements.",
        tags: ["PHP", "MySQL", "XAMPP", "Git"],
    },
    {
        title: "Intern - Web Developer",
        company: "Digisailor",
        location: "Tuticorin",
        duration: "Aug 2022",
        description: "Developed a responsive hospital website. Built the site using HTML, CSS, Bootstrap, jQuery, and MySQL for dynamic content. Hosted the final project on Firebase.",
        tags: ["HTML/CSS", "Bootstrap", "jQuery", "Firebase"],
    },
];

const educationData = [
    {
        title: "B.E. Computer Science (Cybersecurity Specialization)",
        institution: "Francis Xavier Engineering College",
        location: "Tirunelveli, India",
        duration: "Oct 2021 – May 2025",
        description: "Honors Degree with 8.70 CGPA. Key projects included an AI/ML Personalized Health System and a Ransomware Recovery Tool. Presented a research paper on 'Smart AI-Enabled System for Empowering Disability'.",
        tags: ["Cybersecurity", "AI/ML", "Research", "Ransomware Tools"],
    },
];

// --- 2. SUB-COMPONENT: TIMELINE CARD ---
const TimelineCard :React.FC<TimelineCardProps> = ({ data, index, type }) => {
    const isWork = type === 'work';
    const CardIcon = isWork ? Briefcase : GraduationCap; // Using GraduationCap for Education

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative mb-12 group flex justify-center" // Single line class
        >
            {/* 1. Center Line & Dot */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-neutral-800/80 group-last:bg-gradient-to-b group-last:from-neutral-800 group-last:to-transparent">
                {/* Timeline Marker Dot */}
                <div className="absolute top-0 w-4 h-4 rounded-full z-20 bg-neutral-950 border-2 border-neutral-600 shadow-xl transform -translate-x-1/2 left-1/2"></div>
            </div>

            {/* 2. Content Card (Consolidated class on one line) */}
            <div className="w-full max-w-2xl px-4 relative z-20"> 
                <div className="p-7 rounded-3xl bg-neutral-900/70 border border-neutral-700/80 hover:border-white/50 shadow-2xl shadow-black/70 backdrop-blur-md transition-all duration-500 relative mt-4 transform hover:scale-[1.01]">

                    {/* Card Badge */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-950 rounded-xl border border-neutral-700 shadow-lg">
                        <CardIcon size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                    </div>

                    <div className="text-center pt-2 pb-4 border-b border-neutral-800 mb-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{data.title}</h3>
                        <p className="text-neutral-400 font-medium text-md mt-1">{isWork ? (data as WorkEvent).company : (data as EducationEvent).institution}</p>
                        <p className="text-neutral-500 text-sm mt-2">
                            <Clock className="inline w-3 h-3 mr-1" /> {data.duration} | {data.location}
                        </p>
                    </div>

                    {/* Description and Tags */}
                    <div>
                        <p className="text-md text-neutral-300 leading-relaxed mb-4 text-left">
                            {data.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-neutral-800">
                            {data.tags.map((tag, tIdx) => (
                            <span 
                                key={tIdx} 
                                className="px-3 py-1 rounded-full bg-neutral-800 text-[11px] font-mono text-neutral-400 border border-neutral-700 hover:text-white hover:border-neutral-500 transition-colors shadow-inner" // Single line class
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- 3. MAIN PAGE COMPONENT (Renamed to App) ---
const App = () => {
    return (
        <div className="relative min-h-screen bg-black text-neutral-200 selection:bg-neutral-700 selection:text-white">
            {/* Inject Custom Styles for mock component animations */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <NavBar />

            {/* Background Effect */}
            <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none">
                <PulseBeams />
            </div>
            
            <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
                
                {/* Page Header (Gradient Text for impact) */}
                <header className="mb-20 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-8xl font-extrabold tracking-tighter inline-block"
                    >

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 drop-shadow-lg">
                            My Timeline
                        </span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-xl text-neutral-400 max-w-4xl mx-auto font-light"
                    >
                        A chronological view of my key professional milestones and academic achievements.
                    </motion.p>
                </header>

                {/* ---------------------------------------------------- */}
                {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
                {/* ---------------------------------------------------- */}
                <section className="mb-24">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 shadow-md">
                            <Code2 className="text-neutral-300" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-200 tracking-wide">Professional Experience</h2>
                    </div>

                    <div className="relative">
                        {workExperience.map((event, index) => (
                           <TimelineCard key={index} data={event} index={index} type="work" />
                        ))}
                    </div>
                </section>

                {/* Visual Divider (Simple horizontal line) */}
                <div className="flex justify-center mb-24 opacity-30">
                    <div className="w-2/3 h-px bg-neutral-700/50 rounded-full"></div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* SECTION 2: EDUCATION */}
                {/* ---------------------------------------------------- */}
                <section className="relative">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 shadow-md">
                            <GraduationCap className="text-neutral-300" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-200 tracking-wide">Education & Research</h2>
                    </div>

                    <div className="relative">
                        {educationData.map((event, index) => (
                           <TimelineCard key={index} data={event} index={index} type="education" />
                        ))}
                    </div>
                </section>

                {/* Footer / End Mark */}
                <div className="mt-20 pt-10 border-t border-neutral-900 text-center">
                    <p className="text-neutral-700 text-sm font-mono">End of line // Learning continues...</p>
                </div>

            </main>
        </div>
    );
}

export default App;