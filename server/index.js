import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; // Step 1: Import dotenv
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config(); // Step 2: Initialize dotenv

// Step 3: Middleware MUST come before Routes
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Now the routes will have access to the parsed body and CORS headers
app.use('/posts', postRoutes);

// Step 4: Use Environment Variables
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) 
    .catch((error) => console.log(error.message));