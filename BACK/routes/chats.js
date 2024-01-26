const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');

// Route pour créer une nouvelle conversation
router.post('/create', async (req, res) => {
  try {
    const { participants } = req.body;
    
    const newChat = new Chat({
      participants,
      messages: [],
    });

    const savedChat = await newChat.save();
    res.json(savedChat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de la conversation' });
  }
});

// Route pour ajouter un message à une conversation existante
router.post('/add-message/:chatId', async (req, res) => {
  try {
    const { sender, content } = req.body;
    const { chatId } = req.params;

    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: {
          messages: { sender, content },
        },
      },
      { new: true }
    );

    res.json(updatedChat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du message à la conversation' });
  }
});

module.exports = router;
