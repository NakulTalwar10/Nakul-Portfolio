const express = require('express');
const { addSkills, getSkills } = require('../controller/addSkillcontroller');

const Routes= express.Router()

Routes.post('/addskills',addSkills)
Routes.get('/getskills',getSkills)

module.exports=Routes