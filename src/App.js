import React from 'react';
import { Routes, Route , Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//side components
import Dashboard from './Parts/Dashboard';
import Map from './Parts/Map';
import UserProfile from './Parts/UserProfile';
import OrderManagement from './Parts/OrderManagement';
import ItemListing from './Parts/ItemListing';
import StoreInfo from './Parts/StoreInfo';


const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row '>

        {/* Side Bar */}
        <div className='col-2 sideBar'>
          <h4>Logo</h4>
        <nav >
        <ul>

          <li> <Link to="/Dashboard"> Dashboard </Link> </li>
          <li> <Link to="/Map"> Map </Link> </li>
          <li> <Link to="/UserProfile"> User Profile </Link> </li>
          <li> <Link to="/OrderManagement"> Order Management </Link> </li>
          <li> <Link to="/ItemListing"> Item Listing </Link> </li>
          <li> <Link to="/StoreInfo"> Store Information </Link> </li>

        </ul>
        </nav>

        </div>

        {/* Left area */}
        <div className='col-10'>

          {/* blue area */}
          <div className='row blue_left'>
          blue side
          </div>

          {/* middle area */}
          <div className='row middle_area'>
            middle area
          </div>

          {/* footer */}
          <div className='row footer'>
            <footer>
              footer
            </footer>
          </div>

        </div>
      </div>

      


      <Routes>

        <Route path="/Dashboard" element={ <Dashboard/> } />
        <Route path="/Map" element={<Map />} />
        <Route path="/UserProfile" element={ <UserProfile/> } />
        <Route path="/OrderManagement" element={ <OrderManagement/> } />
        <Route path="/ItemListing" element={ <ItemListing/> } />
        <Route path="/StoreInfo" element={ <StoreInfo/> } />

      </Routes>
    </div>
  );
}

export default App;
