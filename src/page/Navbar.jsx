import PropTypes from 'prop-types'; // Import PropTypes
import { IoNotifications } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = ({ handleSidebar, isSidebarOPen }) => {
  return (
    <div
      className={` h-[70px] ${
        isSidebarOPen ? "translate-x-0 w-full" : "translate-x-0 ml-0"
      } bg-white shadow-md px-2 transform transition-transform duration-500 ease-in-out box-border p-5`}
    >
      <div className="flex items-center justify-between h-full">
        <div>
          <FaBarsStaggered
            onClick={handleSidebar}
            className="cursor-pointer"
            size={25}
          />
        </div>

        <div>
          <IoNotifications className="text-indigo-500" size={25} />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired,  
  isSidebarOPen: PropTypes.bool.isRequired,  
};

export default Navbar;
