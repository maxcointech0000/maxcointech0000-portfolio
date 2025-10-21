import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../../types';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate email sending (in real app, you'd use a service like EmailJS)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link as fallback
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `);
      
      window.open(`mailto:maxcointech1007@gmail.com?subject=${subject}&body=${body}`);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project and create innovative solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you need AI solutions, blockchain development, full-stack applications, or chatbot integration, 
                I'm here to help bring your vision to life with cutting-edge technology and exceptional craftsmanship.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <a
                href="mailto:maxcointech1007@gmail.com"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Email
                  </div>
                  <div className="text-gray-400 text-sm">maxcointech1007@gmail.com</div>
                </div>
              </a>

              <a
                href="https://discord.com/users/maxcointech0000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    Discord
                  </div>
                  <div className="text-gray-400 text-sm">maxcointech0000</div>
                </div>
              </a>

              <a
                href="https://t.me/maxcointech1007"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Telegram
                  </div>
                  <div className="text-gray-400 text-sm">maxcointech1007</div>
                </div>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20">
                <div className="text-2xl font-bold text-white mb-1">&lt; 24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-green-500/20">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Project Success</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project ideas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again or contact me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
