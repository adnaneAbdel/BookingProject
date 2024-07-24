import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Title.css'
const TitleOffers = () => {
  const [getTitleOffer, setGetTitleOffer] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/auth/home', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setGetTitleOffer(response.data.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    fetchReservations();
  }, []);
    return(
        <div>
<button className="OffersBtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Offers</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Title Offers</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul>
            {getTitleOffer.map((event, index) => (
              <li key={index} className="titleEvent">
                {event.title}
              </li>
            ))}
          </ul>
  </div>
</div>
    </div>
    )
}

export default TitleOffers 