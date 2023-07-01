const express= require('express')
const { addProjects, getProjects } = require('../controller/addProjectsController')

const Routes= express.Router()

Routes.post('/addprojects',addProjects)
Routes.get('/getprojects',getProjects)

module.exports=Routes