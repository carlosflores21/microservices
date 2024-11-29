const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Este es el microservicio para IPs públicas' });
});

// New pedido
app.post('/order', (req, res) => {
  const { product, quantity } = req.body;
  console.log(`Pedido de ${quantity} ${product}(s) recibido.`);
  res.status(201).json({ message: `Pedido de ${quantity} ${product}(s) recibido.` });
});


app.listen(port, () => {
  console.log(`Public service running at http://localhost:${port}`);
});
