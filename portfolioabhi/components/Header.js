export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-gray-900 shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Abhijeet Khomane</h1>
      <nav className="flex items-center space-x-4">
        <div className="md:hidden">
         
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#education" className="text-white hover:text-blue-400 transition-colors duration-300">Education</a>
          <a href="#experience" className="text-white hover:text-blue-400 transition-colors duration-300">Experience</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}
