//

import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Link } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "./abouts", label: "About" },
    { to: "services", label: "Services" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="text-white p-4">
        <div className="max-sm:hidden text-md flex justify-between items-center mx-auto max-w-5xl">
          <ul className="flex flex-row space-x-4 cursor-pointer">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="hover:text-blue-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-md">Theresa</div>
          <div className="text-md cursor-pointer">
            Say Hi: theresa5@gmail.com
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center px-7 py-4 relative">
        <div className="text-white text-xl font-bold">THERESA</div>
        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center py-6 z-50 shadow-lg">
            <ul className="flex flex-col gap-6 text-lg font-semibold cursor-pointer">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm cursor-pointer">
              Say Hi: theresa5@gmail.com
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
