import { BsArrowRight } from "react-icons/bs";

import { useGlobalContext } from "../../functions/context";

const RecentWorks = () => {
  const { projectsFromDB, pageContent } = useGlobalContext();

  return (
    <div className="bg-[#996AA0]" id="portfolio">
      <div className="max-w-[1240px] mx-auto py-10 md:py-40 px-5 sm:px-10 xl:px-0">
        <h1 className="font-bold text-white text-3xl md:text-[50px] md:leading-[52px] leading-[36px] ">
          Recent Works
        </h1>

        <div className="wrapper gap-7 md:gap-3 mt-10">
          {projectsFromDB?.map((project, idx) => (
            <a
              key={project.dateId}
              target="_blank"
              rel="noreferrer"
              href={project.projectLink}
              className={`box a${idx + 1} relative cursor-pointer`}
            >
              <div className="absolute w-full  h-full bg-[#00000059]  "></div>

              <div className="play-button ">▶</div>

              <img
                src={project?.imgUrl}
                alt={project?.projectName}
                className="w-full h-full object-cover cursor-pointer"
              />

              <p className="absolute bottom-1 bg-[#2d2d2d] p-1 rounded-sm left-1">
                {project.projectName}
              </p>
            </a>
          ))}
        </div>

        <div className="flex cursor-pointer">
          <a
            href={
              pageContent?.recentWorkLink
                ? pageContent?.recentWorkLink
                : "https://www.youtube.com/@adventourswithaisha"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 flex self-start items-center gap-3 my-6  text-white p-3 font-medium uppercase"
          >
            see More
            <div className="text-2xl">
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
