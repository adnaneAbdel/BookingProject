import React from 'react'
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

import './navDashborad.css'
import Button from '@mui/material/Button';
import BoxCreateEvent from './boxCreateEvent/boxCreateEvent';
const NavDashborad = () => {
    return(
        <>
        
          
        <nav >
               <div className='firstSection'>
               <Link to={'/Dashobrad'} className='nameOfSite'>BookingAdn</Link>
                <Link to={'/MyReservation'} className='about'>My Reservation</Link>
                <Link to={'/MyOffers'} className='about'>My Offer</Link>
                
               </div>
                <div className='SecondSection'>
               <div>
               <BoxCreateEvent/>
                </div> 
                <div>
                <Link to={'/Login'}> 
                <Button className='loginOutIcons' variant="contained" startIcon={<LoginIcon  />} > </Button>
                </Link>
                </div>
               
                   
                </div>
                
            </nav>
            
           
           
        </>
    )
}

export default NavDashborad