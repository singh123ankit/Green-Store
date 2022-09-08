const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getIndex);
router.get('/collections/indoor-plants', authController.isLoggedIn, viewsController.getIndoor);
router.get('/collections/outdoor-plants', authController.isLoggedIn, viewsController.getOutdoor);
router.get('/collections/summer-plants', authController.isLoggedIn, viewsController.getSummer);
router.get('/collections/winter-plants', authController.isLoggedIn, viewsController.getWinter);
router.get('/collections/monsoon-plants', authController.isLoggedIn, viewsController.getMonsoon);
router.get('/collections/all-season-plants', authController.isLoggedIn, viewsController.getAllSeason);
router.get('/collections/flower', authController.isLoggedIn, viewsController.getFlower);
router.get('/collections/fruit', authController.isLoggedIn, viewsController.getFruit);
router.get('/collections/ornamental', authController.isLoggedIn, viewsController.getOrnamental);
router.get('/collections/vegetable', authController.isLoggedIn, viewsController.getVegetable);
router.get('/collections/ceramic-pots', authController.isLoggedIn, viewsController.getCeramic);
router.get('/collections/pots', authController.isLoggedIn, viewsController.getPots);
router.get('/collections/plastic-pots', authController.isLoggedIn, viewsController.getPlastic);
router.get('/collections/earthern-pots', authController.isLoggedIn, viewsController.getEarthern);
router.get('/collections/soil-and-fertilizer', authController.isLoggedIn, viewsController.getSoilAndFertilizer);
router.get('/collections/air-purify-plants', authController.isLoggedIn, viewsController.getAirPurify);
router.get('/collections/aromatic-plants', authController.isLoggedIn, viewsController.getAromatic);
router.get('/collections/vegetable-seeds', authController.isLoggedIn, viewsController.getVegetableSeeds);
router.get('/collections/flower-seeds', authController.isLoggedIn, viewsController.getFlowerSeeds);
router.get('/collections/shrub-seeds', authController.isLoggedIn, viewsController.getShrubSeeds);
router.get('/collections/seeds', authController.isLoggedIn, viewsController.getSeeds);
router.get('/collections/bonsai-plants', authController.isLoggedIn, viewsController.getBonsai);
router.get('/collections/tools', authController.isLoggedIn, viewsController.getTool);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);
router.get('/sellersignup', authController.isLoggedIn, viewsController.getSellerSignupForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/aboutus', authController.isLoggedIn, viewsController.getAboutUs);
router.get('/contactus', authController.isLoggedIn, viewsController.getContactUs);
router.get('/message', authController.isLoggedIn, viewsController.getMessage);
router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
module.exports = router;