import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  // Helper to check if form is valid
  const isFormValid = () =>
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.subject.trim() !== '' &&
    formData.message.trim() !== '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 6000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jakopozhegrova.business@gmail.com",
      href: "mailto:jakopozhegrova.business@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+39 3319276043",
      href: "#"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Perugia, Umbria, Italy",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-[6rem] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-cyan-400/10 p-3 rounded-lg border border-cyan-400/20">
                    <div className="text-cyan-400">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <a href={info.href} className="text-white hover:text-cyan-400 transition-colors duration-300">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="project">New Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

                <button
                type="submit"
                disabled={!isFormValid() || isSubmitting || isSubmitted}
                className={`w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300
                  ${!isFormValid()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-cyan-300 hover:shadow-[0_0_16px_0_rgba(34,211,238,0.7)]'
                  }
                  ${(isSubmitting || isSubmitted) ? 'hover:bg-cyan-400 hover:shadow-none' : ''}`
                  
                }>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                  </>
                ) : (
                  <>
                  <Send className="w-5 h-5" />
                  Send Message
                  </>
                )}
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;