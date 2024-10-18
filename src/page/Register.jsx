import { Link } from "react-router-dom";
import { globalStyles } from "../components/globalStyles";
function Register() {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center bg-[0E4A3B] h-14 ">
      <div className=" w-screen max-w-2xl  ">
      <div className=" flex flex-col items-center justify-center">
                <h3 className=" font-bold text-2xl my-2 capitalize">Register here</h3>
              </div>
        <form
          action=""
          className="flex flex-col justify-center items-start bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 z-50 "
        >
          <label
            htmlFor="firstName"
            className="text-sm capitalize font-bold mb-2"
          >
            first name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            placeholder="john"
          />
          <label
            htmlFor="lastName"
            className="text-sm capitalize font-bold mb-2"
          >
            last name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            placeholder="doe"
          />
          <label htmlFor="county" className="text-sm capitalize font-bold mb-2">
            county
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="county"
            placeholder="Nyeri"
          />
          <label htmlFor="email" className="text-sm capitalize font-bold mb-2">
            email
          </label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="flex flex-col space-y-4">
      <label className="text-lg font-medium text-gray-700 ">Gender</label>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
          
            className="form-radio text-green-900"
          />
          <span className="text-gray-700">Female</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            
            className="form-radio text-green-900"
          />
          <span className="text-gray-700">Male</span>
        </label>
      </div>
    </div>
          <label
            htmlFor="phoneNumber"
            className="text-sm capitalize font-bold mb-2"
          >
            phone number
          </label>
          <input
            type="text"
            placeholder="012345678"
            id="phoneNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="kinphoneNumber"
            className="text-sm capitalize font-bold mb-2"
          >
            phone number (next of kin)
          </label>
          <input
            type="text"
            id="kinPhoneNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter next of kin phone number "
          />
          <label
            htmlFor="password"
            className="text-sm capitalize font-bold mb-2"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
           <button className={globalStyles.formStyles.buttonStyle}>
                  Register
                </button>
          <p className="text-sm font-medium capitalize">
            have an account?{" "}
            <Link to="/login" className="font-bold underline">
              log in here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
