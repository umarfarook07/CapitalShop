const mensCollection = [
  {
    "name": "Classic Leather Jacket",
    "price": 150,
    "description": "Premium quality leather jacket with a timeless design.",
    "image": "https://example.com/images/classic-leather-jacket.jpg",
    "category": "Jackets"
  },
  {
    "name": "Slim Fit Jeans",
    "price": 80,
    "description": "Comfortable slim fit jeans made from stretchable denim.",
    "image": "https://example.com/images/slim-fit-jeans.jpg",
    "category": "Pants"
  },
  {
    "name": "Casual Sneakers",
    "price": 60,
    "description": "Versatile sneakers perfect for everyday wear.",
    "image": "https://example.com/images/casual-sneakers.jpg",
    "category": "Footwear"
  },
  {
    "name": "Graphic Tee",
    "price": 20,
    "description": "Soft cotton t-shirt with a bold graphic print.",
    "image": "https://example.com/images/graphic-tee.jpg",
    "category": "T-Shirts"
  },
  {
    "name": "Polo Shirt",
    "price": 35,
    "description": "Classic polo shirt made with breathable fabric.",
    "image": "https://example.com/images/polo-shirt.jpg",
    "category": "Shirts"
  },
  {
    "name": "Sports Watch",
    "price": 120,
    "description": "Durable sports watch with multiple fitness tracking features.",
    "image": "https://example.com/images/sports-watch.jpg",
    "category": "Accessories"
  },
  {
    "name": "Backpack",
    "price": 50,
    "description": "Spacious backpack with multiple compartments for easy organization.",
    "image": "https://example.com/images/backpack.jpg",
    "category": "Bags"
  },
  {
    "name": "Sunglasses",
    "price": 90,
    "description": "Stylish sunglasses with UV protection.",
    "image": "https://example.com/images/sunglasses.jpg",
    "category": "Accessories"
  },
  {
    "name": "Beanie",
    "price": 15,
    "description": "Warm and comfortable beanie made from 100% wool.",
    "image": "https://example.com/images/beanie.jpg",
    "category": "Hats"
  },
  {
    "name": "Leather Belt",
    "price": 40,
    "description": "High-quality leather belt with a sleek metal buckle.",
    "image": "https://example.com/images/leather-belt.jpg",
    "category": "Accessories"
  },
  {
    "name": "Denim Jacket",
    "price": 100,
    "description": "Rugged denim jacket with a vintage wash.",
    "image": "https://example.com/images/denim-jacket.jpg",
    "category": "Jackets"
  },
  {
    "name": "Chino Pants",
    "price": 60,
    "description": "Comfortable chino pants with a slim fit cut.",
    "image": "https://example.com/images/chino-pants.jpg",
    "category": "Pants"
  },
  {
    "name": "Crew Neck Sweater",
    "price": 55,
    "description": "Soft and cozy sweater perfect for cooler weather.",
    "image": "https://example.com/images/crew-neck-sweater.jpg",
    "category": "Sweaters"
  },
  {
    "name": "Watch",
    "price": 250,
    "description": "Elegant watch with a leather strap and minimalist design.",
    "image": "https://example.com/images/watch.jpg",
    "category": "Accessories"
  },
  {
    "name": "Running Shoes",
    "price": 110,
    "description": "Lightweight and breathable running shoes for peak performance.",
    "image": "https://example.com/images/running-shoes.jpg",
    "category": "Footwear"
  },
  {
    "name": "Wallet",
    "price": 30,
    "description": "Compact leather wallet with multiple card slots.",
    "image": "https://example.com/images/wallet.jpg",
    "category": "Accessories"
  },
  {
    "name": "Briefcase",
    "price": 130,
    "description": "Professional leather briefcase with a modern design.",
    "image": "https://example.com/images/briefcase.jpg",
    "category": "Bags"
  },
  {
    "name": "Bomber Jacket",
    "price": 120,
    "description": "Stylish bomber jacket with a comfortable fit.",
    "image": "https://example.com/images/bomber-jacket.jpg",
    "category": "Jackets"
  },
  {
    "name": "Fitness Tracker",
    "price": 99,
    "description": "Advanced fitness tracker with heart rate monitoring.",
    "image": "https://example.com/images/fitness-tracker.jpg",
    "category": "Accessories"
  },
  {
    "name": "Cargo Shorts",
    "price": 45,
    "description": "Durable cargo shorts with multiple pockets.",
    "image": "https://example.com/images/cargo-shorts.jpg",
    "category": "Shorts"
  },
  {
    "name": "Flip Flops",
    "price": 25,
    "description": "Comfortable flip flops with a durable sole.",
    "image": "https://example.com/images/flip-flops.jpg",
    "category": "Footwear"
  },
  {
    "name": "Hoodie",
    "price": 65,
    "description": "Soft and comfortable hoodie with a front pocket.",
    "image": "https://example.com/images/hoodie.jpg",
    "category": "Sweatshirts"
  },
  {
    "name": "Boxer Briefs",
    "price": 20,
    "description": "Breathable boxer briefs with a supportive fit.",
    "image": "https://example.com/images/boxer-briefs.jpg",
    "category": "Underwear"
  },
  {
    "name": "Cufflinks",
    "price": 50,
    "description": "Elegant cufflinks for a touch of sophistication.",
    "image": "https://example.com/images/cufflinks.jpg",
    "category": "Accessories"
  },
  {
    "name": "Tie",
    "price": 35,
    "description": "Silk tie with a classic pattern for formal occasions.",
    "image": "https://example.com/images/tie.jpg",
    "category": "Accessories"
  },
  {
    "name": "Dress Shoes",
    "price": 150,
    "description": "Classic dress shoes crafted from premium leather.",
    "image": "https://example.com/images/dress-shoes.jpg",
    "category": "Footwear"
  },
  {
    "name": "Gym Bag",
    "price": 55,
    "description": "Spacious gym bag with separate compartments for gym gear.",
    "image": "https://example.com/images/gym-bag.jpg",
    "category": "Bags"
  },
  {
    "name": "Swim Trunks",
    "price": 30,
    "description": "Quick-drying swim trunks with a vibrant pattern.",
    "image": "https://example.com/images/swim-trunks.jpg",
    "category": "Swimwear"
  },
  {
    "name": "Baseball Cap",
    "price": 25,
    "description": "Adjustable baseball cap with a classic design.",
    "image": "https://example.com/images/baseball-cap.jpg",
    "category": "Hats"
  },
  {
    "name": "Wool Coat",
    "price": 200,
    "description": "Elegant wool coat for warmth and style during winter.",
    "image": "https://example.com/images/wool-coat.jpg",
    "category": "Coats"
  }
]

module.exports ={data : mensCollection}