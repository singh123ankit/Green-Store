const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');
const router = express.Router();


router
  .route('/top-10-cheap')
  .get(productController.aliasTopProducts, productController.getAllProducts);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(authController.protect,
    authController.restrictTo('admin', 'seller'),
    productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    productController.deleteProduct
  );

module.exports = router;
