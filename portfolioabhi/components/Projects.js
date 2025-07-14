export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12 bg-gray-900 text-white">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-2">IoT-based Plant Disease Detection System</h4>
          <p>Designed hardware-software solution using sensors and image analysis to detect plant diseases and send alerts via IoT.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-2">IPL Data Analysis using Python & Power BI</h4>
          <p>Built dashboards highlighting team performance, win trends, and match insights using Pandas, Seaborn, and Power BI.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
          <p>Responsive personal website using HTML, CSS, and JavaScript to showcase skills and certifications.</p>
        </div>
      </div>
    </section>
  );
}