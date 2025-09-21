
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Clothing from './Clothing';
import Assesories from './Assesories';
import Explore from './Explore';

function App() {
  return(
  <>

    <div>
         <Routes>
    <Route path = "/" element = {<Login/>}/>
     <Route path = "Register" element = {<Register/>}/>
      <Route path = "/Home" element = {<Home/>}/>
      <Route path = '/Clothing' element = {<Clothing/>}/>
      <Route path='/Assesories' element= {<Assesories/>}/>
      <Route path='/Explore' element={<Explore/>}/>
     
   </Routes>

    </div>
  
  </>
  )
}


export default App
