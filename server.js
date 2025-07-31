require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/flight', async (req, res) => {
  console.log('Received flight search request');
  const flightNum = req.query.flight;
  if (!flightNum) return res.status(400).json({ error: 'Flight number is required' });

  try {
    const response = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=${process.env.API_KEY}&flight_iata=${flightNum}`
    );
    console.log(`Fetching flight data for: ${flightNum}`);
    
    const data = await response.json();
    console.log('Flight data:', data);
    const flight = data.data[0];

    if (!flight) return res.status(404).json({ error: 'Flight not found' });

    res.json({
      airline: flight.airline.name,
      flight_number: flight.flight.iata,
      status: flight.flight_status,
      departure: flight.departure.airport,
      arrival: flight.arrival.airport,
    });
  } catch (err) {
    console.error('Error fetching flight data:', err);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});