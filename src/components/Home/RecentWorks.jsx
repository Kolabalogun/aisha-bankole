import { BsArrowRight } from "react-icons/bs";

const RecentWorks = () => {
  return (
    <div className="bg-[#996AA0]">
      <div className="max-w-[1240px] mx-auto py-40  ">
        <h1 className="font-bold">Recent Works</h1>

        <div className="wrapper mt-10">
          <div className="box a">A</div>
          <div className="box b">B</div>
          <div className="box c">C</div>
          <div className="box d">D</div>
        </div>

        <button className="bg-purple-800 flex items-center gap-3 my-6 self-center text-white p-3 font-medium uppercase">
          see More
          <div className="text-2xl">
            <BsArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default RecentWorks;
