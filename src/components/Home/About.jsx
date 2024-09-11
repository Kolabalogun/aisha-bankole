import { useGlobalContext } from "../../functions/context";

const About = () => {
  const { pageContent } = useGlobalContext();

  return (
    <div className="bg-[#010101] border-t-white border-t" id="about">
      <div className="max-w-[1240px] mx-auto py-16 space-y-10 md:py-40 px-5 sm:px-10 xl:px-0    ">
        <div className="flex flex-col mr-8">
          <h1 className="text-white    text-3xl md:text-[47px] md:leading-[50px] leading-[36px] font-bold">
            {pageContent?.aboutTitle
              ? pageContent?.aboutTitle
              : "I'm Shittu Abdulafiz, a passionate video editor and skilled filmmaker with wealth of experience."}
          </h1>
          {/* <div className="h-[2px] w-3/4 my-7 bg-[#fff]"></div> */}
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          {/* <img src={pageContent?.aboutImgUrl} alt="" /> */}

          <p className=" text-white">
            {pageContent?.aboutDescription
              ? pageContent?.aboutDescription
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam hic nulla soluta libero est adipisci, asperiores ex amet id, saepe numquam accusamus porro vero sed magni, repellendus iste error nobis corrupti atque tempore aut cupiditate labore. Tempora, eaque cum similique ex eveniet ipsum ea voluptate fugiat. Accusantium, doloribus quae."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
