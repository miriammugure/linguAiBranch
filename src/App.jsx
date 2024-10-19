import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './page/Register';
import Login from './page/Login';
import Main from './main';
import MainPatient from './page/MainPatient'; // Import the main component for patients
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Doctor and patient private routes */}
          <Route path="/doctorsDashboard/*" element={<PrivateRoute><Main /></PrivateRoute>} />
          <Route path="/patientsDashboard/*" element={<PrivateRoute><MainPatient /></PrivateRoute>} />
          {/* <Route path="/doctorsDashboard/*" element={<Main />} />
          <Route path="/patientsDashboard/*" element={<MainPatient />} /> */}

          {/* Public routes */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Main /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
