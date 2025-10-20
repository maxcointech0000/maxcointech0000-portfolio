import { useEffect, useState } from 'react';
import { ChevronDown, Github, Mail, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Senior Full Stack Developer';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-400/30 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent animate-fade-in">
            MaxCoinTech
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 font-light mb-6 h-12">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
        </div>

        {/* Expertise badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['AI/ML', 'Blockchain', 'Full Stack', 'Chatbots', 'Mobile Apps'].map((skill, index) => (
            <div
              key={skill}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-200 font-medium animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          8+ years of experience crafting innovative solutions across AI, blockchain, and full-stack development. 
          Transforming ideas into cutting-edge digital experiences.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="mailto:daniellaura235@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="https://discord.com/users/maxcointech0000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Discord
          </a>
          <a
            href="https://t.me/maxcointech1007"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Telegram
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProjects}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
