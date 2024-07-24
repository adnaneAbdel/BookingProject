import React from "react";
import EventReservation from "../../EventReservation/EventReservation";
import NavDashborad from "../NavDashobrad";
import { Container,Grid } from '@mui/material';
const MyReservation = () => {
    return (
        <>
          <NavDashborad/>
        <div className='events'>
            <Container>
            <Grid container spacing={2}>
           <EventReservation />
           
           </Grid>
           </Container>
         
            </div>
        </>
    )
}

export default MyReservation