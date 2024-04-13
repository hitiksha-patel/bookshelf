import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Bookshelf is running!!!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})