import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})