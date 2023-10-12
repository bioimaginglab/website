const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));  // Serves files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
