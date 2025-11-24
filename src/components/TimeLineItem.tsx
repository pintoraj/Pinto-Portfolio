// components/TimelineItem.tsx
'use client';
import { motion } from 'framer-motion';
import { Briefcase, School } from 'lucide-react'; // Import the icons

// Define the type for the event props
type TimelineEvent = {
    icon: typeof Briefcase | typeof School;
    title: string;
    company: string;
    duration: string;
    description: string;
    tags: string[];
};

interface TimelineItemProps {
    event: TimelineEvent;
    index: number;
}

const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const Icon = event.icon;

  return (
    // Framer Motion: Animate opacity from 0 to 1 on mount (skeleton fade-in)
    <motion.div
      className="flex relative pb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, // Stagger the animation for each item
        ease: "easeOut"
      }}
    >
      {/* Vertical Line and Icon */}
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-700 pointer-events-none"></div>
        <div className="w-8 h-8 absolute bg-slate-950 rounded-full border-4 border-ne-500 flex items-center justify-center">
          <Icon className="w-4 h-4 text-ne-400" />
        </div>
      </div>

      {/* Content Card - Updated for Dark/Interactive BG */}
      <div className="flex-grow ml-10 p-5 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl hover:bg-white/10 transition duration-300 border border-ne-900/50">
        <p className="text-xs font-semibold uppercase text-ne-400">{event.duration}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{event.title}</h3>
        <p className="text-md font-medium text-gray-300">{event.company}</p>
        <p className="mt-3 text-gray-400">{event.description}</p>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-ne-500/20 text-ne-300 rounded-full border border-ne-500/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;