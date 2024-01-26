const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  userId: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    //    required: true
  },
  lastName: {
    type: String,
    // required: true
  },

  email: {
    type: String,
    // required: true
  },
  adresse: {
    type: String,
    // required: true
  },
  isBotaniste: {
    type: Boolean,
    default: false,
  },
  plantGuarded: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
});

module.exports = mongoose.model("User", userSchema);
