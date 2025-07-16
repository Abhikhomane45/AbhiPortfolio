export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-900 text-blue-200 rounded-full mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2"></div>

          <ul className="space-y-8">
            <li className="relative">
              <div className="flex items-start md:justify-start">
                <div className="absolute left-0 md:left-1/2 -ml-3.5 top-4 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-gray-900 transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-900/50 text-blue-300 rounded-full mb-1">
                    2022 - 2026
                  </span>
                  <h3 className="text-xl font-bold text-blue-400">PES Modern College of Engineering, Pune</h3>
                  <p className="text-gray-300">B.Tech in Electronics and Computer Engineering</p>
                  <div className="mt-2 px-3 py-1 inline-block bg-gray-800 rounded-lg text-sm font-medium">
                    CGPA: <span className="text-green-400">9.48/10</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative">
              <div className="flex items-start md:justify-end">
                <div className="absolute left-0 md:left-1/2 -ml-3.5 top-4 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-gray-900 transform -translate-x-1/2"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:pl-8">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-900/50 text-purple-300 rounded-full mb-1">
                    2020 - 2021
                  </span>
                  <h3 className="text-xl font-bold text-purple-400">Fergusson College, Pune</h3>
                  <p className="text-gray-300">Higher Secondary Education</p>
                  <div className="mt-2 px-3 py-1 inline-block bg-gray-800 rounded-lg text-sm font-medium">
                    Percentage: <span className="text-green-400">90%</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}