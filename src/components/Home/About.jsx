import author from "../../assets/author.png";

const About = () => {
  return (
    <div className="bg-[#996AA0]">
      <div className="max-w-[1240px] mx-auto py-40  grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col mr-8">
          <h1 className="text-black font-bold">
            I'm Aisha Bankole, a passionate video editor and skilled filmmaker
            with a wealth of experience.
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
            saepe numquam accusamus porro vero sed magni, repellendus iste error
            nobis corrupti atque tempore aut cupiditate labore. Tempora, eaque
            cum similique ex eveniet ipsum ea voluptate fugiat. Accusantium,
            doloribus quae.
          </p>
        </div>
        <div className="flex flex-col">
          <img src={author} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
