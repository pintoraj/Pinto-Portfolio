import NavBar from '@/components/NavBar';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import Link from 'next/link';

// Contact Data remains the same
const contactData = [
  {
    icon: Mail,
    title: "Email",
    value: "mailto:pintoraj@gmail.com",
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

// Re-themed InfoCard component (Black/White/Gray only)
const InfoCard = ({ item }: { item: typeof contactData[0] }) => {
  const Icon = item.icon;
  // ACCENT COLOR: Light Gray/White
  return (
    <Link
      href={item.value}
      target={item.external ? "_blank" : "_self"}
      // Monochrome Card Style: Darker glass, subtle shadow, White border on hover
      className="relative backdrop-filter backdrop-blur-md bg-black p-6 rounded-2xl shadow-xl hover:shadow-gray-700/50 transition duration-500 transform hover:scale-[1.05] hover:rotate-z-1 border border-white/5 flex flex-col items-center text-center group overflow-hidden"
    >
      {/* GLOW EFFECT: Moving background gradient on hover (Pure Gray) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 via-gray-800/0 to-gray-800/40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none"></div>

      {/* ICON CONTAINER: Pulsing hover effect (Light Gray on Dark Gray) */}
      <div className="p-5 rounded-full bg-gray-900/50 text-gray-300 group-hover:bg-gray-800/80 group-hover:text-white transition duration-500 ease-in-out">
        <Icon className="w-8 h-8 group-hover:animate-pulse" />
      </div>

      <h3 className="text-2xl font-extrabold text-white mt-4 tracking-wide">{item.title}</h3>
      <p className="text-sm text-gray-400 mt-2 break-all group-hover:text-gray-200 transition duration-300">{item.label}</p>
    </Link>
  );
};


export default function ContactPage() {
  return (
    // MONOCHROME BACKGROUND: Deepest black
    <div className="min-h-screen pt-16 bg-gray-950 relative overflow-hidden">
      <NavBar />
      
      {/* Background radial gradient for depth (Pure Gray) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        {/* Using grays for ambient blur */}
        <div className="w-96 h-96 bg-gray-900 rounded-full mix-blend-lighten filter blur-3xl opacity-30 animate-blob absolute top-10 -left-4"></div>
        <div className="w-96 h-96 bg-gray-800 rounded-full mix-blend-lighten filter blur-3xl opacity-30 animate-blob absolute top-40 right-4 animate-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-3 animate-fade-in-down">
            {/* ACCENT COLOR: Light Gray/White */}
            <span className="text-gray-300">05.</span> Get In Touch 👋
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in">
           Let's connect and build something awesome. Feel free to reach out via any of the methods below!
          </p>
        </header>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactData.map((item, index) => (
            <div key={index} className={`animate-stagger-fade-in delay-${index * 100}`}>
              <InfoCard item={item} />
            </div>
          ))}
        </div>
        
        {/* Contact Form Section (Pure Gray) */}
        <section className="mt-24 max-w-3xl mx-auto p-8 lg:p-12 backdrop-filter backdrop-blur-xl bg-black/40 rounded-3xl shadow-3xl border border-gray-700/50 animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-white text-center mb-10 tracking-wider">
                <span className="text-gray-400">/</span> Send a Quick Message
            </h2>
            
            <form className="space-y-6">
                
                {/* MONOCHROME FORM FIELDS: Darkest input, White focus ring */}
                <div>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-4 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition duration-300 ease-in-out shadow-inner hover:bg-gray-900/70"
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-4 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition duration-300 ease-in-out shadow-inner hover:bg-gray-900/70"
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="w-full p-4 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white transition duration-300 ease-in-out shadow-inner hover:bg-gray-900/70"
                    ></textarea>
                </div>
                <div>
                    {/* BUTTON: High contrast White on Black primary color */}
                    <button 
                        type="submit" 
                        className="w-full flex items-center justify-center py-4 text-xl font-bold rounded-xl text-white bg-gray-700 hover:bg-gray-600 transition duration-300 shadow-lg shadow-black/50 transform active:scale-[0.98] active:translate-y-px group border border-gray-600"
                    >
                        <span className="mr-3">Send Message</span>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                </div>
            </form>
        </section>
        
        {/* Location Note - Gray accent */}
        <p className="mt-16 text-center text-md text-gray-500 flex items-center justify-center tracking-wider">
            <MapPin className="w-5 h-5 mr-2 text-gray-400 animate-bounce-slow"/> 
            Currently based inTamil Nadu, India.
        </p>
        
      </div>
    </div>
  );
}

// NOTE: Ensure your global CSS/Tailwind config includes the animation keyframes 
// (animate-blob, animate-fade-in-down, etc.) from the previous response.