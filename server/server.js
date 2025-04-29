import express from 'express';
import cors from 'cors';
import analyticsRoutes from './routes/analytics.js';

const app = express();
app.use(cors());
app.use('/api/analytics', analyticsRoutes);

app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
