

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from "../src/page/Register"
import Login from './page/Login'
// import Header from './components/Header'
import Home from './page/Home'
import Doctor from './page/Doctor'

function App() {


  return (
    <>
 <BrowserRouter>
 {/* <Header/> */}
 <Routes>
  <Route path='/' element={<Register/>} />
  < Route path='/home' element={<Home/>}/>
  <Route path='/login' element={ <Login/>} />
  < Route path='/doctor' element={<Doctor/>}/>
 </Routes>
 </BrowserRouter>
      
     
    </>
  )
}

export default App
