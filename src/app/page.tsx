'use client';

import Spline from '@splinetool/react-spline';
import NavBar from '@/components/NavBar';

const SPLINE_SCENE_URL = "https://prod.spline.design/lEFzWB8nYp-9YyBA/scene.splinecode";

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden">

      {/* Navigation Bar (z-index 20) */}
      <NavBar />

      {/* 2. Spline 3D Scene (z-index 0) */}
      <div className="absolute inset-0 z-0">
        <Spline scene={SPLINE_SCENE_URL} />
      </div>

      {/* 3. Hero Content Overlay (z-index 10) - ***MODIFICATION IS HERE***
          We use 'items-center' to vertically center the entire container (the 7xl div).
          This places the text roughly at the vertical center of the screen, making the
          font start *below* the boat scene. */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">

        {/* This container defines the width and centers the content horizontally */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

            {/* ***CONTENT BLOCK - Using margin-top to push it lower from the center point.*** */}
            {/* The content itself is set to align left */}
            <div className="text-left mt-8 sm:mt-64 md:mt-44">
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-tighter text-glow drop-shadow-2xl">
                    PiNt0
                </h1>

                <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-300 text-glow">
                    Stack Dev
                </h2>

                <p className="mt-4 text-xl text-gray-400 max-w-2xl text-glow">
                    Innovating at the intersection of software development, creative design, and user experience.
                </p>

                {/* 4. Call to Action Button Wrapper */}
                <div className="mt-12 w-fit pointer-events-auto">
                    <a
                        href="/projects"
                        className={`
                            px-10 py-4 text-lg font-medium rounded-full
                            text-white backdrop-filter backdrop-blur-sm
                            hover:scale-105
                            transition duration-500 transform shadow-2xl
                            border-animate
                        `}
                    >
                        Explore My Journey →
                    </a>
                </div>
            </div>
        </div>
      </div>
    <div 
          className="fixed bottom-0 right-0 w-42 h-15 bg-black z-[99]"
          style={{ 
              // Custom size to ensure full coverage of the watermark
              width: '250px', 
              height: '40px',
              // Offset slightly from the corner if necessary, or keep at 0
              bottom: '3vh',
              right: '0vh'
          }}
      >
      </div>
    </main>

  );
}