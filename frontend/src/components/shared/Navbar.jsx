import { Link } from 'react-router-dom';
import evorglogo from "../../assets/images/logoEvorg.png"
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white-800 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-[40px] flex justify-between items-center font-imbue text-black relative">
                <div className="hidden md:block"></div>
                
                {/* Logo */}
                <div className="hidden md:flex justify-center text-center items-center space-x-4">
                    <Link to="/home" className="text-2xl">Home</Link>
                    <Link to="/about" className="text-2xl">About</Link>
                    <Link to="/home">
                        <img className='object-cover h-[70px]' src={evorglogo} alt="" />
                    </Link>
                    <Link to="/events" className="text-2xl">Events</Link>
                    <Link to="/contact" className="text-2xl">Contact</Link>
                </div>
                
                {/* Menu Icon for Small Screens */}
                <div className="md:hidden">
                    <button onClick={menuOpen ? closeMenu : toggleMenu}>
                        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                
                {/* Sign In and Register Links */}
                <div className="flex items-center">
                    <Link to="/login" className="mr-4 text-[20px] md:text-2xl py-1 px-4 rounded-2xl bg-[#f0f0f0]">Sign In</Link>
                    <Link to="/register" className="text-[20px] md:text-2xl rounded-2xl py-1 px-3 text-[#f0f0f0] bg-black">Register</Link>
                </div>
                
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden absolute left-0 top-10">
                        <ul className="bg-white w-40 rounded-lg shadow-md text-center">
                            <li>
                                <Link to="/home" className="block py-2 px-4 text-lg text-black hover:bg-gray-200" onClick={closeMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 px-4 text-lg text-black hover:bg-gray-200" onClick={closeMenu}>About</Link>
                            </li>
                            <li>
                                <Link to="/events" className="block py-2 px-4 text-lg text-black hover:bg-gray-200" onClick={closeMenu}>Events</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-4 text-lg text-black hover:bg-gray-200" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
