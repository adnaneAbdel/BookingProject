
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const BoxCreateEvent = () => {
    const [title ,setTitle] = useState('')
    const [date ,setDate] = useState('')
    const [price ,setPrice] = useState('')
    const navigate = useNavigate()
    const hnadleChangeTitle = (e) =>{
        setTitle(e.target.value)
    }
    const hnadleChangeDate = (e) =>{
        setDate(e.target.value)
    }
    const hnadleChangePrice = (e) =>{
        setPrice(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/auth/createOffers', {
                title,
                date,
                price
            }, {
                headers: {
                   'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.token);
            navigate('/MyOffers');
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return(
        <div>
        <button className='newEvent' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
        <Button className='addIcons' variant="contained" startIcon={<AddCircleOutlineIcon  className='testing'/>}></Button>
        </button>
        {/* Modal for creating a new post */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New Event</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 textLine">
                                <label htmlFor="file-input" className="col-form-label">Titel Event:</label>
                                <input type="text" className="form-control" id="description-input" value={title} onChange={hnadleChangeTitle} ></input>
                               
                            </div>
                            <div className="mb-3 textLine">
                                <label htmlFor="description-input" className="col-form-label">Date Of Event:</label>
                                <input type="date" className="form-control" id="description-input" value={date}  onChange={hnadleChangeDate}></input>
                            </div>
                            <div className="mb-3 textLine">
                                <label htmlFor="title-input" className="col-form-label">Price of Event: ($)</label>
                                <input type="number" className="form-control" id="title-input" value={price} onChange={hnadleChangePrice} /> 
                            </div>
                           
                      
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" >Publish</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoxCreateEvent 