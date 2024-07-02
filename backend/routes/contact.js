const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

// Handle contact form submission
router.post('/', async (req, res) => {
    const { name, email, contact, message } = req.body;
    try {
        const newContact = new Contact({ name, email, contact, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;

