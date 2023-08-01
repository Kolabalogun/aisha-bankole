import { BsArrowDown } from "react-icons/bs";
import vid from "../../assets/vid4.mp4";
import dummyImg from "../../assets/dummy.jpg";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../functions/context";
import { Link } from "react-scroll";

const Hero = () => {
  const { pageContent } = useGlobalContext();

  return (
    <div className="relative w-full h-screen  " id="home">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        poster={dummyImg}
        muted
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Transparent black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Navbar */}
      <div className="max-w-[1240px] px-5 sm:px-10 xl:px-0 mx-auto">
        <Navbar />
      </div>

      {/* Caption */}
      <div className="max-w-[1240px] h-[80%] md:h-[85%] px-5 sm:px-10 xl:px-0 relative mx-auto">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white sm:px-4">
          <h1 className="font-medium leading-[1.2em] lg:text-[5rem] text-white md:text-[4rem] sm:text-5xl text-4xl">
            {pageContent?.homeSectionCaption
              ? pageContent?.homeSectionCaption
              : "I craft compelling videos that elevate businesses, brands, & captivate audiences."}
          </h1>

          <div className="flex mt-8 gap-4 items-center">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={900}
            >
              <button className="bg-purple-800 p-3 self-start flex items-center gap-3 uppercase">
                <span className="font-syne font-bold">About me</span>
                <div className="text-xl font-bold">
                  <BsArrowDown />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
