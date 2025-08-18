import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>

      {!isOwnerPath && <Navbar />}

      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          {/* admin owner routs */}
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />

          </Route>
        </Routes>
      </div>
      <Footer />
    </div>)
}

export default App;


//NOte
//figma desing:
//https://www.figma.com/design/vWAjka7MDKh3QWfvERF6Mx/QuickStay?node-id=0-1&p=f

//https://www.youtube.com/watch?v=ubM9cX8G_gk&ab_channel=GreatStack
//4:18