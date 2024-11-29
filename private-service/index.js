const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.json({ message: 'Este es el microservicio para IPs privadas' });
});

app.listen(port, () => {
  console.log(`Private service running at http://localhost:${port}`);
});
