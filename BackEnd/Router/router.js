const express = require('express')   

const router = express.Router()
const authController = require('../Controllors/auth'); 
const verifyToken = require('../JWT/verfayToken')

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/HomeBooking' ,authController.dashboard);
router.post('/createOffers',verifyToken ,authController.CreateOffers)
router.post('/reservation/:id',verifyToken ,authController.Reservation)
router.get('/reservations', verifyToken, authController.getUserReservations);
router.get('/getOffersByIdUser',verifyToken ,authController.getOffersByIdUser)



module.exports = router