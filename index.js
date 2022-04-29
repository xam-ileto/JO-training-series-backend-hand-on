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

// this function is for showing the items in the to do list
app.get('/view-list', (req, res) => {
  var toDoList = []; // toDoList has 2 properties: activity: string (stores the activity name) and done: boolean (stores if activity is done or not)

  //   TO DO: retrieve to do list data from server and add it to the toDoList variable
  // write code here

  // first item in to do list is a sample
  toDoList.push({ activity: 'This is a sample activity', done: false });
  toDoList.push({ activity: 'This is a sample activity', done: true });

  //   renders view list page and passes the to do list array
  res.render('view-list', { toDoList });
});

// TO DO: create POST method for retrieving form data (in index.ejs) and adding it to the DB
// write code here

// TO DO: create POST method for changing the done property in the DB when clicking on ✔ or ✖
// write code here
