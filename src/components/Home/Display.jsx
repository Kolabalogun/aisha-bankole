import vid from "../../assets/vid.mp4";
import { useGlobalContext } from "../../functions/context";

const Display = () => {
  const { pageContent } = useGlobalContext();

  return (
    <video className=" w-full h-[80vh] object-cover" autoPlay loop muted>
      <source
        src={
          pageContent?.videoDisplayVidUrl
            ? pageContent?.videoDisplayVidUrl
            : vid
        }
        type="video/mp4"
      />
    </video>
  );
};

export default Display;
