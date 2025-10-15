import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const headerData = {
  logo: logo,
  leftMenu: [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact", href: "/" },
  ],
  rightMenu: [
    { name: "Galaxies", href: "/" },
    { name: "Solar System", href: "/" },
    { name: "Earth", href: "/" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          {/* Desktop Left Menu */}
          <div className="desktop-left-menu">
            {headerData.leftMenu.map((item) => (
              <Link key={item.name} to={item.href} className="menu-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <Link to={"/"} className="logo-container">
            <img src={headerData.logo} alt="METEORA" />
          </Link>

          {/* Desktop Right Menu */}
          <div className="desktop-right-menu">
            {headerData.rightMenu.map((item) => (
              <Link key={item.name} to={item.href} className="menu-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="mobile-toggle">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="mobile-menu">
          {[...headerData.leftMenu, ...headerData.rightMenu].map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setOpen(false)}
              className="mobile-menu-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
