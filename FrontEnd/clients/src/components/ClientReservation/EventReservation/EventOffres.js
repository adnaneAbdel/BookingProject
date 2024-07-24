import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './EventReservation.css';
import axios from 'axios';

const EventOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/auth/getUserReservations', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setOffers(response.data.data); 
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <>
            <Grid item xs={6}>
                <div className='container'>
                    {offers.map((offer) => (
                        <div className='placeForEvent' key={offer._id}>
                            <div className='titleOfEvent'>{offer.title}</div>
                            <div className='InfoOfEvent'>
                                <span className='day'>{new Date(offer.date).toLocaleDateString()}</span>
                                -<span className='price'>${offer.price}</span>
                            </div>
                            <div className='towBtnReservation'>
                                <button className='moreDetails'>Edit</button>
                                <button className='concelationbtn moreDetails'>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Grid>
        </>
    );
};

export default EventOffers;
