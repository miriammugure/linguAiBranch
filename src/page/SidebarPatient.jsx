import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../Context/AuthContext"; // Import useAuth hook

const SidebarPatient = ({ isSidebarOPen, handleSidebar }) => {
  const { logout } = useAuth(); // Get the logout function from AuthContext

  // Handle sign out click
  const handleSignOut = () => {
    logout(); // Call the logout function
  };

  return (
    <div
      className={`fixed top-0 z-50 w-64 h-screen text-sm bg-white shadow-lg transform px-4 text-slate-700 py-4 ${
        isSidebarOPen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl bg-green-700 text-white rounded-md px-2 py-1 font-extrabold flex items-center gap-2 mb-5 p-4">
          AfyaNyumbani
        </h2>
        <RxCross2
          onClick={handleSidebar}
          className="cursor-pointer flex items-start"
          size={25}
        />
      </div>

      <nav className="flex-grow">
        <ul className="ml-2">
          <li className="p-sm font-medium p-2 flex">
            <span className="flex items-start gap-2 font-extrabold">
              Dashboard
            </span>
          </li>
          <li className="p-sm font-medium p-2 flex">
            <Link to="/patientsDashboard/patientsData" className="flex flex-row">
              <span className="flex items-start gap-2 font-extrabold">
                <LuLayoutDashboard size={20} />
               Your Data
              </span>
            </Link>
          </li>

          <li className="p-2">
            <button
              onClick={handleSignOut} // Call logout on click
              className=" font-extrabold flex items-start gap-2 text-sm "
            >
              <FaArrowAltCircleLeft size={20} />
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

SidebarPatient.propTypes = {
  isSidebarOPen: PropTypes.bool.isRequired, 
  handleSidebar: PropTypes.func.isRequired, 
};

export default SidebarPatient;
