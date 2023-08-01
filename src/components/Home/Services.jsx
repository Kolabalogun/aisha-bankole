import videosvg from "../../assets/video.svg";
import soundsvg from "../../assets/sound.svg";
import colorsvg from "../../assets/color.svg";
import { useGlobalContext } from "../../functions/context";

const Services = () => {
  const { pageContent } = useGlobalContext();
  return (
    <div className="max-w-[1240px] mx-auto py-16 md:py-40 px-5 sm:px-10 xl:px-0  grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col">
        <h1 className="text-black text-3xl md:text-[52px] md:leading-[58px] leading-[36px] font-bold">
          {pageContent?.serviceTitle
            ? pageContent?.serviceTitle
            : "My professional design services"}
        </h1>

        <div className="h-[2px] w-1/2 my-4 md:my-7 bg-[#996AA0]"></div>

        <p className="">
          {pageContent?.serviceDescription
            ? pageContent?.serviceDescription
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam hic nulla soluta libero est adipisci, asperiores ex amet id, saepe numquam accusamus porro vero sed magni, repellendus iste error nobis corrupti atque tempore aut cupiditate labore. Tempora, eaque cum similique ex eveniet ipsum ea voluptate fugiat. Accusantium, doloribus quae."}
        </p>
      </div>
      <div className="flex  flex-col ">
        <div className="flex items-center mb-9 gap-7">
          <div className="h-[60px] w-24">
            <img
              src={
                pageContent?.serviceTypeIImgUrl
                  ? pageContent?.serviceTypeIImgUrl
                  : videosvg
              }
              alt=""
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className=" text-2xl md:text-3xl  md:leading-[50px] leading-[36px] font-semibold">
              {pageContent?.serviceTypeITitle
                ? pageContent?.serviceTypeITitle
                : "Video Editing"}
            </h1>
            <p className="">
              {pageContent?.serviceTypeIDescription
                ? pageContent?.serviceTypeIDescription
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam hic nulla soluta libero est adipisci, asperiores ex amet id."}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-9 gap-7">
          <div className="h-[60px] w-24">
            <img
              src={
                pageContent?.serviceTypeIIImgUrl
                  ? pageContent?.serviceTypeIIImgUrl
                  : soundsvg
              }
              alt=""
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className=" text-2xl md:text-3xl  md:leading-[50px] leading-[36px] font-semibold">
              {pageContent?.serviceTypeIITitle
                ? pageContent?.serviceTypeIITitle
                : "Sound Design"}
            </h1>
            <p className="">
              {pageContent?.serviceTypeIIDescription
                ? pageContent?.serviceTypeIIDescription
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam hic nulla soluta libero est adipisci, asperiores ex amet id."}
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-7">
          <div className="h-[60px] w-24">
            <img
              src={
                pageContent?.serviceTypeIIIImgUrl
                  ? pageContent?.serviceTypeIIIImgUrl
                  : colorsvg
              }
              alt=""
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className=" text-2xl md:text-3xl  md:leading-[50px] leading-[36px] font-semibold">
              {pageContent?.serviceTypeIIITitle
                ? pageContent?.serviceTypeIIITitle
                : "Color Correction"}
            </h1>
            <p className="">
              {pageContent?.serviceTypeIIIDescription
                ? pageContent?.serviceTypeIIIDescription
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam hic nulla soluta libero est adipisci, asperiores ex amet id."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
