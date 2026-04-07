import { Building, Linkedin, Mail } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const headerRef = useScrollReveal();
  const contactCardRef = useScrollReveal({ threshold: 0.1 });
  const researchCardRef = useScrollReveal({ threshold: 0.1 });
  const setAreaRef = useStaggerReveal(4);
  const bottomRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="full-width-bg animated-gradient-bg relative overflow-hidden pt-16 sm:pt-20">
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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic discussions, or professional inquiries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div ref={contactCardRef} className="reveal-fade-left space-y-6">
              <div className="glass-card p-8">
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
            <div ref={researchCardRef} className="reveal-fade-right space-y-6" style={{ transitionDelay: '0.15s' }}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Areas</h2>

                <div className="space-y-4">
                  <div ref={setAreaRef(0)} className="stagger-item flex items-center gap-3 p-4 bg-blue-50/60 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-200/40 dark:border-blue-800/20 transition-all duration-300 hover:bg-blue-50/90 dark:hover:bg-blue-900/30 hover:translate-x-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800 dark:text-blue-300 font-medium">Industrial Organization</span>
                  </div>
                  <div ref={setAreaRef(1)} className="stagger-item flex items-center gap-3 p-4 bg-green-50/60 dark:bg-green-900/20 backdrop-blur-sm rounded-xl border border-green-200/40 dark:border-green-800/20 transition-all duration-300 hover:bg-green-50/90 dark:hover:bg-green-900/30 hover:translate-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 dark:text-green-300 font-medium">Spatial Economics</span>
                  </div>
                  <div ref={setAreaRef(2)} className="stagger-item flex items-center gap-3 p-4 bg-purple-50/60 dark:bg-purple-900/20 backdrop-blur-sm rounded-xl border border-purple-200/40 dark:border-purple-800/20 transition-all duration-300 hover:bg-purple-50/90 dark:hover:bg-purple-900/30 hover:translate-x-1">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-800 dark:text-purple-300 font-medium">Urban Economics</span>
                  </div>
                  <div ref={setAreaRef(3)} className="stagger-item flex items-center gap-3 p-4 bg-orange-50/60 dark:bg-orange-900/20 backdrop-blur-sm rounded-xl border border-orange-200/40 dark:border-orange-800/20 transition-all duration-300 hover:bg-orange-50/90 dark:hover:bg-orange-900/30 hover:translate-x-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-800 dark:text-orange-300 font-medium">International Trade</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-gradient-to-r from-primary-50/50 to-blue-50/50 dark:from-primary-900/20 dark:to-blue-900/20 border-primary-100/30 dark:border-primary-800/20">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Collaboration Opportunities</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I'm always interested in discussing potential research collaborations,
                  particularly in areas related to spatial economics, urban development,
                  and international trade analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div ref={bottomRef} className="reveal-fade-up mt-12 text-center" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Response Time</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                I typically respond to emails within 24-48 hours during weekdays.
                For urgent matters, please include "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
