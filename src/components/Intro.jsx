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
      <div className="blob blob-animate-1 w-72 h-72 bg-primary-300/20 -top-20 -left-20" />
      <div className="blob blob-animate-2 w-96 h-96 bg-indigo-300/15 top-1/3 -right-32" />
      <div className="blob blob-animate-3 w-64 h-64 bg-cyan-300/15 bottom-10 left-1/4" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-reveal-line text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-reveal-line text-5xl lg:text-7xl font-bold gradient-text leading-tight">
                Siying (Alice) Wang
              </h2>
              <h3 className="text-reveal-line text-2xl lg:text-3xl font-semibold text-gray-700">
                Assistant Professor
              </h3>
              <div className="text-reveal-line space-y-2">
                <p className="text-xl lg:text-2xl text-gray-600">
                  College of Business
                </p>
                <p className="text-xl lg:text-2xl text-gray-600">
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

          {/* Photo */}
          <div className="flex justify-center lg:justify-end text-reveal-line" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Glow ring behind photo */}
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-400/30 to-indigo-400/30 blur-2xl group-hover:blur-3xl transition-all duration-700 scale-105" />

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/60 ring-1 ring-white/30">
                <img
                  src={siyingPhoto}
                  alt="Siying Wang"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/20 rounded-full blob-animate-1" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400/25 rounded-full blob-animate-2" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-400/20 rounded-full blob-animate-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
