const express = require('express');
//TODO: Import DB module
const connectDB = null;
// TODO: Import Todo Model
const Todo = null;
const app = express();
const PORT = 3000;

// TODO: Call connectDB function
connectDB();

// render view engine
app.set('view engine', 'ejs');

// set public folder to access external CSS sheets
app.use(express.static(__dirname + '/public'));

// TODO: specify use of body parser
// Hint use express.json() and express.urlencoded({extended: true})
// write code here

// GET routes
app.get('/', (req, res) => {
  res.render('index');
});

// this function is for showing the items in the to do list
app.get('/view-list', async (req, res) => {
  var toDoList = []; // toDoList has 2 properties: activity: string (stores the activity name) and done: boolean (stores if activity is done or not)

  // TODO: retrieve to do list data from the database server and add it to the toDoList variable
  // write code here
  toDoList = null;

  // renders view list page and passes the to do list array
  res.render('view-list', { toDoList });
});

// TO DO: create POST method for retrieving form data (in index.ejs) and adding it to the DB
// write code here
app.post('/add-activity', async (req, res) => {
  // TODO: Create a todo object
  const todo = {};

  // TODO: Create a new todo item by using the todo object
  const newTodo = null;

  // TODO: Save the newly created todo item
  // write code here
  res.redirect('/');
});

// TO DO: create POST method for changing the done property in the DB when clicking on ✔ or ✖
// write code here
app.post('/activity-done/:id', async (req, res) => {
  // TODO: get the done attribute for the request body
  let done = null;

  // TODO: get the id of the todo item from the request parameters
  let id = null;

  // TODO: find todo item from the database server using it's id
  const todo = null;

  // TODO: Update the done attribute of the todo item
  todo.done = null;

  // TODO: Save the updated todo item on the database server
  // write code here

  res.sendStatus(201);
});

app.listen(PORT);
console.log(`server running at port ${PORT}`);
