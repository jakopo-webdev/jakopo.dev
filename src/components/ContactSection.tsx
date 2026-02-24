import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
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
      href: "tel:+393319276043"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Perugia, Umbria, Italy",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-[6rem] px-6 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <p className="text-gray-300 leading-relaxed text-center max-w-xl">
            I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center space-x-4 w-full sm:w-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-5 hover:border-cyan-400/50 transition-colors duration-300 group"
              >
                <div className="shrink-0 bg-cyan-400/10 p-3 rounded-lg border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <div className="text-cyan-400">
                    {info.icon}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300 font-medium break-all">
                    {info.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;