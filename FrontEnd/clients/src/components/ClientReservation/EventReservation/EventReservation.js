import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './EventReservation.css';
import axios from 'axios';

const EventReservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/auth/reservations', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setReservations(response.data.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <>
            <Grid item xs={6}>
                <div className='container'>
                    {reservations.map((reservation) => (
                        <div className='placeForEvent' key={reservation._id}>
                            <div className='titleOfEvent'>{reservation.title}</div>
                            <div className='InfoOfEvent'>
                                <span className='day'>{new Date(reservation.date).toLocaleDateString()}</span>
                                -<span className='price'>${reservation.price}</span>
                            </div>
                            <div className='towBtnReservation'>
                                <button className='moreDetails'>
                                    Reservated
                                </button>
                                <button className='concelationbtn moreDetails'>
                                    Concelation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Grid>
        </>
    );
};

export default EventReservation;
