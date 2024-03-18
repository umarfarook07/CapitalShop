const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      set: (v) => v === '' ? 'https://i.pinimg.com/564x/94/dd/0e/94dd0e941f258ad4681f89a1fc4d6797.jpg' :v,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;