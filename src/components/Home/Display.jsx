import vid from "../../assets/vid.mp4";

const Display = () => {
  return (
    <video className=" w-full h-[80vh] object-cover" autoPlay loop muted>
      <source src={vid} type="video/mp4" />
    </video>
  );
};

export default Display;
