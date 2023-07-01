const mongoose = require('mongoose');

const Schema = mongoose.Schema

const projects = Schema({
    title: {
        type: String,
        required: [true, 'Please add a project name']
    },
    description: {
        type: String,
        maxlength: [1024, "Description should be less than 50 characters"]
    },
    link: {
        type: String,
        requred: true
    },
    category: {
        type: String,
        requred: true
    },
    image: {
        type:String,
        required:true
    }
})
module.exports = mongoose.model("projects", projects)