import { Award, FileText, TrendingUp } from "lucide-react";

const Research = () => {
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
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
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
                <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  Link to Paper →
                </button>
              </div>
            </div>
          </div>

          {/* Job Market Paper */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Are Highways Conduits or Barriers for Urban Travelers? A
                  Welfare Analysis using Smartphone Data.
                </h3>

                {/* Awards */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">
                      "Runner-up", Bank of Canada Graduate Student Paper Award,
                      2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">
                      "Honorable Mention", UEA North American Best Student Paper
                      Prize, 2024
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    Link to Draft
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    Non-technical Write-up
                  </button>
                  <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    Show Abstract
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Work in Progress */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
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
