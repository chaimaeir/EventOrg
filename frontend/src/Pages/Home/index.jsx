import Navbar from "../../components/shared/navbar";
import Footer from "../../components/shared/footer";
import hero from "../../../public/images/1hero.jpg";
import sectionimg from "../../../public/images/img_image_23.png";
import traimage from "../../../public/images/culture.png";
import prolaunching from "../../../public/images/productlaunching.png";
import Ellipse from "../../../public/images/Ellipse.png";

const Home = () => {
  return (
    <>
      <div>
        
      <div className=" flex  flex-col">
        <Navbar />

        <div className="  flex-1 ">
          <div className="h-2">
          <img className="absolut z-[-1] w-full  " src={hero} alt="" />
          </div>
          <p className=" flex items-center justify-center z-1  h-full text-white font-semibold text-8xl font-imbue">
          Make Every Experience Magical
          </p>
        </div>
      </div>
      

        <section className="text-gray-700 body-font pl-28 mt-40">
          <div className="container  mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt- items-center text-center">
              <h1 className="font-imbue font-bold text-6xl mb-8 text-gray-900">
                About Us
              </h1>
              <p className="mb-8 leading-relaxed font-imbue text-3xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse a sapien justo. <br /> Nulla facilisis tristique
                imperdiet. Nullam a placerat odio. Sed in ex augue. <br />
                Aliquam porta consectetur lorem sit amet ultrices. <br />
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <button className="bg-purple-50 border-x-4 rounded-full shadow-2xl  items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2  inline-flex bg-F6F4FF">
                <span>View More</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover pt-18 object-center rounded "
                alt="hero"
                src={sectionimg}
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto flex pl-28 pr-16 flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-imbue font-bold text-6xl md:text-3xl mb-4 text-gray-900">
              Some Of Our Best Events
            </h1>
            <button className="bg-purple-50 ps-8 border-x-4 rounded-full shadow-2xl  flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 bg-F6F4FF">
              <span>View More</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="ml-[168px] mt-[px] ml-8 py-16 flex w-[74%] flex-col gap-[113px] self-start md:ml-0 md:w-full">
        <div className="flex flex-1 items-center ml-40 justify-between gap-5 md:flex-col">
          <div className="flex">
            <img
              src={traimage}
              alt="image"
              className=" h-[px] w-[100] rounded-tl-[180px] rounded-tr-[180px] object-cover"
            />
            <div className="flex w-[60%] flex-col gap-0.5 self-center pl-20 ">
              <div className="flex flex-col gap-[18px] pb-[110px] md:pb-5">
                <div className="flex self-start pb-10 sm:pb-5">
                  <p className="font-imbue font-bold text-3xl text-gray-900_01">
                    Traditional Weddings
                  </p>
                </div>
                <p className="font-imbue text-3xl font-bold text-gray-500">
                  We will stop at five different world-class ice cream shops on
                  this 1.5 mile 1.5 hour tour. At each ice cream store we will
                  explore the story behind the business and see what makes the
                  ice cream unique as you savor every…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="ml-[168px] mt-[px] ml-8 flex w-[74%] flex-col gap-[113px] self-start md:ml-0 md:w-full">
        <div className="flex flex-1 items-center ml-40 justify-between gap-5 md:flex-col">
          <div className="flex">
            <img
              src={prolaunching}
              alt="image"
              className="w-96	 h- w- rounded-tl-[180px] rounded-tr-[180px] object-cover"
            />
            <div className="flex w-[60%] flex-col gap-0.5 self-center pl-20 ">
              <div className="flex flex-col gap-[18px] pb-[110px] md:pb-5">
                <div className="flex self-start pb-10 sm:pb-5">
                  <p className="font-imbue font-bold text-3xl text-gray-900_01">
                    Product Launching
                  </p>
                </div>
                <p className="font-imbue font-bold text-3xl text-gray-500">
                  We will stop at five different world-class ice cream shops on
                  this 1.5 mile 1.5 hour tour. At each ice cream store we will
                  explore the story behind the business and see what makes the
                  ice cream unique as you savor every…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* testimonials */}

      <section className="py-20 sm:py-10">
        <div className="mx-auto max-w-66xl px-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-imbue text-3xl tracking-tight mt-10 text-slate-900 sm:text-5xl">
              What Our Customers Are Saying
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-3xl font-imbue tracking-tight">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-imbue  text-3xl">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          src={Ellipse}
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            {/* Repeat similar structure for other customer reviews */}
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-3xl font-imbue tracking-tight text-slate-900">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-imbue text-3xl">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          src={Ellipse}
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-3xl tracking-tight text-slate-900 font-imbue">
                        I love the fitness apparel and gear I purchased from
                        this site. The quality is exceptional and the prices are
                        unbeatable.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-3xl font-imbue text-slate-900">
                          Sheryl Berge
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          src={Ellipse}
                          alt=""
                          className="h-14 w-14 object-cover"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      
      {/* NOtify ME */}
      <section className="w-full max-w-5xl py-16 mx-auto p-5 lg:px-0">
        <div className=" p-6 md:p-10 rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
          <h3 className="text-3xl font-imbue   font-bold text-black text-center">
            Get notified when we have new event
          </h3>
          <br />
          <div className="input-form max-w-2xl mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center shadow-md rounded-lg justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className=" px-5 font-imbue text-3xl rounded-lg focus:outline-none border-white "
              />
            </div>
            <button className="bg-gradient-to-br from-red-700 to-black font-imbue w-full text-2xl tracking-wide  min-h-14  text-white  rounded-lg px-5  font-[500]">
              Notify Me
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
