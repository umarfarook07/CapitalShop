const mongoose = require('mongoose');
const mensCollection = require('./data.js');
const Product = require('../Models/product.js');
require('dotenv').config();




const mongoURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/Capital-Shop'

async function main() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

main();


const initDB = async () =>{
  await Product.deleteMany({});
  await Product.insertMany(mensCollection.data);
  console.log('Product was saved successfully');
}

initDB();
