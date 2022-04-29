// This file contains the DB module
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //TODO: Enter you mongodb uri
    MONGO_URI = 'mongodb://localhost:27017/todo';
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
