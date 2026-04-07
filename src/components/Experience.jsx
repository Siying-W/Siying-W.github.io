import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const headerRef = useScrollReveal();
  const setTeachingRef = useStaggerReveal(3);
  const setRaRef = useStaggerReveal(2);
  const summaryRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="full-width-bg mesh-bg-2 pt-16 sm:pt-20">
      <div className="container-custom">
        <div ref={headerRef} className="reveal-fade-up text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full icon-pulse">
              <GraduationCap className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Teaching and research experience across various academic levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Teaching Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm rounded-full">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Teaching</h2>
            </div>

            <div className="space-y-6">
              <div ref={setTeachingRef(0)} className="stagger-item glass-card p-6 bg-gradient-to-br from-green-50/70 to-emerald-50/40 dark:from-green-900/20 dark:to-emerald-900/10 border-green-200/30 dark:border-green-800/20">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Urban Land Economics (2022W, 2023W)</h3>
                <p className="text-green-700 dark:text-green-400 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-200/60 dark:bg-green-800/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>

              <div ref={setTeachingRef(1)} className="stagger-item glass-card p-6 bg-gradient-to-br from-blue-50/70 to-sky-50/40 dark:from-blue-900/20 dark:to-sky-900/10 border-blue-200/30 dark:border-blue-800/20">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">International Economics (Undergraduate)</h3>
                <p className="text-blue-700 dark:text-blue-400 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-200/60 dark:bg-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>

              <div ref={setTeachingRef(2)} className="stagger-item glass-card p-6 bg-gradient-to-br from-purple-50/70 to-violet-50/40 dark:from-purple-900/20 dark:to-violet-900/10 border-purple-200/30 dark:border-purple-800/20">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Managerial Economics (MBA)</h3>
                <p className="text-purple-700 dark:text-purple-400 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-200/60 dark:bg-purple-800/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>
            </div>
          </div>

          {/* Research Assistant Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100/80 dark:bg-orange-900/30 backdrop-blur-sm rounded-full">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Research Assistant</h2>
            </div>

            <div className="space-y-6">
              <div ref={setRaRef(0)} className="stagger-item glass-card p-6 bg-gradient-to-br from-orange-50/70 to-amber-50/40 dark:from-orange-900/20 dark:to-amber-900/10 border-orange-200/30 dark:border-orange-800/20">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Leader of an undergraduate RA group</h3>
                <p className="text-orange-700 dark:text-orange-400 mb-2">University of British Columbia</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-200/60 dark:bg-orange-800/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  Research Assistant
                </div>
              </div>

              <div ref={setRaRef(1)} className="stagger-item glass-card p-6 bg-gradient-to-br from-indigo-50/70 to-violet-50/40 dark:from-indigo-900/20 dark:to-violet-900/10 border-indigo-200/30 dark:border-indigo-800/20">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">RA for Prof. Ken Kikkawa</h3>
                <p className="text-indigo-700 dark:text-indigo-400 mb-2">University of British Columbia</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-200/60 dark:bg-indigo-800/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  Research Assistant
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div ref={summaryRef} className="reveal-fade-up mt-16 text-center" style={{ transitionDelay: '0.2s' }}>
          <div className="glass-card p-8 bg-gradient-to-r from-primary-50/60 to-blue-50/60 dark:from-primary-900/20 dark:to-blue-900/20 border-primary-100/30 dark:border-primary-800/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              From teaching assistant roles to leading research groups, I've developed a comprehensive
              understanding of both undergraduate and graduate education while contributing to cutting-edge research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
