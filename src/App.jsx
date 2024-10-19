

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from "../src/page/Register"
import Login from './page/Login'
import Main from './main'

function App() {


  return (
    <>
 <BrowserRouter>
 {/* <Header/> */}
 <Routes>
  <Route path="/dashboard/*" element={<Main/>}/>
  <Route path='/' element={<Register/>} />
  <Route path='/login' element={ <Login/>} />


  
  <Route path='/dashboard' element={<Main/>}/>
 </Routes>
 </BrowserRouter>
      
     
    </>
  )
}

export default App
