export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Abhijeet Khomane</h1>
      <nav className="space-x-4 hidden md:block">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#education" className="hover:text-blue-400">Education</a>
        <a href="#experience" className="hover:text-blue-400">Experience</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
    </header>
  );
}