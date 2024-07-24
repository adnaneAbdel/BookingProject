import React from "react";

import EventOffres from "../../EventReservation/EventOffres";
import NavDashborad from "../NavDashobrad";
import { Container,Grid } from '@mui/material';
const MyOffers = () => {
    return (
        <>
       <NavDashborad/>
        <div className='events'>
            <Container>
            <Grid container spacing={2}>
           <EventOffres />
        
           </Grid>
           </Container>
         
            </div>
        </>
    )
}

export default MyOffers