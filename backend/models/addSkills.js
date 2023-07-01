const mongoose = require('mongoose');

const Schema= mongoose.Schema

const skill= Schema({
    skills:{
        type:String,
        required:[true,'Please add a skill']
    },
    rating:{
        type:Number,
        required:true,
        min:[30,'Rating should be less than 30'],
        max:[100,'Rating not exceed 100']
    }
})

module.exports=mongoose.model('skills',skill)