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
              href="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="/rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/rooms");
              }}
            >
              portfolio
            </Link>
            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={
                " text-[15px]   uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/contact");
              }}
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
          <ul className=" h-screen w-full bg-zinc-200 md:hidden  px-8">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 ">
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/about");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 ">
                About
              </li>
            </Link>

            <Link
              activeClass="active"
              to="/rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/rooms");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 ">
                Rooms
              </li>
            </Link>

            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 ">
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
