const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);

mongoose.connect('mongodb://localhost:27017/learning-platform', {
    
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
