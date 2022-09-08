const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.getIndex = catchAsync(async (req, res, next) => {
  res.status(200).render('index', {
    title: 'Buy and sell plant products and accessories without hassle',
  });
});


exports.getIndoor = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'indoor'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Indoor Plants',
    products
  });
});

exports.getOutdoor = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'outdoor'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Outdoor Plants',
    products
  });
});

exports.getIndoor = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'indoor'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Indoor Plants',
    products
  });
});

exports.getSummer = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'season': 'summer'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Summer Plants',
    products
  });
});

exports.getWinter = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'season': 'winter'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Winter Plants',
    products
  });
});

exports.getMonsoon = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'season': 'monsoon'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Monsoon Plants',
    products
  });
});

exports.getAllSeason = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'season': 'all'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'All Season Plants',
    products
  });
});

exports.getFlower = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'flower'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Flower Plants',
    products
  });
});

exports.getFruit = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'fruit'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Fruit Plants',
    products
  });
});

exports.getVegetable = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'vegetable'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Vegetable Plants',
    products
  });
});

exports.getOrnamental = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'ornamental'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Ornamental Plants',
    products
  });
});

exports.getFlower = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'flower'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Flower Plants',
    products
  });
});

exports.getSeeds = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'seeds'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Seed',
    products
  });
});

exports.getPots = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'pot'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Pots',
    products
  });
});

exports.getSoilAndFertilizer = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'soilandfertilizer'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Soil And Fertilizer',
    products
  });
});

exports.getCeramic = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'ceramic'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Ceramic Pots',
    products
  });
});

exports.getEarthern = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'earthern'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Earthern Pots',
    products
  });
});

exports.getPlastic = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'plastic'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Plastic Pots',
    products
  });
});

exports.getVegetableSeeds = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'vegetable'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Vegetable Seeds',
    products
  });
});

exports.getFlowerSeeds = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'flower'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Flower Seeds',
    products
  });
});

exports.getShrubSeeds = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'type': 'shrub'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Shrub Seeds',
    products
  });
});

exports.getAirPurify = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'feature': 'air purifying'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Air Purifying Plants',
    products
  });
});

exports.getAromatic = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'feature': 'aromatic'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Aromatic Plants',
    products
  });
});

exports.getBonsai = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'feature': 'bonsai'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Bonsai Plants',
    products
  });
});

exports.getTool = catchAsync(async (req, res, next) => {
  // 1) Get product data from collection
  const products = await Product.find({
    'category': 'tool'
  });

  // 2) Render the template using product data
  res.status(200).render('collections', {
    title: 'Gardening Tools',
    products
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: ' Create your account'
  });
};

exports.getSellerSignupForm = (req, res) => {
  res.status(200).render('sellersignup', {
    title: ' Create your seller account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});

exports.getAboutUs = (req, res) => {
  res.status(200).render('aboutus', {
    title: 'About Us'
  });
};
exports.getContactUs = (req, res) => {
  res.status(200).render('contactus', {
    title: 'Contact Us'
  });
};
exports.getMessage = (req, res) => {
  res.status(200).render('message', {
    title: 'Page Under-Developed'
  });
};
