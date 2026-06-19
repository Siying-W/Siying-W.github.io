import { Building, Linkedin, Mail } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const RESEARCH_AREAS = [
  'Industrial Organization',
  'Spatial Economics',
  'Urban Economics',
  'International Trade',
];

const Contact = () => {
  const headerRef = useScrollReveal();
  const contactCardRef = useScrollReveal({ threshold: 0.1 });
  const researchCardRef = useScrollReveal({ threshold: 0.1 });
  const setAreaRef = useStaggerReveal(RESEARCH_AREAS.length);

  return (
    <div className="w-full animated-gradient-bg relative overflow-hidden pt-16 sm:pt-20 pb-10 sm:pb-12">
      {/* Subtle floating blobs */}
      <div className="blob blob-animate-2 w-64 h-64 bg-primary-300/10 dark:bg-primary-500/8 top-20 -right-20" />
      <div className="blob blob-animate-3 w-48 h-48 bg-indigo-300/10 dark:bg-indigo-500/8 bottom-40 -left-10" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="reveal-fade-up text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full icon-pulse">
              <Mail className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Contact
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Information */}
            <div ref={contactCardRef} className="reveal-fade-left h-full">
              <div className="glass-card p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                      <button
                        onClick={(event) => {
                          navigator.clipboard.writeText('wangsiying@mail.shufe.edu.cn');
                          const button = event.target;
                          const originalText = button.textContent;
                          button.textContent = 'Copied!';
                          button.className = 'text-green-600 dark:text-green-400 hover:text-green-800 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 after:w-full pb-1';
                          setTimeout(() => {
                            button.textContent = originalText;
                            button.className = 'text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1';
                          }, 2000);
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                      >
                        wangsiying@mail.shufe.edu.cn
                      </button>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/alice-wang-3b35a3130/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                      >
                        Alice Wang
                      </a>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm rounded-full flex-shrink-0">
                      <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Institution</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        College of Business<br />
                        Shanghai University of Finance and Economics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas & Collaboration */}
            <div ref={researchCardRef} className="reveal-fade-right h-full" style={{ transitionDelay: '0.15s' }}>
              <div className="glass-card p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Areas</h2>

                <div className="space-y-3">
                  {RESEARCH_AREAS.map((area, index) => (
                    <div
                      key={area}
                      ref={setAreaRef(index)}
                      className="stagger-item flex items-center gap-3 p-4 bg-gray-50/60 dark:bg-dark-800/40 backdrop-blur-sm rounded-xl border border-gray-200/30 dark:border-dark-600/30 transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-dark-700/50 hover:translate-x-1"
                    >
                      <div className="w-2.5 h-2.5 bg-primary-500 dark:bg-primary-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
