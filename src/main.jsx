
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Doctor from "./page/Doctor";
// import SideBarLinks from "./page/Dashboard";
import SidebarDoctor from "./page/SidebarDoctor";
import PatientAnalytics from "./page/PatientAnalytics";
import TreatmentScheduling from "./page/TreatmentScheduling";
import Navbar from "./page/Navbar";

const Main = () => {
  const [isSidebarOPen, setIsSidebarOpen] = useState(true);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen);

  return (
    <div>
      <Navbar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <SidebarDoctor handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <div className={`${isSidebarOPen ? "md:ml-64" : "ml-0 items-center flex justify-center"}`}>
        

        <Routes>
          < Route path="/navbar" element={<Navbar/>}/>
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/sidebar" element={<SidebarDoctor />} />
          < Route path="/treatmentScheduling" element={<TreatmentScheduling/>}/>
          < Route path="/patientProfile/:id" element={<PatientAnalytics/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;

