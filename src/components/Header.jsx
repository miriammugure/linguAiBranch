import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-12 flex justify-between items-center w-full border-solid border-2 border-indigo-600 px-4 relative">

      <div>
        <h3 className="capitalize font-bold text-xl">tailwind</h3>
      </div>
  
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          <IoMenu />
        </button>
      </div>

     
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 right-0 w-64 h-screen bg-white border-solid border-2 border-indigo-600 z-40 md:hidden`}>
        <div className="flex justify-end p-4">
        
          <button onClick={toggleMenu} className="text-2xl">
            <ImCross />
          </button>
        </div>

        <ul className="flex flex-col justify-start h-full">
          <li className="p-4 hover:text-blue-800 hover:bg-gray-400">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="p-4 hover:text-blue-800 hover:bg-gray-400">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-4 hover:text-blue-800 hover:bg-gray-400">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="p-4 hover:text-blue-800 hover:bg-gray-400">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>

 
      <div className="hidden md:flex gap-5">
        <ul className="flex gap-5 font-semibold text-lg">
          <li className="hover:text-blue-800">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
