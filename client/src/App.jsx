import React from 'react'
import Navbar from './Components/NAvbar'
import { useLocation,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'


const App = () => {

const isOwnerPath=useLocation().pathname.includes("Owner")


  return (
    <div >
      {!isOwnerPath && <Navbar/>}
<div className='min-h-[70vh]'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/rooms' element={<AllRooms/>}/>
  <Route path='/rooms/:id' element={<RoomDetails/>}/>
</Routes>
</div>
<Footer/>
    </div>
  )
}

export default App
