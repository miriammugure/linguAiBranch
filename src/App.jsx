import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './page/Register';
import Login from './page/Login';
import Main from './main';
import Patient from './page/Patient';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <BrowserRouter> 
      <AuthProvider> 
        <Routes>
          <Route path="/doctorsDashboard/*" element={<PrivateRoute><Main /></PrivateRoute>} />
          <Route path="/patientsDashboard/*" element={<PrivateRoute><Patient /></PrivateRoute>} />
          
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Main /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
