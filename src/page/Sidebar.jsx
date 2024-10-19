import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isSidebarOPen, handleSidebar }) => {
  
  return (
    <div
      className={`fixed  top-0 z-50 w-64 h-screen text-sm bg-white shadow-lg transform px-4 text-slate-700   py-4  ${
        isSidebarOPen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className=" flex items-center justify-between">
        <h2 className="text-xl bg-blue-500 text-white rounded-md px-2 py-1 font-extrabold flex items-center gap-2 mb-5  p-4">
          GoldenHealth
        </h2>
        <RxCross2
          onClick={handleSidebar}
          className=" cursor-pointer flex items-start "
          size={25}
        />
      </div>

      <nav className="flex-grow">
        <ul className=" ml-2">
          <>
            <li className="p-sm font-medium p-2 flex  ">
              <Link to="/dashboard/home" className="flex flex-row ">
                <span className=" flex  items-start gap-2 font-extrabold ">
                  <LuLayoutDashboard
                    size={20}
                    className="border-black border-solid "
                  />
                  Dashboard
                </span>
              </Link>
            </li>
          </>
          <>
            <li className="p-sm font-medium p-2 ">
            <Link to="/dashboard/doctor" className="block">

                <span className=" flex items-center gap-2 font-extrabold">
                  <LuLayoutDashboard size={20} />
                  Patients List
                </span>
              </Link>
            </li>
            <li className="p-sm font-medium p-2 ">
              <Link to="/dashboard/treatmentScheduling" className="block">
                <span className=" flex items-center gap-2 font-extrabold">
                  <LuLayoutDashboard size={20} />
                 Treatment Scheduling
                </span>
              </Link>
            </li>



        
          </>

          <li onClick="" className="p-2">
            <div to="/signout" className="block font-extrabold ">
              <span className=" flex items-startgap-2 text-sm font-extrabold">
                <FaArrowAltCircleLeft className="" size={20} />
                Sign out{" "}
              </span>
            </div>
          </li>
        </ul>

      </nav>
    </div>
  );
};
Sidebar.propTypes = {
    isSidebarOPen: PropTypes.bool.isRequired, 
    handleSidebar: PropTypes.func.isRequired, 
  };
export default Sidebar;
