import Navbar from "../components/shared/Navbar"
import events from "../assets/images/events.png";
import wedding from "../assets/images/wedding.png";
import engagement from "../assets/images/engagement.png";
import graduation from "../assets/images/graduation.png";
import anniversary from "../assets/images/anniversary.png";
import babyshower from "../assets/images/babyshower.png";
import birthday from "../assets/images/birthday.png";
import conference from "../assets/images/conference.png";
import teambuilding from "../assets/images/teambuilding.png";
import productlaunching from "../assets/images/productlaunching.png";
import Footer from "../components/shared/footer";
import pinkFlower from "../assets/images/pinkFlower.png"
import greenFlower from "../assets/images/greenFlower.png"

function Events() {
  return (
    <div>
      <div className="min-w-[420px] h-[50vh] md:h-[70vh] lg:h-screen mb-12  flex   flex-col">
        <Navbar />

        <div className=" relative flex-1 ">
          <img className="absolute z-[-1] w-full h-full object-cover rounded-[90px] " src={events} alt="" />
          <p className=" flex items-center justify-center z-10  h-full text-white font-semibold text-[7rem] md:text-[14rem] font-imbue">
            Events
          </p>
        </div>
      </div>

      <div className="min-w-[420px] flex flex-col  items-center justify-center  pt-5 ">
        <h1 className="text-[#213f2e] text-5xl md:text-7xl font-imbue  ">
          Celebration Events
        </h1>

        <img src={greenFlower} alt="" className="w-[300px] z-[-1] absolute mt-[880px] mr-[1150px] right-0" />

        <div className="flex flex-col md:flex-row items-center justify-center lg:gap-60 mt-12 w-full bg-[#fdf4e58c]">
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={wedding} alt="" />
          <img className="max-w-[350px] md:max-h-[500px] p-5" src={engagement} alt="" />
        </div>
      </div>

      <div className="min-w-[420px] flex flex-col md:flex-row lg:gap-60  items-center justify-center bg-[#fdf4e58c] ">
        <img className="max-w-[350px] md:max-h-[500px] p-5 " src={graduation} alt="" />
        <img className="max-w-[350px] md:max-h-[500px] p-5" src={anniversary} alt="" />
      </div>

      <div className="min-w-[420px] flex flex-col md:flex-row lg:gap-60 md:mt-40 relative items-center justify-center mb-10 md:mb-40 bg-[#fdf4e58c]">
        <img src={pinkFlower} alt="" className="max-w-[260px] z-[-1] absolute -rotate-45  right-0" />
        <img className="max-w-[350px] md:max-h-[500px] p-5 " src={babyshower} alt="" />
        <img className="max-w-[350px] md:max-h-[500px] p-5" src={birthday} alt="" />
        <img src={pinkFlower} alt="" className="max-w-[250px] z-[-1] rotate-45 absolute mr-[1300px] mt-20 right-0" />

      </div>

      <div className="min-w-[420px] flex flex-col  items-center justify-center">
        <h1 className="text-[#213f2e] text-4xl md:text-7xl font-imbue  ">
          Corporate Events
        </h1>

        <div className="flex flex-col md:flex-row lg:gap-60 mt-6 md:mt-12 bg-[#fdf4e58c] w-full items-center justify-center">
          <img src={greenFlower} alt="" className="max-w-[290px] z-[-1] absolute -rotate-12  right-0" />
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={conference} alt="" />
          <img className="max-w-[350px] md:max-h-[500px] p-5" src={teambuilding} alt="" />
        </div>

        <div className="flex  md:mt-20 bg-[#fdf4e58c] w-full justify-center">
          <img src={greenFlower} alt="" className="max-w-[250px] z-[-1] absolute rotate-180 mr-[1300px]  right-0" />
          <img className="max-w-[350px] md:max-h-[500px] p-5 " src={productlaunching} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
