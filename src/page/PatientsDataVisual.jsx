import BloodOxygen from "./BloodOxygen";
import BloodPressure from "./BloodPressure";
import PulseRate from "./PulseRate";
import Temperature from "./Temperature";

function PatientsDataVisual() {
   
  return (
    
     <div className=" max-w-7xl mx-auto p-2">
        
     <div className="p-12 w-full md:grid lg:grid-cols-2 gap-10">
     <PulseRate/>
     <BloodPressure/>
     <Temperature/>
     <BloodOxygen/>
    </div>
     </div>
    
  )
}

export default PatientsDataVisual
