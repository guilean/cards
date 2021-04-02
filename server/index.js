const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

app.get('/api/cards', function (_req, res) {
  fs.readFile('./cards.json', (_err, json) => {
    try {
      const fileParsed = JSON.parse(json);
      res.status(200).json(fileParsed);
    } catch (error) {
      res.status(400).send({ message: 'There was an issue reading the file' });
    }
  });
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`CORS-enabled web server listening on port ${PORT}`),
);
