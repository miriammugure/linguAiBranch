
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SidebarPatient from "./SidebarPatient";
import PatientsDataVisual from "./PatientsDataVisual";
import Navbar from "./Navbar";



const MainPatient = () => {
  const [isSidebarOPen, setIsSidebarOpen] = useState(true);
  const handleSidebar = () => setIsSidebarOpen(!isSidebarOPen);

  return (
    <div>
      <Navbar handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <SidebarPatient handleSidebar={handleSidebar} isSidebarOPen={isSidebarOPen} />
      <div className={`${isSidebarOPen ? "md:ml-64" : "ml-0 items-center flex justify-center"}`}>
        

        <Routes>
        
        <Route path="patientsData" element={<PatientsDataVisual />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPatient;

