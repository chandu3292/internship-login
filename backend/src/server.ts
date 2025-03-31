import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors'; // Import cors
import userRoutes from './routes/userRoutes';

const app = express();

// Enable CORS for requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the frontend
  methods: ['GET', 'POST', 'OPTIONS'], // Allow these methods (include OPTIONS for preflight)
  allowedHeaders: ['Content-Type'], // Allow these headers
}));

app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});