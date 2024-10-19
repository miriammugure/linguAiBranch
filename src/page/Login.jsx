import { Link } from "react-router-dom";
import { globalStyles } from "../components/globalStyles";
import { useAuth } from '../Context/AuthContext';
import { useState } from 'react';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }finally{
      setPassword('')
      setEmail('')
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl my-2 capitalize">log in here</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 z-50"
        >
          {error && <p className="text-red-500">{error}</p>}
          <label htmlFor="email" className="text-sm capitalize font-bold mb-2">
            email
          </label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label
            htmlFor="password"
            className="text-sm capitalize font-bold mb-2"
          >
            password
          </label>
          <input
            type="password"
            placeholder="********"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button type="submit" className={globalStyles.formStyles.buttonStyle}>
            Login
          </button>
          <p className="text-sm font-medium capitalize">
            no account?{" "}
            <Link to="/" className="font-bold underline">
              register here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
