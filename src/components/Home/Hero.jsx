import { BsArrowDown } from "react-icons/bs";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../functions/context";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { Wallpaper1 } from "../../assets/svg";
import { TestVideo } from "../../assets/video";

const Hero = () => {
  const { pageContent } = useGlobalContext();

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUserInteraction = () => {
    setIsMuted(false);
    videoRef.current.play();
  };

  useEffect(() => {
    if (!isMuted && videoRef.current) {
      videoRef.current.play();
    }
  }, [isMuted]);

  return (
    <div
      className="relative w-full h-screen"
      id="home"
      onClick={handleUserInteraction}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover   "
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster={Wallpaper1}
      >
        <source src={TestVideo} type="video/mp4" />
      </video>

      {/* Transparent black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

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
              <button className="bg-[#010101] p-3 self-start flex items-center gap-3 uppercase">
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
