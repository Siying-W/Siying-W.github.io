import { Download, Mail } from 'lucide-react';
import cvPdf from '/assets/CV_Siying_Wang_aca.pdf';
import siyingPhoto from '/assets/Siying Wang photo sq.jpg';

const Intro = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="full-width-bg animated-gradient-bg relative overflow-hidden pt-16 sm:pt-20 pb-16">
      {/* Floating decorative blobs */}
      <div className="blob blob-animate-1 w-72 h-72 bg-primary-300/20 dark:bg-primary-500/10 -top-20 -left-20" />
      <div className="blob blob-animate-2 w-96 h-96 bg-indigo-300/15 dark:bg-indigo-500/10 top-1/3 -right-32" />
      <div className="blob blob-animate-3 w-64 h-64 bg-cyan-300/15 dark:bg-cyan-500/8 bottom-10 left-1/4" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-reveal-line text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-reveal-line text-5xl lg:text-7xl font-bold gradient-text leading-tight">
                Siying (Alice) Wang
              </h2>
              <h3 className="text-reveal-line text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Assistant Professor
              </h3>
              <div className="text-reveal-line space-y-2">
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
                  College of Business
                </p>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
                  Shanghai University of Finance and Economics
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-reveal-line flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href={cvPdf}
                download
                className="btn-primary btn-glow inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Photo — circle with gradient ring */}
          <div className="flex justify-center lg:justify-end text-reveal-line" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Soft glow behind */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-400/20 to-indigo-500/20 dark:from-primary-500/10 dark:to-indigo-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110" />

              {/* Gradient border ring */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-primary-400 via-indigo-400 to-cyan-400 dark:from-primary-500 dark:via-indigo-500 dark:to-cyan-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-900">
                  <img
                    src={siyingPhoto}
                    alt="Siying Wang"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
