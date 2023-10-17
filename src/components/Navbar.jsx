import { Link } from "react-scroll";
import { useState } from "react";

import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [nav, setnav] = useState(false);

  function handleNavClick() {
    setnav(!nav);
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* <div className="absolute  h-screen w-full "> </div> */}
      <div className={`w-full h-[80px]  bg-transparent  py-5  `}>
        <div className="flex justify-between items-center w-full ">
          <div className=" ">
            <p className="uppercase font-semibold text-white ">Aisha </p>
            <p className="uppercase font-semibold text-white ">Bankole </p>
          </div>

          <ul className="hidden md:flex ">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={40}
              duration={800}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2  m-4 text-white  "
              }
            >
              portfolio
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
            >
              Contact
            </Link>
          </ul>

          <div className="md:hidden cursor-pointer" onClick={handleNavClick}>
            {!nav ? (
              <img src={menu} className="w-8 h-10 fill-white" alt="menu" />
            ) : (
              <img src={close} className="w-6 h-8 fill-white" alt="close" />
            )}
          </div>
        </div>

        {nav && (
          <ul className=" h-screen  w-full bg-black md:hidden z-[1000]  px-8">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <li className="border-b-2  text-white border-zinc-300 w-full cursor-pointer py-3 ">
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/about");
              }}
            >
              <li className="border-b-2  text-white border-zinc-300 w-full cursor-pointer py-3 ">
                About
              </li>
            </Link>

            <Link
              activeClass="active"
              to="/rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/rooms");
              }}
            >
              <li className="border-b-2  text-white border-zinc-300 w-full cursor-pointer py-3 ">
                Rooms
              </li>
            </Link>

            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <li className="border-b-2  text-white border-zinc-300 w-full cursor-pointer py-3 ">
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
