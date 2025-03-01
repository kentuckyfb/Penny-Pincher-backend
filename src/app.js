const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(
    cors({
      origin: 'http://localhost:3000', // Allow requests from this origin
      credentials: true, // Allow credentials (cookies)
    })
  );
app.use(express.json());

// Routes

const authRoutes = require('./routes/authRoutes');
const purchaseOrderRoutes = require('./routes/purchaseOrderRoutes');
const vendorRoutes = require('./routes/vendorRoutes.js');
const costCentreRoutes = require('./routes/costCentreRoutes');
const costElementRoutes = require('./routes/costElementRoutes');


app.use('/api/jobs', jobRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/cost-centres', costCentreRoutes);
app.use('/api/cost-elements', costElementRoutes);

module.exports = app;