import { Mail, MessageCircle, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              MaxCoinTech
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Senior Full Stack Developer specializing in AI, Blockchain, and innovative web solutions. 
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:max.coin.tech@gmail.com"
                className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://discord.com/users/maxcointech0000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://t.me/maxcointech1007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://github.com/maxcointech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>AI/ML Development</li>
              <li>Blockchain Solutions</li>
              <li>Full Stack Development</li>
              <li>Chatbot Integration</li>
              <li>Mobile App Development</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} MaxCoinTech. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for hire
            </span>
            <span>Response time: &lt; 24h</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;