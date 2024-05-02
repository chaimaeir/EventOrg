import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Logo2 from "../../assets/images/logoEvorg.png";
function footer() {
  return (
    <div>
      <div className="bg-red-800">
        <div className="max-w-screen-lg px-4 sm:px-6 text-black sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <img src={Logo2} alt="image" />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation 
            </a>
            <a className="my-3 block" href="/#">
              Tutorials 
            </a>
            <a className="my-3 block" href="/#">
              Support 
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center 
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy 
            </a>
            <a className="my-3 block" href="/#">
              Conditions 
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA
            </a>
            <a className="my-3 block" href="/#">
              contact@company.com
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-800">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-black text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse gap-6 mt-4 flex-row flex">
            <a  href="/#" className="w-6 mx-1 text-3xl">
              <FaLinkedin />
            </a>
            <a href="/#" className="w-6 mx-1 text-3xl ">
              <FaFacebook />
            </a>
            <a href="/#" className="w-6 mx-1 text-3xl">
              <FiInstagram />
            </a>
          </div>
          <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default footer;