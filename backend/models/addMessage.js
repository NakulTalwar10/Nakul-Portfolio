const mongoose = require('mongoose');

const Schema= mongoose.Schema

const message= new Schema({
    name: String,
    email: String,
    message: String,
})

module.exports=mongoose.model('messages', message);