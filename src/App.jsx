

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from "../src/page/Register"
import Login from './page/Login'
function App() {


  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Register/>} />
  <Route path='/login' element={ <Login/>} />
 </Routes>
 </BrowserRouter>
      
     
    </>
  )
}

export default App
