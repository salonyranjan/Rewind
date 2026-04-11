import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config(); 

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Health check route for Vercel
app.get('/', (req, res) => {
    res.send('Rewind API is running');
});

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;

// Connect to MongoDB without app.listen()
mongoose.connect(CONNECTION_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error.message));

// CRITICAL: Export app for Vercel
export default app;