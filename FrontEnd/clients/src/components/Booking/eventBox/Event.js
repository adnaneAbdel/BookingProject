import React,{ useEffect, useState } from 'react'
import {Grid} from '@mui/material';
import ShowDetalis from './showDetalis';
import axios from 'axios';
const Event = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.post('http://localhost:3000/auth/HomeBooking');
                setEvents(response.data.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className='container'>
                    {events.length === 0 ? (
                        <p>No events found</p>
                    ) : (
                        events.map((event) => (
                            <div className='placeForEvent' key={event._id}>
                                <div className='titleOfEvent'>{event.title}</div>
                                <div className='InfoOfEvent'>
                                    <span className='day'>{new Date(event.date).toLocaleDateString()}</span>
                                    - <span className='price'>${event.price}</span>
                                </div>
                                <ShowDetalis /> 
                            </div>
                        ))
                    )}
                </div>
            </Grid>
        </Grid>
    );
};

export default Event;