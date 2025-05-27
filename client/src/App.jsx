import React from 'react'
import Navbar from './Components/NAvbar'
import { useLocation,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelRegistration from './Components/HotelRegistration'
import Layout from './Pages/hotelowner/Layout'
import Dashboard from './Pages/hotelowner/Dashboard'


const App = () => {

const isOwnerPath=useLocation().pathname.includes("Owner")


  return (
    <div >
      {!isOwnerPath && <Navbar/>}
   {false &&   <HotelRegistration/>}
<div className='min-h-[70vh]'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/rooms' element={<AllRooms/>}/>
  <Route path='/rooms/:id' element={<RoomDetails/>}/>
  <Route path='/my-bookings' element={<MyBookings/>}/>
  <Route path='/owner' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
  </Route>
</Routes>
</div>
<Footer/>
    </div>
  )
}

export default App
