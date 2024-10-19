import BloodOxygen from "./BloodOxygen";
import BloodPressure from "./BloodPressure";
// import DashboardLayout from "./DashboardLayout";
import PulseRate from "./PulseRate";
import Temperature from "./Temperature";

function PatientAnalytics() {
   
  return (
    // <DashboardLayout>
     <div className=" max-w-7xl mx-auto p-2">
        
     <div className="p-12 w-full md:grid lg:grid-cols-2 gap-10">
     <PulseRate/>
     <BloodPressure/>
     <Temperature/>
     <BloodOxygen/>
    </div>
     </div>
    // </DashboardLayout>
  )
}

export default PatientAnalytics
