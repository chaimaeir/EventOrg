import Navbar from "../components/shared/Navbar";
import home from "../assets/images/home.png";
import secondImg from "../assets/images/secondHomeImg.png";
import Footer from "../components/shared/footer";
import bestevent1 from "../assets/images/bestevent1.png"
import bestevent2 from "../assets/images/bestevent2.png"
import flower from "../assets/images/flower.png"
import greenFlower from "../assets/images/greenFlower.png"


function Home() {
  return (
    <div>
      <div className="min-w-[420px] h-[50vh] md:h-[70vh] lg:h-screen  flex   flex-col">
        <Navbar />

        <div className=" relative flex-1  ">
          <img className="absolute z-[-1] h-full " src={home} alt="" />
          <p className=" flex items-center justify-center z-10  h-full text-white font-semibold text-[2rem] md:text-[3rem] lg:text-[5rem] font-imbue">
            Make Every Experience Magical
          </p>
        </div>
      </div>

      <div className=" min-w-[317px] md:flex items-center justify-center  lg:gap-16 m-16  md:py-20 md:my-5  relative z-10 ">
      <img src={flower} alt="" className=" absolute max-w-[300px] rotate-180 z-[-1] ml-[1300px] mb-10" />

        <div className="flex flex-col items-start justify-center  max-w-[500px]   ">
          <div className=" ">
            <h1 className="text-[#213f2e] text-4xl lg:text-6xl  md:ml-9 font-imbue  ">
              About Us
            </h1>
            <p className="font-imbue text-[19px] md:text-[21px] lg:text-2xl  md:ml-6 text-black mt-9 md:w-[500px]">
              We are a full-service catering and events company serving all ofpx
              Morocco . We help create extraordinary celebration,and corporate
              events by placing a strong emphasis on personalized customer service.
              Our approach is simple: We hold ourselves to exceptionally high
              standards because you deserve simply the finest.
            </p>
          </div>

        </div>

        <div className=" ">
          <img
            className="max-h-[350px] md:max-h-[500px] min-w-[260px] p-5 "
            src={secondImg}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col min-w-[416px]  items-center justify-center py-5 relative z-10 bg-[#fffec6]">

        <h1 className="text-[#213f2e] text-4xl lg:text-5xl  font-imbue font-semibold my-6 ">
          SOME OF OUR BEST EVENTS
        </h1>

        <div className="flex md:gap-12 ml-6  justify-center items-start py-8">
        <img src={greenFlower} alt="" className=" absolute max-w-[280px]  z-[-1] ml-[-850px] mt-20 " />

          <img
            className="max-h-[250px] md:max-h-[300px] z-[-1]"
            src={bestevent1}
            alt=""
          />

          <p className="font-imbue text-[15px]  md:text-2xl md:mt-10  text-black w-[400px] max-h-[500px] p-5">
            We’re passionate about creating experiences and leaving lasting
            memories for our guests. Our commitment is to make every event a
            truly exceptional experience! Our inspiration is an ongoing
            dialogue; we persistently seek it and strive to inspire others
            through our commitment to excellence and unwavering passion.
          </p>
        </div>

        <div className="flex md:gap-12 ml-6  justify-center items-start py-8">
          <img
            className="max-h-[250px] md:max-h-[300px] z-[-1]"
            src={bestevent2}
            alt=""
          />

          <p className="font-imbue text-[15px] md:text-2xl md:mt-10  text-black w-[400px] max-h-[500px] p-5">
            We’re passionate about creating experiences and leaving lasting
            memories for our guests. Our commitment is to make every event a
            truly exceptional experience! Our inspiration is an ongoing
            dialogue; we persistently seek it and strive to inspire others
            through our commitment to excellence and unwavering passion.
          </p>

        </div>



        <section className="w-full max-w-5xl min-w-[416px] mx-auto p-5 lg:px-0 ">
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
                  className="py-6 mr-4 px-5 font-imbue text-2xl md:text-4xl rounded-lg  border w-full focus:outline-none border-white    "
                />
              </div>
              <button className="bg-gradient-to-br from-[#213f2e] to-black font-imbue w-full text-xl  min-h-20 min-w-64 hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200 lg:w-1/3 text-white text-sm rounded-lg px-5 py-2.5 shadow-md group font-clash font-[500]">
                Notify Me
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      
    </div>
  );
}

export default Home;
