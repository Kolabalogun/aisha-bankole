import { BsArrowDown } from "react-icons/bs";
import vid from "../../../assets/vid2.mp4";
import Navbar from "../../Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Transparent black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Navbar */}
      <div className="max-w-[1240px] mx-auto">
        <Navbar />
      </div>

      {/* Caption */}
      <div className="absolute top-1/2 left-[17%] transform -translate-y-1/2 text-white max-w-[1240px] px-4">
        <h1 className="font-medium leading-[1.2em] text-[5rem]">
          I craft compelling videos that elevate businesses, brands, & captivate
          audiences.
        </h1>

        <div className="flex mt-8 gap-4 items-center">
          <button className="bg-purple-800 p-3  self-start flex items-center gap-3  uppercase">
            <span className="font-syne font-bold">About me</span>
            <div className="text-xl font-bold">
              <BsArrowDown />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
