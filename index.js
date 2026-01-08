const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const predictRoute = require('./api/predict');
const historyRoute = require('./api/history');

// Routes
app.use('/api/predict', predictRoute);
app.use('/api/history', historyRoute);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'API is running', 
    message: 'Lottery Prediction API v1.0',
    endpoints: {
      prediction: '/api/predict',
      history: '/api/history'
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;