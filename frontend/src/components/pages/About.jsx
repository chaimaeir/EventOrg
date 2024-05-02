import React from "react";
import Navbar from "../shared/Navbar";
import aboutUs from "../../assets/images/aboutUs.png";
import celebration from "../../assets/images/celebration.png";
import corporate from "../../assets/images/corporate.png";
import ourMission1 from "../../assets/images/ourMission1.png";
import ourMission2 from "../../assets/images/ourMission2.png";
import ourMission3 from "../../assets/images/ourMission3.png";
import Footer from "../shared/Footer"

function About() {
  return (
    <div>
      <div className="h-screen flex  flex-col">
        <Navbar />

        <div className=" relative flex-1 ">
          <img className="absolute z-[-1] " src={aboutUs} alt="" />
          <p className=" flex items-center justify-center z-10  h-full text-white font-semibold text-[14rem] font-imbue">
            About Us
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center  py-5 ">
        <h1 className="text-[#213f2e] text-6xl font-imbue  ">
          Making Moments Memorable
        </h1>
        <p className="font-imbue text-2xl text-center text-black mt-9 w-[900px]">
          We are a full-service catering and events company serving all of
          Morocco . We help create extraordinary celebration,and corporate
          events by placing a strong emphasis on personalized customer service.
          Our approach is simple: We hold ourselves to exceptionally high
          standards because you deserve simply the finest.
        </p>

        <div className="flex gap-60 ">
          <img className="max-h-[500px] p-5 " src={celebration} alt="" />
          <img className="max-h-[500px] p-5" src={corporate} alt="" />
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center py-5">
        <h1 className="text-[#213f2e] text-6xl font-imbue mt-6 ">
          Our Mission
        </h1>

        <div className="flex gap-12 items-center justify-center py-8">
          <p className="font-imbue text-2xl text-center text-black w-[400px] max-h-[500px] p-5">
            We’re passionate about creating experiences and leaving lasting
            memories for our guests. Our commitment is to make every event a
            truly exceptional experience! Our inspiration is an ongoing
            dialogue; we persistently seek it and strive to inspire others
            through our commitment to excellence and unwavering passion.
          </p>
          <div className=" flex max-w-[700px] ml-[100] p-5">
            <img
              className="max-h-[350px] mt-32 z-[-1]"
              src={ourMission1}
              alt=""
            />
            <img
              className="max-h-[350px] ml-[-60px] z-10"
              src={ourMission2}
              alt=""
            />
            <img
              className="max-h-[350px] ml-[-70px] mt-40"
              src={ourMission3}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center py-8 font-imbue">
        <h1 className="text-[#213f2e] text-6xl font-imbue mt-6 ">
          OUR PROMISE TO YOU
        </h1>

        <div className="flex gap-16 items-center bg-[#f0e3e3] justify-center p-8 mt-12">
          <div className="flex flex-col p-5  ">
            <h3 className=" pb-5 text-4xl font-semibold text-[#b1170d] ">Service D'excellence</h3>
            <p className="text-2xl">
              We are committed to proactively identifying and meeting the needs
              of our colleagues, clients, and communities.
            </p>
          </div>

          <div className="flex flex-col p-5 ">
            <h3 className=" pb-5 text-4xl font-semibold text-[#b1170d] ">Service D'excellence</h3>
            <p className="text-2xl">
              We are committed to proactively identifying and meeting the needs
              of our colleagues, clients, and communities.
            </p>
          </div>
          <div className="flex flex-col p-5 ">
            <h3 className=" pb-5 text-4xl font-semibold text-[#b1170d] ">Service D'excellence</h3>
            <p className="text-2xl">
              We are committed to proactively identifying and meeting the needs
              of our colleagues, clients, and communities.
            </p>
          </div>
          <div className="flex flex-col p-5 ">
            <h3 className=" pb-5 text-4xl font-semibold text-[#b1170d] ">Service D'excellence</h3>
            <p className="text-2xl ">
              We are committed to proactively identifying and meeting the needs
              of our colleagues, clients, and communities.
            </p>
          </div>
          
        </div>

        <section className="w-full max-w-5xl  mx-auto p-5 lg:px-0">
        <div className=" p-6 md:p-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
          <h3 className="text-2xl font-imbue md:text-3xl lg:text-4xl font-bold text-[#213f2e] text-center">
            Get notified when we have new event
          </h3>
          <br />
          <div className="input-form max-w-2xl p-3 mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center shadow-md rounded-lg justify-center lg:justify-start gap-x-5 lg:gap-x-5 ">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="py-6 mr-4 px-5 font-imbue text-4xl rounded-lg  border w-full focus:outline-none border-white    "
              />
            </div>
            <button className="bg-gradient-to-br from-red-700 to-black font-imbue w-full text-xl  min-h-20 min-w-64 hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200 lg:w-1/3 text-white text-sm rounded-lg px-5 py-2.5 shadow-md group font-clash font-[500]">
              Notify Me
            </button>
          </div>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
