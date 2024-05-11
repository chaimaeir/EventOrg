import Navbar from "../shared/Navbar";
import eventsPic from "../../assets/images/events.png";
import wedding from "../../assets/images/wedding.png";
import engagement from "../../assets/images/engagement.png";
import graduation from "../../assets/images/graduation.png";
import anniversary from "../../assets/images/anniversary.png";
import babyshower from "../../assets/images/babyshower.png";
import birthday from "../../assets/images/birthday.png";
import conference from "../../assets/images/conference.png";
import teambuilding from "../../assets/images/teambuilding.png";
import productlaunching from "../../assets/images/productlaunching.png";
import Footer from "../shared/Footer";

function Events() {
  return (
    <div>
      <div className="min-w-[420px] h-[50vh] md:h-[70vh] lg:h-screen mb-12  flex   flex-col">
        <Navbar />

        <div className=" relative flex-1 ">
          <img className="absolute z-[-1] h-full " src={eventsPic} alt="" />
          <p className=" flex items-center justify-center z-10  h-full text-white font-semibold text-[7rem] md:text-[14rem] font-imbue">
            Events
          </p>
        </div>
      </div>

      <div className="min-w-[420px] flex flex-col  items-center justify-center  py-5 ">
        <h1 className="text-[#213f2e] text-5xl md:text-7xl font-imbue  ">
          Celebration Events
        </h1>

        <div className="flex flex-col md:flex-row items-center lg:gap-60 mt-12">
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={wedding} alt="" />
          <img className="max-w-[350px] md:max-h-[500px] p-5" src={engagement} alt="" />
        </div>
      </div>

      <div className="min-w-[420px] flex flex-col md:flex-row lg:gap-60 md:mt-40 items-center justify-center">
        <img className="max-w-[350px] md:max-h-[500px] p-5 " src={graduation} alt="" />
        <img className="max-w-[350px] md:max-h-[500px] p-5" src={anniversary} alt="" />
      </div>

      <div className="min-w-[420px] flex flex-col md:flex-row lg:gap-60 md:mt-40 items-center justify-center mb-10 md:mb-40">
        <img className="max-w-[350px] md:max-h-[500px] p-5 " src={babyshower} alt="" />
        <img className="max-w-[350px] md:max-h-[500px] p-5" src={birthday} alt="" />
      </div>

      <div className="min-w-[420px] flex flex-col  items-center justify-center  py-5 ">
        <h1 className="text-[#213f2e] text-4xl md:text-7xl font-imbue  ">
          Corporate Events
        </h1>

        <div className="flex flex-col md:flex-row lg:gap-60 mt-6 md:mt-12">
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={conference} alt="" />
          <img className="max-w-[350px] md:max-h-[500px] p-5" src={teambuilding} alt="" />
        </div>

        <div className="flex  md:mt-20 md:mb-20">
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={productlaunching} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
