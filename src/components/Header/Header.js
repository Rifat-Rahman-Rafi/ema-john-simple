import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../App';

import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    
   const [loggedInUser,setLoggInUser]=useContext(UserContext);
    return (
        <div className="header">
           
           <img src={logo} alt=""/>
            
         <nav> 

         <Link to="/shop">Shop</Link>
          <Link to="/review">Order Review</Link>
           <Link to="/inventory">Manage Inventory</Link>
           <button onClick  = {()=>setLoggInUser({})}>Sign Out
           
           
           </button>

          

         </nav>
        

        




        </div>
    );
};

export default Header;