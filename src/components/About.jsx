import { BookOpen } from 'lucide-react';
import aboutPhoto from '/assets/about sq.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const headerRef = useScrollReveal();
  const textRef = useScrollReveal({ threshold: 0.1 });
  const cardsRef = useScrollReveal({ threshold: 0.1 });
  const photoRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="full-width-bg mesh-bg-2 pt-16 sm:pt-20 pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div ref={headerRef} className="reveal-fade-up flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100/80 backdrop-blur-sm rounded-full icon-pulse">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h1>
            </div>

            <div ref={textRef} className="reveal-fade-up space-y-6 text-lg text-gray-700 leading-relaxed" style={{ transitionDelay: '0.15s' }}>
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
            <div ref={cardsRef} className="reveal-fade-up grid sm:grid-cols-2 gap-4 pt-6" style={{ transitionDelay: '0.3s' }}>
              <div className="glass-card p-6 bg-gradient-to-br from-primary-50/80 to-blue-50/60 border-primary-100/40">
                <h3 className="font-semibold text-primary-800 mb-2">Research Focus</h3>
                <p className="text-primary-700 text-sm">
                  Industrial Organization, Spatial Economics, Urban Economics, International Trade
                </p>
              </div>
              <div className="glass-card p-6 bg-gradient-to-br from-gray-50/80 to-slate-50/60 border-gray-200/40">
                <h3 className="font-semibold text-gray-800 mb-2">Methodology</h3>
                <p className="text-primary-700 text-sm">
                  Large-scale Digital Data Analysis, Quantitative Methods
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div ref={photoRef} className="reveal-fade-right flex justify-center lg:justify-end" style={{ transitionDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 to-indigo-300/20 rounded-2xl blur-xl scale-105 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/30">
                <img
                  src={aboutPhoto}
                  alt="About Siying Wang"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
