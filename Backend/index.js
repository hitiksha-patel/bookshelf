import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import bookRoute from './route/book.route.js'

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001
const db = process.env.DATABASE

//Database connection - MongoDB

try {
  mongoose.connect(db, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
  })
   console.log("Connected to MongoDB");
}catch(err) {
   console.log("Error connecting to MongoDB:", err);
}

// defining routes

app.use("/book", bookRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})