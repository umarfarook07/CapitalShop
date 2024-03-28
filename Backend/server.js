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

app.get('/products', async (req, res) => {
  try {
    console.log("Fetching products...");
    const products = await Product.find();
    console.log("Products fetched successfully:", products);
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ message: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
