const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      trim: true,
      maxlength: [50, 'A product name must have less than or equal to 50 characters'],
    },
    slug: String,
    price: {
      type: Number,
      required: [true, 'A product must have a price']
    },
    location: {
      type: String,
      required: [true, 'A product must have a location'],
      trim: true
    },
    minimumPurchase: {
      type: Number,
      default: 0
    },
    category: {
      type: String,
      required: [true, 'A product must have a category'],
      trim: true
    },
    description: {
      type: String,
      default: 'This product has no description',
      trim: true
    },
    imageCover: {
      type: String,
      // required: [true, 'A product must have an image']
    },
    businessEntity: {
      type: String,
      required: [true, 'A product must have a seller name'],
      trim: true,
      maxlength: [50, 'The business entity name must less than or equal to 50 characters'],
      minlength: [5, 'The business entity name must have more than or equal to 5 characters']
    },
    contactNumber: {
      type: Number,
      required: [true, "The product must have seller's contact number"],
      trim: true
    },
    type: {
      type: String,
      default: 'others',
      trim: true
    },
    feature: {
      type: String,
      default: 'others',
      trim: true
    },
    season: {
      type: String,
      default: 'others',
      trim: true
    },
    postedAt: {
      type: Date,
      default: Date.now()
    },
    available: {
      type: Boolean,
      required: true
    }
  }
);
//DOCUMENT MIDDLEWARE
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;