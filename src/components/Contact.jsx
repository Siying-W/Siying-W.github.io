import { Building, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <Mail className="w-10 h-10 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic discussions, or professional inquiries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <button 
                        onClick={(event) => {
                          navigator.clipboard.writeText('wangsiying@mail.shufe.edu.cn');
                          // Optional: Add a visual feedback
                          const button = event.target;
                          const originalText = button.textContent;
                          button.textContent = 'Copied!';
                          button.className = 'text-green-600 hover:text-green-800 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 after:w-full pb-1';
                          setTimeout(() => {
                            button.textContent = originalText;
                            button.className = 'text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1';
                          }, 2000);
                        }}
                        className="text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 break-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                      >
                        wangsiying@mail.shufe.edu.cn
                      </button>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/alice-wang-3b35a3130/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-900 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                      >
                        Alice Wang
                      </a>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                      <Building className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Institution</h3>
                      <p className="text-gray-700">
                        College of Business<br />
                        Shanghai University of Finance and Economics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form or Additional Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Areas</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-800 font-medium">Industrial Organization</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-800 font-medium">Spatial Economics</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-800 font-medium">Urban Economics</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-800 font-medium">International Trade</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-3">Collaboration Opportunities</h3>
                <p className="text-gray-700 text-sm">
                  I'm always interested in discussing potential research collaborations, 
                  particularly in areas related to spatial economics, urban development, 
                  and international trade analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
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
