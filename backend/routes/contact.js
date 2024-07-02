const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, email, contact, message } = req.body;
    try {
        const newContact = new Contact({ name, email, contact, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
