import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import useMediaQuery from "../Hook/useMediaQuery";
import { NavLinks } from "./links";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="relative flex items-center justify-center">
      {/* <div className="absolute  h-screen w-full "> </div> */}
      <div className={`w-full h-[80px]  bg-transparent  py-5  `}>
        <div className="flex py-5 justify-between items-center w-full ">
          <div className=" h-16  ">
            {/* <p className="uppercase font-semibold text-white ">Aisha </p>
            <p className="uppercase font-semibold text-white ">Bankole </p> */}

            <img src={logo} alt="logo" className="h-full  " />
          </div>

          {isAboveMediumScreens ? (
            <div>
              {NavLinks.map(({ title, link }, idx) => (
                <Link
                  key={idx}
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className={
                    " text-[15px] font-medium  uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
                  }
                >
                  {title}
                </Link>
              ))}
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src={menu} className="w-8 h-10 fill-white" alt="menu" />
            </button>
          )}
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-[1001] h-full w-[300px] bg-[#000] text-white drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={close} className="w-6 h-8 fill-white" alt="close" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-5 flex flex-col gap-10 text-2xl">
              {NavLinks.map(({ title, link }, idx) => (
                <Link
                  key={idx}
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={600}
                  className={
                    "text-base font-medium linked cursor-pointer py-2  mx-10 text-white  "
                  }
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
