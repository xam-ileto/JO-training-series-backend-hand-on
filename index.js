const express = require('express');

const app = express();
const PORT = 3000;
app.listen(PORT);
console.log(`port running at port ${PORT}`);

// render view engine
app.set('view engine', 'ejs');

// GET routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/view-list', (req, res) => {
  res.render('view-list');
});
