import DataTable from "react-data-table-component";
import { patientsData } from "../data/data";
import { Link } from "react-router-dom";

const PatientsDataVisual = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile Phone",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Kin Name",
      selector: (row) => row.name_of_kin,
      sortable: true,
    },
    {
      name: "Kin Phone",
      selector: (row) => row.phone_of_kin,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Link
          to={`/doctorsDashboard/patientProfile/${row.id}`}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View Analytics
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
     
    },
  ];

  return (
    <div className="flex ">

      <div className="flex  justify-center items-center">  
        <div className="flex-1 "> 
          <div className="flex justify-center items-center">
            <form className="w-full max-w-md">
              <div className="flex items-center py-2">
                <input
                  className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-2 border-b-green-900"
                  type="text"
                  placeholder="Search patients..."
                  aria-label="Search Patients"
                />
                <button
                  className="flex-shrink-0 bg-green-900 hover:bg-green-600 border-none text-sm border-4 text-white py-1 px-2 rounded h-14"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-center">Patients List</h1>
     
       <DataTable
            columns={columns}
            data={patientsData}
            pagination
            highlightOnHover
            responsive
            striped
          />
       
        </div>
      </div>
  
    </div>
  );
};


export default PatientsDataVisual;