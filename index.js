require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/UserRoutes');
const adminRoutes = require('./Routes/AdminRoutes');

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://quiz-app-orcin-kappa.vercel.app",
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.get('/', (req, res) => {
  res.send('Quiz Backend API');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
