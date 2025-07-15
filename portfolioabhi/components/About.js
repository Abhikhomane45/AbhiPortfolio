export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600">
          <p className="text-lg leading-relaxed mb-6">
            I am <span className="text-blue-400 font-medium">Abhijeet Khomane</span>, a B.Tech student in Electronics and Computer Engineering at PES Modern College of Engineering, Pune.
          </p>
          <p className="text-lg leading-relaxed">
            I'm passionate about technology-driven solutions with a strong foundation in cloud computing, data analytics, and web development. I enjoy creating efficient systems using Azure, Power BI, React, and Flask, bridging the gap between hardware and software through innovative applications.
          </p>
        </div>
      </div>
    </section>
  );
}