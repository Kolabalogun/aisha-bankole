import { useGlobalContext } from "../../functions/context";
import dummyImg from "../../assets/dummy2.jpg";
import { TestVideo1 } from "../../assets/video";

const Display = () => {
  const { pageContent } = useGlobalContext();

  return (
    <video
      className=" w-full h-[80vh] object-cover"
      autoPlay
      loop
      muted
      poster={dummyImg}
      playsInline
    >
      <source
        src={
          pageContent?.videoDisplayVidUrl
            ? pageContent?.videoDisplayVidUrl
            : TestVideo1
        }
        // src={TestVideo1}
        type="video/mp4"
      />
    </video>
  );
};

export default Display;
