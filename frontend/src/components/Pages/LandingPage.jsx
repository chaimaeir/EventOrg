import { Link } from 'react-router-dom';

function LandingPage() {
  return (

         <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                    </li>
                </ul>

                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">
                    Your Logo
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/events" className="text-white hover:text-gray-300">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Sign In and Register Links */}
                <div>
                    <Link to="/login" className="text-white mr-4 hover:text-gray-300">Sign In</Link>
                    <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                </div>
            </div>
        </nav>
    );
}



  

export default LandingPage
