import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import chat from "../../assets/chat.svg";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto  pt-40 pb-6   gap-[200px]">
      <div className="flex flex-col items-center">
        <h1 className="text-black font-bold">Get in touch.</h1>
        <h1 className="text-black font-bold">Let's talk about your project.</h1>

        <div className="h-[2px] w-1/4 mb-1 mt-7 bg-[#996AA0]"></div>
        <div className="h-[2px] w-1/2 mt-1 mb-7 bg-[#996AA0]"></div>
        <div className="grid grid-cols-3 gap-[200px] ">
          <div className="flex  mb-9 gap-3">
            <div className="h-[10px] w-10">
              <img src={email} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Email</h1>
              <p className="">aishabankssss@gmail.com</p>
            </div>
          </div>
          <div className="flex mb-9 gap-3">
            <div className="h-[10px] w-10">
              <img src={phone} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Phone</h1>
              <p className="">+234 80 9000 1000</p>
            </div>
          </div>

          <div className="flex  gap-3">
            <div className="h-[10px] w-10">
              <img src={chat} alt="" className="object-cover" />
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Socials</h1>
              <p className="">IG: aisha_bank</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full  mt-20 bg-[#000]"></div>
    </div>
  );
};

export default Contact;
