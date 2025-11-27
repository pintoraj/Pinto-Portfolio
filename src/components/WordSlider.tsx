// components/WordSlider.tsx
'use client';

import { Brush, Code, MapPlus, Plus, Repeat2, SplinePointer, Volleyball } from "lucide-react";
import React from "react";

// Data array for the slider
const words = [
    { text: 'Design', icon: SplinePointer },
    { text: 'Code', icon: Code },
    { text: 'Create', icon: Plus },
    { text: 'Repeat', icon: Repeat2 },
    { text: 'Music', icon: Volleyball },
    { text: 'Draw', icon: Brush },
    { text: 'Travel', icon: MapPlus },

];

export const WordSlider: React.FC = () => {
    return (
        // The visible window (hides overflow)
        <span className="slide overflow-hidden xl:h-11 md:h-9 h-5">
            {/* The wrapper that scrolls vertically */}
            <span className="wrapper">
                {words.map((word) => (
                    // Each slide item
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2 pl-3">
                        {/* Icon with Tailwind styling */}
                        <word.icon className="xl:size-10 md:size-10 size-3 p-1 rounded-full text-white bg-white/10 backdrop-blur-sm" />
                        {/* Text size, intentionally smaller than H1/H2 but prominent */}
                        <span className="xl:text-4xl md:text-3xl text-sm text-indigo-400 font-medium">{word.text}</span>
                    </span>
                ))}
            </span>

            {/*
              NOTE: Tailwind doesn't support complex keyframe animations directly. 
              The animation styles must be placed in global CSS or a styled component 
              for the visual effect to work.
            */}
            <style jsx global>{`
                .slide {
                    display: inline-block;
                    flex-direction: column;
                    transition: all cubic-bezier(0.71, 0.03, 0.34, 1);
                }

                .wrapper {
                    display: flex;
                    flex-direction: column;
                    /* 8 items, 21s cycle (8 * 2.625s per word) */
                    animation: wordSlider 21s infinite cubic-bezier(0.9, 0.01, 0.3, 0.99);
                }

                @keyframes wordSlider {
                    0% { transform: translateY(-0%); }
                    12.5% { transform: translateY(-12.5%); }
                    25% { transform: translateY(-25%); }
                    37.5% { transform: translateY(-37.5%); }
                    50% { transform: translateY(-50%); }
                    62.5% { transform: translateY(-62.5%); }
                    75% { transform: translateY(-75%); }
                    87.5% { transform: translateY(-87.5%); }
                    100% { transform: translateY(-100%); } /* Return to start */
                } 
            `}</style>
        </span>
    );
};