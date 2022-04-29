const mongoose = require('mongoose');

//TODO: Create the schema of a Todo
// A todo consists of an activity which is a string as is required
// A todo also has an indicator if its done denoted by the boolean
//   value where false is its default
const TodoSchema = new mongoose.Schema({});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
