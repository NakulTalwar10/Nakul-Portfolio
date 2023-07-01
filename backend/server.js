const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const addProject = require('./routes/addProjectsRoute')
const addSkills= require('./routes/addSkillsRoutes')
const addEducation=require('./routes/addEducationRoutes')
const addMessage= require('./routes/addMessagesRoutes')
require('dotenv').config()



const app = express()
app.use(express.json())
app.use(cors())

app.use('/',addProject)
app.use('/',addSkills)
app.use('/',addEducation)
app.use('/',addMessage)

const PORT = process.env.PORT || 8000

app.listen(process.env.PORT, () => {
    console.log(`coonect to PORT=>${PORT}`)
})


mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME
})
    .then(() => console.log(`Connected to Mongo DB`))
    .catch((err) => console.log(err))

mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
})

mongoose.connection.on('error', (err) => {
    console.log('Error', err);
})
