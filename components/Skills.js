export default function Skills() {
  const skills = [
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Microsoft Azure", icon: "☁️" },
        { name: "Azure AI", icon: "🤖" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "📦" }
      ]
    },
    {
      category: "Data Analytics",
      items: [
        { name: "Power BI", icon: "📊" },
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "SQL", icon: "🗃️" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "📜" },
        { name: "HTML/CSS", icon: "🎨" },
        { name: "Flask", icon: "🍶" }
      ]
    },
    {
      category: "IoT & Hardware",
      items: [
        { name: "Arduino", icon: "🔌" },
        { name: "Embedded C", icon: "💾" },
        { name: "Raspberry Pi", icon: "🍓" },
        { name: "Computer Vision", icon: "👁️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-900 text-purple-200 rounded-full mb-4">
            My Toolbox
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center">
                <span className="mr-2">{skillCategory.icon || '✨'}</span>
                {skillCategory.category}
              </h3>
              <ul className="space-y-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-lg mr-2">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously learning and adding new technologies to my skillset. 
            Currently exploring <span className="text-blue-400">DevOps practices</span> and 
            <span className="text-purple-400"> AI/ML implementations</span>.
          </p>
        </div>
      </div>
    </section>
  );
}