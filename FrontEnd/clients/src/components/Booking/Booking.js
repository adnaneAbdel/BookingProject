import React from 'react'
import './Booking.css'
import { Container,Grid } from '@mui/material';
import Event from './eventBox/Event';
import Nav from './navbar/nav';
const Booking = () => {
    return(
        <div>
           <Nav />
        

            <div className='events'>
            <Container>
            <Grid container spacing={2}>
           <Event />
        
           
           </Grid>
           </Container>
            </div>
            
           
        </div>
    )
}

export default Booking