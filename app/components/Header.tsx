import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-5 px-5 flex justify-between items-center relative z-50 bg-black/50 backdrop-blur-md">
      <h1 className="text-lg font-bold">aadn-fitness</h1>

      <nav>
        <ul className="flex space-x-5 sm:space-x-10">
          <li className="group">
            <Link href="/" className="relative">
              Início
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="#services" className="relative">
              Serviços
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link href="#plans" className="relative">
              Planos
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        className="px-3 py-2 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        href="#contact"
      >
        Contato
      </Link>
    </header>
  );
};

export default Header;
