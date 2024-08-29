const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Ensure dotenv is required to load environment variables

const app = express();
const port = 3001;

// Middleware to serve static files
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error('MongoDB URI is not defined in the environment variables.');
    process.exit(1);
}

console.log('MongoDB URI:', mongoURI); // Debug log

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    resume: String
});

const User = mongoose.model('User', userSchema);

// Handle form submission
app.post('/signup', upload.single('resume'), async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
            resume: req.file ? req.file.path : null
        });

        await newUser.save();
        res.redirect('/success.html');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Internal server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
