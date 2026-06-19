import { BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutPhoto from '/assets/about sq.jpg';

const About = () => {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.1 });
  const photoRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="full-width-bg mesh-bg-2 pt-16 sm:pt-20 pb-16">
      <div className="container-custom">
        {/* Section header */}
        <div ref={headerRef} className="reveal-fade-up flex items-center gap-3 mb-12">
          <div className="p-3 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full icon-pulse">
            <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>
        </div>

        {/* Overlapping photo + text layout */}
        <div className="relative">
          {/* Large photo — positioned behind, offset right */}
          <div ref={photoRef} className="reveal-fade-right hidden lg:block absolute top-0 right-0 w-[55%] h-full" style={{ transitionDelay: '0.1s' }}>
            <div className="sticky top-24 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl dark:shadow-dark-950/50">
                <img
                  src={aboutPhoto}
                  alt="About Siying Wang"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient fade into background on left edge */}
                <div className="photo-overlay-gradient from-left" />
              </div>
            </div>
          </div>

          {/* Text content — overlaps the photo on the left */}
          <div ref={contentRef} className="reveal-fade-left relative z-10 lg:w-[55%]" style={{ transitionDelay: '0.15s' }}>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="glass-card p-6 bg-gradient-to-br from-primary-50/80 to-blue-50/60 dark:from-primary-900/30 dark:to-blue-900/20 border-primary-100/40 dark:border-primary-800/30">
                <h3 className="font-semibold text-primary-800 dark:text-primary-300 mb-2">Research Focus</h3>
                <p className="text-primary-700 dark:text-primary-400 text-sm">
                  Industrial Organization, Spatial Economics, Urban Economics, International Trade
                </p>
              </div>
              <div className="glass-card p-6 bg-gradient-to-br from-gray-50/80 to-slate-50/60 dark:from-dark-800/60 dark:to-dark-800/40 border-gray-200/40 dark:border-dark-600/30">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Methodology</h3>
                <p className="text-primary-700 dark:text-primary-400 text-sm">
                  Large-scale Digital Data Analysis, Quantitative Methods
                </p>
              </div>
            </div>

            {/* Mobile photo — only visible on small screens */}
            <div className="lg:hidden mt-8 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl dark:shadow-dark-950/50">
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
