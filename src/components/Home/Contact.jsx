import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import fb from "../../assets/fb.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import video1 from "../../assets/video1.svg";
import { useGlobalContext } from "../../functions/context";

const Contact = () => {
  const { pageContent } = useGlobalContext();

  return (
    <div
      className="max-w-[1240px] mx-auto  md:pt-32 pb-6 pt-10  px-5 sm:px-10 xl:px-0  "
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-black text-3xl md:text-[50px] md:leading-[52px] leading-[36px] font-bold">
          Get in touch.
        </h1>
        <h1 className="text-black text-3xl md:text-[50px] md:leading-[52px] leading-[36px] font-bold text-center">
          Let's talk about your project.
        </h1>

        <div className="h-[2px] w-1/4 mb-1 mt-7 bg-[#996AA0]"></div>
        <div className="h-[2px] w-1/2 mt-1 mb-7 bg-[#996AA0]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[200px] ">
          <div className="flex  mb-9 gap-3">
            <div className="h-[10px] w-10">
              <img src={email} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Email</h1>
              <a
                href={`mailto:${pageContent?.contactEmail}`}
                className="cursor-pointer"
              >
                {pageContent?.contactEmail
                  ? pageContent?.contactEmail
                  : "aisha1@gmail.com"}
              </a>
            </div>
          </div>
          <div className="flex mb-9 gap-3">
            <div className="h-[10px] w-10">
              <img src={phone} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Phone</h1>
              <a
                href={`tel:+${pageContent?.contactPhone}`}
                className="cursor-pointer"
              >
                {pageContent?.contactPhone
                  ? pageContent?.contactPhone
                  : "+1 (717) 982 4417"}
              </a>
            </div>
          </div>

          <div className="flex  gap-3">
            <div className="h-[10px] w-10">
              <img src={video1} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Youtube</h1>
              <a
                target="_blank"
                rel="noreferrer"
                href={pageContent?.contactYoutubeLink}
              >
                {pageContent?.contactYoutubeName
                  ? pageContent?.contactYoutubeName
                  : "@AdventourswithAisha"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[1px] w-full  mt-40 bg-[#000]"></div> */}

      <div className="flex flex-col items-center justify-center bg-white py-[80px]">
        <div className="flex">
          <a
            href={pageContent?.footerTwitterLink}
            target={"_blank"}
            rel="noreferrer"
            className="rounded-[50px] p-2 bg-black mx-3 hover:bg-twitter cursor-pointer hover:bg-[#987efc]"
          >
            <img src={twitter} alt="twitter" className="h-5" />
          </a>
          <a
            href={pageContent?.footerFacebookLink}
            target={"_blank"}
            rel="noreferrer"
            className="rounded-[50px] bg-[#987efc] p-2  mx-3 cursor-pointer relative hover:bg-[#000]"
          >
            <img src={instagram} alt="instagram1" className="h-5 " />
          </a>
          <a
            href={pageContent?.footerInstagramLink}
            target={"_blank"}
            rel="noreferrer"
            className="rounded-[50px] p-2 bg-black hover:bg-ig  mx-3 cursor-pointer hover:bg-[#987efc]"
          >
            <img src={instagram} alt="instagram" className="h-5" />
          </a>

          <a
            href={pageContent?.footerLinkedInLink}
            target={"_blank"}
            rel="noreferrer"
            className="rounded-[50px] p-2 hover:bg-linked  bg-black mx-3 cursor-pointer hover:bg-[#987efc]"
          >
            <img src={linkedin} alt="linkedin" className="h-4" />
          </a>
        </div>

        <p className="text-black my-8 font-semibold ">Aisha Bankole</p>
        <a
          href="https://ibrahimkolabalogun.web.app/"
          target={"_blank"}
          rel="noreferrer"
          className="text-black font-medium mt-8  mb-[-60px] text-[15px]"
        >
          Developed by <span className="">Ibrahim</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
