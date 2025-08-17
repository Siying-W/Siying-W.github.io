import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Experience = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <GraduationCap className="w-10 h-10 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teaching and research experience across various academic levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Teaching Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Teaching</h2>
            </div>

            <div className="space-y-6">
              {/* Urban Land Economics */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Urban Land Economics (2022W, 2023W)</h3>
                <p className="text-green-700 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>

              {/* International Economics */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">International Economics (Undergraduate)</h3>
                <p className="text-blue-700 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>

              {/* Managerial Economics */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Managerial Economics (MBA)</h3>
                <p className="text-purple-700 mb-2">University of British Columbia, Sauder School of Business</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Teaching Assistant
                </div>
              </div>
            </div>
          </div>

          {/* Research Assistant Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-full">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Research Assistant</h2>
            </div>

            <div className="space-y-6">
              {/* Undergraduate RA Group Leader */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">Leader of an undergraduate RA group</h3>
                <p className="text-orange-700 mb-2">University of British Columbia</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Research Assistant
                </div>
              </div>

              {/* RA for Prof. Ken Kikkawa */}
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">RA for Prof. Ken Kikkawa</h3>
                <p className="text-indigo-700 mb-2">University of British Columbia</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-200 text-indigo-700 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Research Assistant
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Journey</h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
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
