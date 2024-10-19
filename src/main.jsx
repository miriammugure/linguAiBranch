
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Doctor from "./page/Doctor";
import SideBarLinks from "./page/Dashboard";
import Sidebar from "./page/Sidebar";
import PatientAnalytics from "./page/PatientAnalytics";
import TreatmentScheduling from "./page/TreatmentScheduling";
// import Analytics from "./page/Analytics";
import Navbar from "./page/Navbar";
import Home from "./page/Home";

const Main = () => {
  const [isSidebarOPen, setIsSidebarOpen] = useState(true);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen);

  return (
    <div>
      <Navbar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <Sidebar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <div className={`${isSidebarOPen ? "md:ml-64" : "ml-0 items-center flex justify-center"}`}>
        

        <Routes>
          <Route path="/home" element={<Home/>}/>
          < Route path="/navbar" element={<Navbar/>}/>
          {/* <Route path="/analytics" element={<Analytics/>}/> */}
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/sidebar" element={<SideBarLinks />} />
          < Route path="/treatmentScheduling" element={<TreatmentScheduling/>}/>
          < Route path="/patientProfile/:id" element={<PatientAnalytics/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;

