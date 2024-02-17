
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import {styles} from "../styles"
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Get the current location
  const location = useLocation();

  // Determine if we're at the homepage
  const isHomePage = location.pathname === "/";

  // Update the navigation links based on the current location
  useEffect(() => {
    if (!isHomePage) {
      setActive("Home");
    }
  }, [location, isHomePage]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex jus items-center py-3 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo of my initial (JB)"
            className="xs:w-16 xs:h-16 w-12 h-12 object-contain logo"
          />

          <div className="line-div">
            <div id="text">
              <div className="line">
                <p
                  className=" text-white text-[18px] mr-1  font-bold cursor-pointer flex sm:block  word fancy  "
                  id="channel-link"
                >
                  <span className="letter">J</span>
                  <span className="letter">a</span>
                  <span className="letter">r</span>
                  <span className="letter">o</span>
                  <span className="letter">s</span>
                  <span className="letter">l</span>
                  <span className="letter">a</span>
                  <span className="letter">v &nbsp;</span>
                  <span className="letter">| &nbsp; </span>
                  <span className="letter">B</span>
                  <span className="letter">a</span>
                  <span className="letter">r</span>
                  <span className="letter">a</span>
                  <span className="letter">b</span>
                  <span className="letter">á</span>
                  <span className="letter">š</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {isHomePage ? (
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-medium cursor-pointer hover:text-white text-[18px]`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          ) : (
            <li className="text-secondary font-medium cursor-pointer hover:text-white text-[18px]">
              <Link to="/">Home</Link>
            </li>
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="hamburger menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justify-end items-start flex-col  gap-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary "
                    } font-poppins font-medium cursor-pointer hover:text-white text-[18px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                ))
              ) : (
                <li className="text-secondary font-poppins font-medium cursor-pointer hover:text-white text-[18px]">
                  <Link
                    to="/"
                    onClick={() => {
                      setActive("Home");
                      setToggle(!toggle);
                    }}
                  >
                    Home
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar