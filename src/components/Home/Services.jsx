import videosvg from "../../assets/video.svg";
import soundsvg from "../../assets/sound.svg";
import colorsvg from "../../assets/color.svg";

const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto  py-40  grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="flex flex-col">
        <h1 className="text-black font-bold">
          My professional design services
        </h1>

        <div className="h-[2px] w-1/2 my-7 bg-[#996AA0]"></div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
          saepe numquam accusamus porro vero sed magni, repellendus iste error
          nobis corrupti atque tempore aut cupiditate labore. Tempora, eaque cum
          similique ex eveniet ipsum ea voluptate fugiat. Accusantium, doloribus
          quae.
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center mb-9 gap-7">
          <div className="h-[60px] w-24">
            <img src={videosvg} alt="" className="object-cover" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">Video Editing</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
            </p>
          </div>
        </div>
        <div className="flex items-center mb-9 gap-7">
          <div className="h-[60px] w-24">
            <img src={soundsvg} alt="" className="object-cover" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">Sound Design</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-7">
          <div className="h-[60px] w-24">
            <img src={colorsvg} alt="" className="object-cover" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">Color Correction</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
