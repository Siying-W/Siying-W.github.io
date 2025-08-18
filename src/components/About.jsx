import { BookOpen } from 'lucide-react';
import aboutPhoto from '/assets/about sq.jpg';

const About = () => {
  return (
    <div className="full-width-bg bg-white pt-16 md:pt-0">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 rounded-full">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h1>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I am an Assistant Professor in World Economy & Trade at the College of Business, 
                Shanghai University of Finance and Economics. I received my Ph.D. in Business 
                Administration from UBC in 2025.
              </p>
              
              <p>
                My research applies methods from industrial organizations to study topics in 
                spatial and urban economics, and international trade. I'm interested in getting 
                insights from the analysis of large-scale digital data.
              </p>
            </div>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <h3 className="font-semibold text-primary-800 mb-2">Research Focus</h3>
                <p className="text-primary-700 text-sm">
                  Industrial Organization, Spatial Economics, Urban Economics, International Trade
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Methodology</h3>
                <p className="text-primary-700 text-sm">
                  Large-scale Digital Data Analysis, Quantitative Methods
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutPhoto}
                  alt="About Siying Wang"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-primary-200 rounded-2xl -m-4 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
