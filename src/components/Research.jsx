import { Award, ChevronDown, ChevronUp, FileText, TrendingUp } from "lucide-react";
import { useState } from "react";
import jmpWriteup from '/assets/JMP Write-up.pdf';
import jmpDraft from '/assets/JMP_Draft.pdf';

const Research = () => {
  const [showAbstract, setShowAbstract] = useState(false);
  
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <FileText className="w-10 h-10 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of industrial organization, spatial
            economics, and international trade
          </p>
        </div>

        <div className="space-y-12">
          {/* Publications */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full flex-shrink-0 self-center sm:self-start">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Environmental Regulations and International Trade: A
                  Quantitative Economic Analysis of World Pollution Emissions.
                </h3>
                <p className="text-gray-600 mb-3">
                  With Yuwan Duan, Ting Ji, Yi Lu.{" "}
                  <span className="font-semibold">
                    Journal of Public Economics, 2021.
                  </span>
                </p>
                <a 
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0047272721001572?via%3Dihub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-900 font-medium transition-all duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                >
                  Link to Paper →
                </a>
              </div>
            </div>
          </div>

          {/* Job Market Paper */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-full flex-shrink-0 self-center sm:self-start">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Are Highways Conduits or Barriers for Urban Travelers? A
                  Welfare Analysis using Smartphone Data.
                </h3>

                {/* Awards */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm justify-center sm:justify-start">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">
                      "Runner-up", Bank of Canada Graduate Student Paper Award,
                      2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm justify-center sm:justify-start">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">
                      "Honorable Mention", UEA North American Best Student Paper
                      Prize, 2024
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <a 
                    href={jmpDraft}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-900 font-medium transition-all duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                  >
                    Link to Draft
                  </a>
                  <a 
                    href={jmpWriteup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-900 font-medium transition-all duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                  >
                    Non-technical Write-up
                  </a>
                  <button 
                    onClick={() => setShowAbstract(!showAbstract)}
                    className="text-primary-600 hover:text-primary-900 font-medium transition-all duration-300 inline-flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full pb-1"
                  >
                    {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
                    {showAbstract ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
                
                {/* Abstract Text */}
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    showAbstract ? 'max-h-[2600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      This paper uses smartphone GPS data to study the impact of highways on intracity non-work travel within the Seattle MSA. Using a discrete choice framework, I show that destinations that are accessed by traveling on or across a highway are visited 17% less than other destinations, ceteris paribus. This effect is non-linear in travel distance and is especially significant for short trips by travelers in urbanized zones. I then quantify the welfare effects of two counterfactual scenarios with alternative highway systems using a quantitative urban model that incorporates non-work travel. I find that welfare increases by 10.2% if the urban highways are replaced with an underground system and by 9.0% if they are replaced with primary surface roads. For both exercises, residents in the urban core benefit from amenity improvements, albeit at the cost of reduced amenities in suburban zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work in Progress */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-full flex-shrink-0 self-center sm:self-start">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Language Choices and Cross Border Interactions: Pathways to a
                  Lingua Franca.
                </h3>
                <p className="text-gray-600 mb-3">
                  With Keith Head & Thierry Mayer
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Work in Progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
