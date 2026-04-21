// Express app setup (middleware, routes)
import express from 'express';
import { authMiddleware, errorHandler } from './middleware';
import routes from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

export default app;
