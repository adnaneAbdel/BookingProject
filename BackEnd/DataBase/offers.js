const mongoose = require('mongoose')

const TableOffers = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    title:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true
  
    },
    price:{
        type:Number,
        required:true 
    }
})
TableOffers.methods.stringifyId = function() {
    return this._id.toString();
  };
const modelOffers = mongoose.model('Offers', TableOffers)

module.exports = modelOffers ;