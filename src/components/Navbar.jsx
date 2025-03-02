import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-600">
                    Flower Gallery
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Links */}
                <ul
                    className={`absolute md:static bg-white md:flex md:space-x-6 left-0 w-full md:w-auto transition-all duration-300 ease-in-out transform ${isOpen ? "top-12 opacity-100 scale-100" : "top-[-300px] opacity-0 scale-95"
                        } md:opacity-100 md:scale-100 md:top-0 p-4 md:p-0`}
                >
                    <li>
                        <Link
                            to="/"
                            className="block py-2 px-4 text-gray-800 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className="block py-2 px-4 text-gray-800 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="block py-2 px-4 text-gray-800 hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
