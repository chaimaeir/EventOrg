import { Link } from 'react-router-dom';
import evorglogo from "../../assets/images/logoEvorg.png"

function Navbar() {
  return (

         <nav className="bg-white-800 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-[40px] flex justify-between items-center font-imbue text-black">
                
                <div className=''>
                    
                </div>

                <div className='flex justify-between gap-11 items-center'>
                    {/* Navigation Links */}
                    <ul className="flex space-x-9 ">
                        <li>
                            <Link to="/" className=" text-2xl">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-2xl">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* Logo */}
                    <Link to="/" className=" ">
                        <img className='object-cover h-[70px]' src={evorglogo} alt="" />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex space-x-9">
                        <li>
                            <Link to="/events" className=" text-2xl">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" text-2xl">
                                Contact
                            </Link>
                        </li>
                    </ul>    
                </div>
                {/* Sign In and Register Links */}
                <div className='flex '>
                    <Link to="/login" className=" mr-4 text-2xl py-1 px-4 rounded-2xl bg-[#f0f0f0]">Sign In</Link>
                    <Link to="/register" className=" text-2xl mr-[-50px] rounded-2xl py-1 px-3 text-[#f0f0f0] bg-black">Register</Link>
                </div>
                
            </div>
        </nav>
    );
}



  

export default Navbar