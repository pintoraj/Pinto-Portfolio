'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import { Briefcase, School, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PulseBeams } from '@/components/PulseBeams'; 

// --- 1. DATA CONFIGURATION (Unchanged) ---
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

// --- 2. SUB-COMPONENT: TIMELINE ITEM (Revised for Centering) ---
const TimelineCard = ({ data, index, type }: { data: any, index: number, type: 'work' | 'education' }) => {
  const isWork = type === 'work';
  const CardIcon = isWork ? Briefcase : School;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      // REVISION: Removed the grid layout from the outer container
      className="relative mb-12 group flex justify-center" 
    >
      {/* 1. Center Line & Dot (The vertical connector) */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[1px] bg-neutral-800 group-last:bg-gradient-to-b group-last:from-neutral-800 group-last:to-transparent">
        {/* Dot for the timeline itself, centered on the line */}
        <div className="relative z-10 w-3 h-3 rounded-full bg-neutral-700 border border-slate-950 flex items-center justify-center top-3 shadow-md transform -translate-x-1/2 left-1/2"></div>
      </div>

      {/* 2. Content Card (Now centered and constrained) */}
      <div className="w-full max-w-2xl px-4 relative z-20"> 
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/70 transition-all duration-500 backdrop-blur-sm relative mt-4">

          {/* Card Badge (Integrated at the top center) */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 p-2 neutral-900 rounded-full border border-neutral-700 shadow-lg">
            <CardIcon size={16} className="text-neutral-400" />
          </div>

          <div className="text-center pt-2 pb-4 border-b border-neutral-800 mb-4">
            <h3 className="text-xl font-bold text-neutral-200">{data.title}</h3>
            <p className="text-neutral-400 font-medium text-sm mt-1">{isWork ? data.company : data.institution}</p>
            <p className="text-neutral-500 text-xs mt-1">
                {data.duration} | {data.location}
            </p>
          </div>

          {/* Description and Tags (Simplified layout for centering) */}
          <div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4 text-left">
                {data.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 border-t border-neutral-800/50">
                {data.tags.map((tag: string, tIdx: number) => (
                <span 
                    key={tIdx} 
                    className="px-3 py-1 rounded-full neutral-900/50 border border-neutral-800 text-[11px] font-mono text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 transition-colors cursor-default shadow-inner shadow-black/30"
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

// --- 3. MAIN PAGE COMPONENT (No changes needed here as the centering was done in TimelineCard) ---
export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen neutral-900 text-neutral-200 selection:bg-neutral-700 selection:text-white">
      <NavBar />

      {/* Background Effect */}
      <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none">
        <PulseBeams />
      </div>
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        
        {/* Page Header (Centered - Already correct) */}
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-6xl font-extrabold text-white tracking-tight mb-3"
          >
            <span className="text-neutral-400  mr-2">03.</span> 
            Timeline
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Engineering foundations and professional milestones.
          </motion.p>
        </header>

        {/* SECTION 1: PROFESSIONAL EXPERIENCE (Centered Header - Already correct) */}
        <section className="mb-1 relative">
          <div className="flex items-center justify-center gap-3 mb-10">
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

        {/* Visual Divider */}
        <div className="flex justify-center mb-24 opacity-30">
            <div className="h-16 w-0.5 bg-gradient-to-b from-transparent via-neutral-500 to-transparent"></div>
        </div>

        {/* SECTION 2: EDUCATION (Centered Header - Already correct) */}
        <section className="relative">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 shadow-md">
                <School className="text-neutral-300" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-neutral-200 tracking-wide">Education</h2>
          </div>

          <div className="relative">
             {educationData.map((event, index) => (
               <TimelineCard key={index} data={event} index={index} type="education" />
             ))}
          </div>
        </section>

        {/* Footer / End Mark */}
        <div className="mt-20 pt-10 border-t border-neutral-900 text-center">
            <p className="text-neutral-600 text-sm font-mono">End of line // Learning continues...</p>
        </div>

      </main>
    </div>
  );
}