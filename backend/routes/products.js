const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  const { search } = req.query;
  const lowerSearch = search.toLowerCase();

  // Predefined image URLs for known products
  let amazonImage = 'https://via.placeholder.com/200x150.png?text=Amazon+Product';
  let flipkartImage = 'https://via.placeholder.com/200x150.png?text=Flipkart+Product';
  let snapdealImage = 'https://via.placeholder.com/200x150.png?text=Snapdeal+Product';

  if (lowerSearch.includes('laptop')) {
    amazonImage = 'https://m.media-amazon.com/images/I/71l4qF3vI9L._SL1500_.jpg';
    flipkartImage = 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/g/j/k/-original-imagzjhfjhcfscgy.jpeg?q=70';
    snapdealImage = 'https://n3.sdlcdn.com/imgs/k/m/q/Laptop-SDL890214379-1-4a339.jpeg';
  } else if (lowerSearch.includes('phone')) {
    amazonImage = 'https://m.media-amazon.com/images/I/81fxjeu8fdL._SL1500_.jpg';
    flipkartImage = 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/y/x/-original-imaghxengzjc2djt.jpeg?q=70';
    snapdealImage = 'https://n2.sdlcdn.com/imgs/k/k/b/230X258_sharpened/Samsung-Galaxy-M13-4GB-64GB-SDL515859634-1-1cb54.jpeg';
  } else if (lowerSearch.includes('headphone')) {
    amazonImage = 'https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg';
    flipkartImage = 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/c/h/-original-imagz7tpdvqc5yxj.jpeg?q=70';
    snapdealImage = 'https://n2.sdlcdn.com/imgs/k/b/m/JBL-Tune-500-Wired-Headphone-SDL262004078-1-0c56b.jpeg';
  }

  const sampleResults = [
    {
      name: `${search} - Amazon`,
      price: 57999,
      quality: 'High',
      image: amazonImage,
      link: `https://www.amazon.in/s?k=${encodeURIComponent(search)}`
    },
    {
      name: `${search} - Flipkart`,
      price: 52990,
      quality: 'Medium',
      image: flipkartImage,
      link: `https://www.flipkart.com/search?q=${encodeURIComponent(search)}`
    },
    {
      name: `${search} - Snapdeal`,
      price: 50890,
      quality: 'Low',
      image: snapdealImage,
      link: `https://www.snapdeal.com/search?keyword=${encodeURIComponent(search)}`
    }
  ];

  res.json(sampleResults);
});

module.exports = router;
