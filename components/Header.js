export default function Header() {
    return (
        <header className="flex items-center justify-between h-16 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-semibold">Panchi</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      );
}
