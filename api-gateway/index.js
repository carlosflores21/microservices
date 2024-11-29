const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Redirige a public-service
app.get('/public', async (req, res) => {
  try {
    const response = await axios.get('http://public-service:3001');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error en el servicio público');
  }
});

// New pedido
app.post('public/order', (req, res) => {
  try {
    const response = axios.post('http://public-service:3001/order', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error en el servicio público order');
  }
});

// Redirige a private-service
app.get('/private', async (req, res) => {
  try {
    const response = await axios.get('http://private-service:3002');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error en el servicio privado');
  }
});

app.listen(port, () => {
  console.log(`API Gateway running at http://localhost:${port}`);
});
