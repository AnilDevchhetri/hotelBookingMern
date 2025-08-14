import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>

      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>)
}

export default App;


//NOte
//figma desing:
//https://www.figma.com/design/vWAjka7MDKh3QWfvERF6Mx/QuickStay?node-id=0-1&p=f

//https://www.youtube.com/watch?v=ubM9cX8G_gk&ab_channel=GreatStack
//51:00