const Message = require('../models/addMessage');


exports.addMessage = async (req, res) => {
    const { name, email, message } = req.body;
  
    const newMessage = new Message({ name, email, message });
  
    try {
      await newMessage.save();
      res.status(201).json({ message: 'Message saved successfully' });
    } catch (err) {
      console.error('Error saving message:', err);
      res.status(500).json({ error: 'Failed to save the message' });
    }
  };
  

  exports.getMessages = async (req, res) => {
    try {
      const messages = await Message.find({});
      res.status(200).json(messages);
    } catch (err) {
      console.error('Error retrieving messages:', err);
      res.status(500).json({ error: 'Failed to retrieve messages' });
    }
  };