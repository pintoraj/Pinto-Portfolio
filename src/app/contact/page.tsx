'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PulseBeams } from '@/components/PulseBeams';

const contactData = [
  {
    icon: Mail,
    title: "Email",
    value: "mailto:mailtopintoraj@gmail.com",
    label: "mailtopintoraj@gmail.com",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "tel:+9345309881",
    label: "+91 93453-09881",
    external: true,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/pintoraj/",
    label: "linkedin.com/in/pintoraj/",
    external: true,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "https://github.com/pintoraj",
    label: "github.com/pintoraj",
    external: true,
  },
];

// --- 2. SUB-COMPONENT: INFO CARD (Refined Hover/Focus Effects) ---
const InfoCard = ({ item, index }: { item: typeof contactData[0], index: number }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={item.value}
        target={item.external ? "_blank" : "_self"}
        aria-label={`Contact via ${item.title}`}
        // Themed styling: neutral-900/40, border-neutral-800, enhanced hover effects
        className="relative p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800 shadow-xl hover:shadow-neutral-900/80 hover:border-neutral-600 transition-all duration-500 backdrop-blur-sm flex flex-col items-center text-center group h-full transform hover:-translate-y-1 focus:ring-2 focus:ring-neutral-500"
      >
        {/* ICON CONTAINER: Enhanced Badge */}
        <div className="p-4 bg-neutral-900 rounded-full border border-neutral-700 shadow-inner shadow-black/50 mb-4 group-hover:bg-neutral-800 transition-colors">
          <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-neutral-200 tracking-wide">{item.title}</h3>
        <p className="text-sm text-neutral-500 mt-2 break-all font-mono group-hover:text-neutral-300 transition duration-300">
          {item.label}
        </p>
      </Link>
    </motion.div>
  );
};


// --- 3. MAIN PAGE COMPONENT (Organized and Improvised Layout) ---
export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neutral-700 selection:text-white overflow-hidden">
      <NavBar />

      {/* Background Effect (Shared Component) */}
      <div className="fixed inset-0 overflow-hidden opacity-30 pointer-events-none">
        <PulseBeams />
      </div>
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Page Header (Gradient Text & Enhanced Motion) */}
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-8xl font-extrabold tracking-tighter mb-4 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-white to-neutral-400 drop-shadow-lg">
              Get in Touch
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xl text-neutral-400 max-w-4xl mx-auto"
          >
            Always open to new opportunities, collaborations, or just a friendly chat.
            Reach out through the direct links or use the form below for project inquiries.
          </motion.p>
        </header>

        {/* LAYOUT: Split into Direct Contact (Grid) and Message Form (Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* SECTION 1: Contact Information Grid (2/3 width on large screens) */}
            <motion.section 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 shadow-md">
                    <MessageCircle className="text-neutral-300" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-200 tracking-wide">Contact Medium</h2>
                <div className="flex-grow h-px bg-neutral-800"></div> {/* Subtle Divider */}
              </div>

              {/* Grid layout is now more compact/dense on small screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactData.map((item, index) => (
                  <InfoCard key={index} item={item} index={index} />
                ))}
              </div>
            </motion.section>

            {/* SECTION 2: Contact Form (1/3 width on large screens) */}
            <motion.section 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            > 
              
              {/* Card Container: Themed and given a focused glow effect */}
              <div
                className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md relative shadow-2xl shadow-black/60 transition-all duration-700
                           focus-within:border-neutral-600 focus-within:ring-2 focus-within:ring-neutral-700/50"
              >
                {/* Centered Section Header Style */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-800">
                    <Send className="text-neutral-400" size={20} />
                    <h2 className="text-xl font-semibold text-neutral-200 tracking-wide">Send Message</h2>
                </div>
                
                <form className="space-y-5">
                    
                    {/* Input Styling: neutral-900/70, border-neutral-700, focus ring is neutral-500 */}
                    <div>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-3 bg-neutral-900/70 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition duration-300 shadow-inner hover:bg-neutral-900"
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-3 bg-neutral-900/70 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition duration-300 shadow-inner hover:bg-neutral-900"
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Your Message (Project details, greetings, etc.)" 
                            rows={4}
                            className="w-full p-3 bg-neutral-900/70 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition duration-300 shadow-inner hover:bg-neutral-900 resize-none"
                        ></textarea>
                    </div>
                    <div>
                        {/* Button: High-contrast button with a dynamic effect */}
                        <button 
                            type="submit" 
                            className="w-full flex items-center justify-center py-3 text-lg font-bold rounded-xl text-white bg-neutral-600 hover:bg-neutral-500 transition duration-300 shadow-xl shadow-black/50 transform active:scale-[0.98] group border border-neutral-500 mt-2"
                        >
                            <span className="mr-3">Send It!</span>
                            <Send className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </button>
                    </div>
                </form>
              </div>

              {/* Location Note (Moved closer to the form and slightly refined) */}
              <p className="mt-8 text-center text-sm text-neutral-600 flex items-center justify-center tracking-wider">
                  <MapPin className="w-4 h-4 mr-2 text-neutral-500"/> 
                  Based in Tamil Nadu, India (GMT+5:30)
              </p>
            </motion.section>
        </div>

        {/* Footer / End Mark (Themed) */}
        <div className="mt-32 pt-10 border-t border-neutral-900 text-center">
            <p className="text-neutral-700 text-sm font-mono">
              Thank you for stopping by. Code is the poetry of the machine.
            </p>
        </div>

      </main>
    </div>
  );
}