import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return(
        <>
        
          
        <nav >
               <div className='firstSection'>
               <a href='testing.com' className='nameOfSite'>BookingAdn</a>
                <a href='testing.com' className='about'>About</a>
                <a href='testing.com' className='contact'>Contact</a>
               </div>
                <div className='SecondSection'>
                <Link to={'Login'}> <button className='login'> Login</button></Link>
                   <Link to={'Register'}>    <button className='register'>Register</button></Link>
                </div>
                
            </nav>
            
           
           
        </>
    )
}

export default Nav