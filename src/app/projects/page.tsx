'use client';

import NavBar from '@/components/NavBar';
import Link from 'next/link';
import { Briefcase, Zap, Shield, Github, Code, GraduationCap, ArrowRight } from 'lucide-react'; 
import { PulseBeams } from '@/components/PulseBeams'; 
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';



const projectData = [
    {
        icon: Briefcase,
        title: "Full-stack eCommerce Application",
        type: "Professional Experience (Cognizant)",
        category: "professional", 
        description: "Developed a Full-stack eCommerce application using React (Vite) for the frontend and Spring Boot for the backend. Implemented RESTful APIs communicating with a MySQL database for optimized product listing, cart management, and order processing. Demonstrated enterprise-level deployment practices.",
        techStack: ["React (Vite)", "Spring Boot", "MySQL", "RESTful APIs", "JUnit", "Mockito"],
        link: "https://github.com/pintoraj/ecommerce-app-repo",
    },
    {
        icon: Zap,
        title: "AI System-Inclusive Communication",
        type: "Academic Project (Software Development)",
        category: "academic",
        description: "Developed an ML/MediaPipe based solution that automates NLP and sign language translation. This project enhances communication for individuals with visual, auditory, and speech impairments, focusing on accessibility.",
        techStack: ["Machine Learning", "MediaPipe", "NLP", "Python"],
        link: "https://github.com/pintoraj/ai-inclusive-comm",
    },
    {
        icon: Shield,
        title: "Ransomware Recovery Tool",
        type: "Academic Project (Cybersecurity)",
        category: "academic",
        description: "Engineered a tool that identifies encrypted files, analyzes encryption patterns, and restores compromised data using cryptographic techniques. This enhances system resilience against modern ransomware attacks and data loss.",
        techStack: ["Cryptography", "Java/Python", "Data Analysis"],
        link: "https://github.com/pintoraj/ransomware-recovery",
    },
    {
        icon: Code,
        title: "AI-Powered Personalized Health System",
        type: "Academic Project (AI/ML)",
        category: "academic",
        description: "Engineered an intelligent health platform using multiple machine learning models (e.g., classification, regression) to analyze patient data, provide tailored diagnostics, and recommend personalized treatment plans.",
        techStack: ["Machine Learning", "Patient Data Analysis", "Python"],
        link: "https://github.com/pintoraj/ai-health-system",
    },
];

// Grouping data by category for better organization in the UI
const groupedProjects = projectData.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(project);
    return acc;
}, {} as Record<string, typeof projectData>);


// --- Framer Motion Variants ---
const containerVariants: Variants = {
      hidden: { opacity: 0, y: 50, rotateX: 5 },
       // Cast containerVariants as well for safety
    visible: {
        opacity:1,
        y:0,
        rotateX:0,
        transition: {
            staggerChildren: 0.15, // Slightly increased stagger for impact
        },
    },
};



const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    },
};

// --- Project Card Component ---
const ProjectCard = ({ project }: { project: typeof projectData[0] }) => {
    const Icon = project.icon;
    const isProfessional = project.category === 'professional';

    // Conditional styling for the professional project card (Featured look)
    const cardClasses = isProfessional
        ? "bg-neutral-900/90 p-8 rounded-3xl shadow-3xl border-2 border-neutral-500/80 flex flex-col h-full transition duration-500 hover:border-white/90 hover:shadow-neutral-500/50 relative overflow-hidden"
        : "bg-neutral-900/60 p-6 rounded-2xl shadow-xl border border-neutral-800/80 flex flex-col h-full transition duration-300 hover:border-neutral-500/50 hover:bg-neutral-800/70";
    
    const iconBgClass = isProfessional ? "bg-white/10 text-white" : "bg-neutral-800 text-neutral-400";

    return (
        <motion.div
            variants={containerVariants}
            className={cardClasses}
        >
            {/* FEATURED RIBBON FOR PROFESSIONAL PROJECT */}
            {isProfessional && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-neutral-500 text-black font-bold text-xs uppercase rounded-bl-xl shadow-xl">
                    Featured Work
                </div>
            )}

            <div className="flex items-start justify-between mb-4">
                {/* Icon and Title Block */}
                <div className="flex-grow">
                    <div className={`p-3 w-fit rounded-xl mb-4 ${iconBgClass} border border-neutral-700`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-1 leading-snug tracking-tight">{project.title}</h3>
                    <p className="text-sm font-semibold text-neutral-400">
                        {project.type}
                    </p>
                </div>
            </div>
            
            {/* Description */}
            <p className="mt-4 text-neutral-300 leading-relaxed text-base flex-grow">{project.description}</p>
            
            {/* Tech Stack - Improved as Tag Badges */}
            <div className="mt-6 pt-4 border-t border-neutral-800">
                <p className="text-xs font-bold uppercase text-neutral-500 mb-2 tracking-wider">Key Technologies</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                        <span 
                            key={i} 
                            className="text-xs font-mono text-neutral-200 bg-neutral-700/60 px-3 py-1 rounded-full border border-neutral-600 shadow-inner"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* GitHub Link Button at Bottom */}
            <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center py-2 px-4 rounded-xl bg-neutral-700/50 border border-neutral-600 text-neutral-300 font-bold transition duration-300 hover:bg-neutral-600/70 hover:text-white"
                title="View Code on GitHub"
            >
                View Code <Github className="w-4 h-4 ml-2" />
            </Link>
        </motion.div>
    );
};

// --- Main Projects Page Component ---
export default function ProjectsPage() {
    return (
        // MAIN CONTAINER: Set dark background
        <div className="relative min-h-screen bg-black text-white pt-16">
            <NavBar />
            
            {/* Pulse Beams Background Layer: Increased opacity for depth */}
            <div className="fixed inset-0 overflow-hidden opacity-30">
                <PulseBeams />
            </div>

            {/* Main Content Layer (z-index 10) */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                
                {/* IMPROVED HEADER: Gradient text and stronger motion */}
                <motion.header 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter inline-block">

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 drop-shadow-lg">
                            Projects Portfolio
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-400 max-w-4xl mx-auto font-light">
                        A selection of my most impactful work, spanning Full-Stack Development, AI/ML, and Cybersecurity research.
                    </p>
                </motion.header>

                {/* --- 1. Professional Experience Section --- */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold text-neutral-300 mb-10 flex items-center">
                        <Briefcase className="w-7 h-7 mr-3 text-neutral-500" />
                        Professional & Featured Work
                        <div className="flex-grow h-px ml-4 bg-neutral-800"></div> {/* Subtle Divider */}
                    </h2>
                    <motion.div 
                        className="grid grid-cols-1" 
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {groupedProjects.professional?.map((project, index) => (
                            // Professional card will take full width and use the dramatic styling
                            <ProjectCard key={index} project={project} /> 
                        ))}
                    </motion.div>
                </section>

                {/* --- 2. Academic & Personal Projects Section --- */}
                <section className="mb-24">
                    <h2 className="text-4xl font-bold text-neutral-300 mb-10 flex items-center">
                        <GraduationCap className="w-7 h-7 mr-3 text-neutral-500" />
                        Academic & Key Personal Projects
                        <div className="flex-grow h-px ml-4 bg-neutral-800"></div> {/* Subtle Divider */}
                    </h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12" // Two columns for density
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {groupedProjects.academic?.map((project, index) => (
                            <ProjectCard key={index} project={project} /> 
                        ))}
                    </motion.div>
                </section>


                {/* --- View All Code CTA Section --- */}
                <section className="mt-20 text-center border-t border-neutral-900 pt-12">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Ready to Dive Deeper?
                    </h2>
                    <p className="mt-3 text-lg text-neutral-500 mb-8 max-w-3xl mx-auto">
                        Check out my full repository for more contributions, open-source work, and code samples.
                    </p>
                    {/* Framer Motion for CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <Link
                            href="https://github.com/pintoraj"
                            target="_blank"
                            rel="noopener noreferrer"
                            // IMPROVED CTA BUTTON: Dark glass-like, prominent
                            className="mt-6 inline-flex items-center px-12 py-4 border-2 border-neutral-600 text-lg font-extrabold rounded-full text-white 
                                     bg-neutral-800/70 shadow-2xl shadow-black/80 backdrop-blur-sm
                                     hover:bg-neutral-700/90 hover:border-white transition duration-300 transform hover:scale-[1.03]"
                        >
                            <Github className="w-6 h-6 mr-3" />
                            Visit My GitHub Profile
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}