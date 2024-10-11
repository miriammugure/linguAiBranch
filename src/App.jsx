

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from "../src/page/Register"
import Login from './page/Login'
import Header from './components/Header'
import Home from './page/Home'
import About from './page/About'
import Shop from './page/Shop'
import Contacts from './page/Contacts'
function App() {


  return (
    <>
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Register/>} />
  < Route path='/home' element={<Home/>}/>
  < Route path='/about' element={<About/>}/>
  < Route path='/contacts' element={<Contacts/>}/>
  < Route path='/shop' element={<Shop/>}/>
  <Route path='/login' element={ <Login/>} />

 </Routes>
 </BrowserRouter>
      
     
    </>
  )
}

export default App
