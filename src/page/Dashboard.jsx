import { Link } from "react-router-dom";

function SideBarLinks() {
  return (
    <div className="w-full shadow-md min-h-screen text-sm px-4 text-white font-bold bg-[#0E4A3B]">
      <div className="flex flex-col gap-4">
        <h3 className="mt-4">Dashboard</h3>
        <ul>
          <li>
            <Link to="/doctor" className="hover:text-[rgb(48,207,167)] text-sm">See Patient</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/treatmentScheduling" className="hover:text-[rgb(48,207,167)] text-sm">Treatment Scheduling</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarLinks;
