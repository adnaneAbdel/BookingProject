import React, { useEffect, useState } from "react";
import axios from 'axios';

const TitleEvent = () => {
  const [getTitleEvent, setGetTitleEvent] = useState([]);

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
            setGetTitleEvent(response.data.data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <button
        className="EventsBtn"
        type="button"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Events
      </button>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Title Events
          </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            {getTitleEvent.map((event, index) => (
              <li key={index} className="titleEvent">
                {event.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TitleEvent;
 