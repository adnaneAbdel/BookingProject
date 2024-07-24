const User = require('../DataBase/user')
const Reservation = require('../DataBase/reservation')
const Offers = require('../DataBase/offers')
const bcrypt = require('bcrypt')
const genereteToken = require('../JWT/GenereteToken')
exports.login = async (req, res, next) => {
    const {email , password} = req.body
   try {
    const user = await User.findOne({ email });
    if(!user){
        res.status(400).json({message: "Invalid email or password"})
    }
    const userPass = await bcrypt.compare(password , user.password)
    if(!userPass){
        res.status(400).json({message: "Invalid email or password"})
    }
    const token = genereteToken(user)
    res.status(200).json({message: "login successfull",token})
   } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    next()
   }
}

exports.register = async (req, res, next) => {
    const {name , email , password} = req.body
    const user = await User.create({
        name ,
        email,
        password: bcrypt.hashSync(password , 8)
    })
    const token = genereteToken(user)
    try {
       await user.save()
        res.status(200).json({message: "new user it register successfull", token})
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.dashboard = async (req, res) => {
    
    try {
        const bookings = await Offers.find();
        res.status(200).json({ message: "All the Offers", data: bookings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        next();
    }
}
//show all the reservation 

exports.getOffersByIdUser = async (req, res, next) => {
    const userId = req.userId;
    try {
        const bookings = await Offers.find({ userId: userId });
        res.status(200).json({ message: "All the Offers", data: bookings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        next();
    }
};

//create a offers

exports.CreateOffers = async (req, res, next) => {
    const { title, date, price } = req.body;

    try {
        // Validate date
        const reservationDate = new Date(date);
        if (isNaN(reservationDate.getTime()) || reservationDate <= new Date()) {
            return res.status(400).json({ message: 'Invalid or past date provided' });
        }

        // Validate price
        const parsedPrice = parseFloat(price);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            return res.status(400).json({ message: 'Invalid price provided' });
        }

        // Ensure userId is present
        if (!req.userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Create the reservation
        const CreateBooking = await Offers.create({
            userId: req.userId,
            title,
            date: reservationDate,
            price: parsedPrice,
        });

        res.status(201).json({ message: "The reservation was created successfully", info: CreateBooking });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(400).json({ message: 'Error creating reservation', error: error.message });
    }
};
//put the resevation to your Dashborad
exports.Reservation = async (req, res, next)=> {
    try {
        
        const offerId = req.params.id; // Use req.params.id to get the offerId from the URL
        const userId = req.userId; // Assume req.user.id is set by the auth middleware

        // Validate offerId
        if (!offerId) {
            return res.status(400).json({ message: 'Offer ID is required' });
        }

        // Check if the offer exists
        const offer = await Offers.findById(offerId);
        if (!offer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        // Ensure the user is not trying to reserve their own offer
        if (offer.userId.toString() === userId) {
            return res.status(403).json({ message: 'You cannot reserve your own offer' });
        }

        // Create the reservation
        const reservation = new Reservation({
            userId,
            offerId,
            title: offer.title,
            date: offer.date,
            price: offer.price
        });

        await reservation.save();

        res.status(201).json({
            message: 'Reservation created successfully',
            reservation
        });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
};

//fetch the reservation : 
exports.getUserReservations = async (req, res, next) => {
    try {
        const userId = req.userId; // Assume req.userId is set by the auth middleware

        const reservations = await Reservation.find({ userId: userId });

        res.status(200).json({
            message: 'User reservations fetched successfully',
            data: reservations
        });
    } catch (error) {
        console.error('Error fetching user reservations:', error);
        res.status(500).json({ message: 'Error fetching user reservations', error: error.message });
    }
};


