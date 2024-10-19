import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Import useAuth hook
import { globalStyles } from "../components/globalStyles";

function Register() {
  const { signUp } = useAuth(); // Get signUp function from AuthContext
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // For displaying error messages
  const [loading, setLoading] = useState(false); // To handle loading state

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setLoading(true);

    // Validation: Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.location || !formData.email || !formData.gender || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    // Validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      // Call the signUp function from AuthContext
      await signUp(
        formData.email,
        formData.firstName,
        formData.password,
        formData.confirmPassword,
        "patient", // Assuming user type is "patient"
        formData.firstName,
        formData.lastName,
        formData.location,
        formData.gender,
        formData.phoneNumber
      );
      // Registration was successful, and the user will be redirected in AuthContext
    } catch (error) {
      // Handle specific errors from the server (e.g., user already exists)
      if (error.message.includes("already exists")) {
        setError("User already exists. Please try logging in.");
      } else if (error.message.includes("invalid")) {
        setError("Invalid input. Please check your details and try again.");
      } else {
        setError("Failed to register. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center bg-[0E4A3B] h-14 ">
      <div className=" w-screen max-w-2xl  ">
        <div className=" flex flex-col items-center justify-center">
          <h3 className=" font-bold text-2xl my-2 capitalize">Register here</h3>
        </div>
        <form
          onSubmit={handleSubmit} // Use the handleSubmit function on form submission
          className="flex flex-col justify-center items-start bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 z-50 "
        >
          <label htmlFor="firstName" className="text-sm capitalize font-bold mb-2">
            first name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="john"
          />

          <label htmlFor="lastName" className="text-sm capitalize font-bold mb-2">
            last name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="doe"
          />

          <label htmlFor="location" className="text-sm capitalize font-bold mb-2">
            location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your location"
          />

          <label htmlFor="email" className="text-sm capitalize font-bold mb-2">
            email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="johndoe@example.com"
          />

          {/* Gender Selection */}
          <div className="flex flex-col space-y-4">
            <label className="text-lg font-medium text-gray-700">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={() => setFormData({ ...formData, gender: "female" })}
                  className="form-radio text-green-900"
                />
                <span className="text-gray-700">Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={() => setFormData({ ...formData, gender: "male" })}
                  className="form-radio text-green-900"
                />
                <span className="text-gray-700">Male</span>
              </label>
            </div>
          </div>

          <label htmlFor="phoneNumber" className="text-sm capitalize font-bold mb-2">
            phone number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="012345678"
          />

          <label htmlFor="password" className="text-sm capitalize font-bold mb-2">
            password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label htmlFor="confirmPassword" className="text-sm capitalize font-bold mb-2">
            confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className={globalStyles.formStyles.buttonStyle}
            disabled={loading} // Disable button if loading
          >
            {loading ? "Registering..." : "Register"}
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
