import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Vue.js, Node.js, TypeScript, and cloud platforms like AWS. I'm also experienced with mobile development using React Native and have extensive knowledge of UI/UX design principles."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-stack application could take 2-6 months. I provide detailed timelines during the initial consultation phase."
    },
    {
      question: "Do you work with remote teams?",
      answer: "Absolutely! I have extensive experience working with distributed teams across different time zones. I use modern collaboration tools and follow agile methodologies to ensure smooth communication and project delivery."
    },
    {
      question: "What's your development process like?",
      answer: "I follow a structured approach: initial consultation, requirement analysis, design mockups, development with regular updates, testing, deployment, and ongoing support. I believe in transparent communication throughout the entire process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, I offer various support packages including bug fixes, security updates, performance optimizations, and feature enhancements. I believe in building long-term relationships with my clients."
    },
    {
      question: "How do you handle project pricing?",
      answer: "I offer both fixed-price and hourly billing options depending on the project scope. For larger projects, I prefer milestone-based payments. I provide detailed quotes after understanding your specific requirements."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Definitely! I can help with code reviews, bug fixes, performance improvements, feature additions, or complete refactoring of existing applications. I'm comfortable working with various codebases and technologies."
    },
    {
      question: "What makes you different from other developers?",
      answer: "I combine technical expertise with strong communication skills and business understanding. I focus on creating solutions that not only work well technically but also drive business value and provide excellent user experiences."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got questions? Here are some of the most common questions I receive from clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <button
          onClick={() => toggleFAQ(index)}
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300 font-semibold hover:font-semibold"
              >
          <h3 className="font-poppins font-medium text-lg text-white pr-4">
            {faq.question}
          </h3>
          <ChevronDown 
            className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
              activeIndex === index ? 'rotate-180' : ''
            }`}
          />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
          <div className="px-6 py-4">
            <p className="text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Still have questions?
          </p>
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_16px_0_rgba(34,211,238,0.7)]">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;