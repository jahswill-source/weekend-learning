import React from 'react'
import { Route, Routes} from "react-router-dom"
import LandingPageScreen from "./pages/landingPageScren"
import Aboutus from './pages/Aboutus'
import SharpLoginDesign from './pages/Login'
import Services from './pages/Services'
import Contactus from './pages/Contactus'
import SharpRegisterDesign from './pages/Register'

const App = () => {
  return (
    <div>
      
     <Routes>

      <Route path='/' element={<LandingPageScreen/>} />
      <Route path='/Aboutus' element={<Aboutus/>} />
      <Route path='/Login' element={<SharpLoginDesign/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Contactus' element={<Contactus/>} />
      <Route path='/Register' element={<SharpRegisterDesign/>} />
     </Routes>
   

        
    

    
    </div>
  )
}

export default App
