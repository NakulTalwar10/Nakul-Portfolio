const express = require('express');
const { addMessage, getMessages } = require('../controller/addMessagesController');

const Routes = express.Router();


Routes.post('/addmessage',addMessage);
Routes.get('/getmessage',getMessages );

module.exports=Routes