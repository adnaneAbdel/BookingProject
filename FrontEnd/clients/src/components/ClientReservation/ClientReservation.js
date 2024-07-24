import React from "react";
import NavDashborad from "./navDashborad/NavDashobrad";
import './ClientReservation.css'
import TitleEvent from "./TitleEvent/TitleEvent";
import TitleOffers from "./TitleOffers/TitleOffers";

const Dashobrad = () => {
    return(
        <>
       <NavDashborad/>
        <div className="container baxing">
        <h1>Welcome UserName , here your Dashborad where you can see your Reservation and also create event and edit or remove it  </h1>
       <div className="btnStart">
       <TitleEvent />
       <TitleOffers />
       </div>
      
        </div>
    

        </>
    )
}

export default Dashobrad 