const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const Product = require('./Models/product');
const PORT = process.env.PORT || 3001;


app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
