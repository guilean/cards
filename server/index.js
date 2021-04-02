const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());

app.get('/api/cards', function (_req, res) {
  const fileDir = path.join(__dirname, 'cards.json');
  fs.readFile(fileDir, (_err, json) => {
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
