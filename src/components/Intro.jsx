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
    <div className="full-width-bg bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 sm:pt-20 pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-5xl lg:text-7xl font-bold text-primary-600 leading-tight">
                Siying (Alice) Wang
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Assistant Professor
              </h3>
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-gray-600">
                  College of Business
                </p>
                <p className="text-xl lg:text-2xl text-gray-600">
                  Shanghai University of Finance and Economics
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href={cvPdf}
                download
                className="btn-primary inline-flex items-center gap-2"
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={siyingPhoto}
                  alt="Siying Wang"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
