
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import PatientsDataVisual from "./PatientsDataVisual.jsx";
import PatientNavbar from "./patientNavbar.jsx";



const Patient = () => {
  const [isSidebarOPen, setIsSidebarOpen] = useState(true);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen);

  return (
    <div>
      <Navbar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <Sidebar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <div className={`${isSidebarOPen ? "md:ml-64" : "ml-0 items-center flex justify-center"}`}>
        

        <Routes>
          < Route path="/patientsnavbar" element={<PatientNavbar/>}/>
          <Route path="/patientsData" element={<PatientsDataVisual/>}/>
          
        </Routes>
      </div>
    </div>
  );
};

export default Patient;

