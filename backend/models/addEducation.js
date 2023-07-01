const mongoose = require('mongoose');

const Schema= mongoose.Schema

const education=Schema({
    school:{
        type:String,
        required:[true,'school is required']
    },
    session:{
        type:String,
        required:[true,'session is required']
    },
    course:{
        type:String,
        required:[true,'course name is required'],

    },
    description:{
        type:String,
        default:'',
        maxlength: [1024, "Description should be less than 50 characters"]
    }
})

module.exports=mongoose.model('educations',education)