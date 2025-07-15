export default function Projects() {
  const projects = [
    {
      title: "IoT-based Plant Disease Detection System",
      description: "Designed hardware-software solution using sensors and image analysis to detect plant diseases and send alerts via IoT.",
      technologies: ["IoT", "Python", "Computer Vision", "Arduino"],
      category: "Hardware/Software"
    },
    {
      title: "IPL Data Analysis using Python & Power BI",
      description: "Built dashboards highlighting team performance, win trends, and match insights using Pandas, Seaborn, and Power BI.",
      technologies: ["Python", "Power BI", "Pandas", "Data Visualization"],
      category: "Data Analytics"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal website built with modern web technologies to showcase skills and certifications.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-900 text-blue-200 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-gray-800 p-6 flex flex-col">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-900/30 text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300">
                      View Details
                    </button>
                    <button className="text-sm px-3 py-1 border border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-full transition-colors duration-300">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}