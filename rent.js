require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.route');
const carsRoutes = require('./routes/cars.route')

app.use(express.json());

app.use('/api/auth', authRoutes );

app.use('/api', carsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
