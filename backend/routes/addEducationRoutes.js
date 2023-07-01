const express = require('express');
const { addEducation, getEducation } = require('../controller/addEducationController');


const Routes= express.Router()

Routes.post('/addeducation',addEducation)
Routes.get('/geteducation',getEducation)

module.exports=Routes