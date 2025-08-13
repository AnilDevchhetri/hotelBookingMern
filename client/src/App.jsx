import React from 'react';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>)
}

export default App;


//NOte
//figma desing:
//https://www.figma.com/design/vWAjka7MDKh3QWfvERF6Mx/QuickStay?node-id=0-1&p=f

//https://www.youtube.com/watch?v=ubM9cX8G_gk&ab_channel=GreatStack
//31:45