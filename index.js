const express = require('express');

const app = express();
const PORT = 3000;
app.listen(PORT);
console.log(`server running at port ${PORT}`);

// render view engine
app.set('view engine', 'ejs');

// set public folder to access external CSS sheets
app.use(express.static(__dirname + '/public'));

// TO DO: specify use of body parser
// write code here

// GET routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/view-list', (req, res) => {
  var toDoList = [];

  //   TO DO: retrieve to do list data from server
  // write code here

  // first item in to do list is a sample
  toDoList.push({ activity: 'This is a sample activity', done: false });

  //   renders view list page and passes the to do list array
  res.render('view-list', { toDoList });
});

// TO DO: create POST method for retrieving form data and adding it to the db
// write code here
