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

const users = [];

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  users.forEach(user => {
    if (user.email === email && user.password === password) {
      res.send('Welcome to your new account at ' + email + ' with ' + password);
    }
    res.send(
      'Sorry, you are not authorized to access this resource. Please try again.'
    )
  })
});

app.post('/register', (req, res) => {
  const {email, password} = req.body;
  users.push({email: email, password: password});
  res.json({ message: 'user added successfully' });
});
app.get('/users', (req, res) => {
  res.json(users);
})
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
