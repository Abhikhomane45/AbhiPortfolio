import { Briefcase, BarChart } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold bg-blue-800 text-blue-200 rounded-full shadow-sm mb-3">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-blue-600 to-purple-600">
          {/* Experience 1 */}
          <div className="relative pl-16">
            <div className="absolute left-1 top-2.5 bg-blue-500 rounded-full p-2">
              <Briefcase size={20} className="text-white" />
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-blue-600/30 transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Data Analyst Intern</h3>
                  <p className="text-purple-300 font-medium">KasNet Technologies</p>
                </div>
                <span className="px-4 py-1 bg-blue-900/60 text-blue-300 rounded-full text-sm font-medium whitespace-nowrap">
                  Jan – Mar 2025
                </span>
              </div>
              <div className="mt-4 pl-3 border-l-4 border-blue-500">
                <p className="text-gray-300 mb-2">
                  Worked with Microsoft Azure and Power BI to build IT solutions involving:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Cloud deployment and management</li>
                  <li>Data visualization and analytics</li>
                  <li>Business intelligence reporting</li>
                  <li>End-to-end data pipeline development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-16">
            <div className="absolute left-1 top-2.5 bg-purple-600 rounded-full p-2">
              <BarChart size={20} className="text-white" />
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-600/30 transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Power BI Intern</h3>
                  <p className="text-blue-300 font-medium">AICTE (Shell-Edunet Skills4Future)</p>
                </div>
                <span className="px-4 py-1 bg-purple-900/60 text-purple-300 rounded-full text-sm font-medium whitespace-nowrap">
                  Nov – Dec 2024
                </span>
              </div>
              <div className="mt-4 pl-3 border-l-4 border-purple-500">
                <p className="text-gray-300 mb-2">
                  Completed a 4-week internship focused on:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Advanced data modeling techniques</li>
                  <li>Interactive dashboard development</li>
                  <li>Data visualization best practices</li>
                  <li>Business analytics reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
