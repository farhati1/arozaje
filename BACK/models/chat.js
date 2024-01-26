const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Référence vers le modèle User pour les participants
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Référence vers le modèle User pour l'expéditeur du message
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
});

module.exports = mongoose.model('Chat', chatSchema);
