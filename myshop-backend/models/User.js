const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
  sellerProfile: {
    shopName: String,
    description: String,
    logoUrl: String
  }
});

module.exports = mongoose.model('User', userSchema);