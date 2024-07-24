const mongoose = require('mongoose')

const TableRservation = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    offerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Offers',
        required: true
    },
    title:{
        type: String,
   
    },
    date:{
        type: Date,
      
  
    },
    price:{
        type:Number,
      
    }
})
TableRservation.methods.stringifyId = function() {
    return this._id.toString();
  };
const modelBooking = mongoose.model('Reservation', TableRservation)

module.exports = modelBooking ;