const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const bcrypt = require("bcrypt");

// create user
router.post("/", async (req, res) => {
  const {
    name,
    lastName,
    email,
    adresse,
    isBotaniste,
    plantGuarded,
    password,
    userId,
  } = req.body;
  try {
    // hash password before storing in database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      userId,
      name,
      lastName,
      email,
      adresse,
      isBotaniste,
      plantGuarded,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Assurez-vous que l'ID de l'utilisateur est envoyé dans le corps de la requête
    const userId = req.body.userId;
    console.log("User ID from request body:", req.body.userId);


    // Vérifiez si l'ID de l'utilisateur est spécifié
    if (!userId) {
      console.error("ID de l'utilisateur manquant dans le corps de la requête");
      return res.status(400).json({ error: "ID de l'utilisateur manquant" });
    }

    const user = await User.findOne({ userId });

    if (!user) {
      console.error("Utilisateur introuvable");
      return res.status(404).json({ error: "Utilisateur introuvable" });
    }

    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

//get user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) {
      return res.status(404).json({ message: "Cannot find this user" });
    }
    res.json({ userId: user.userId }); // Renvoie uniquement l'identifiant de l'utilisateur
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//update user
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.adresse != null) {
    res.user.adresse = req.body.adresse;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  try {
    user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Cannot find this user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

async function getUserByuserId(req, res, next) {
  try {
    user = await User.findOne({ userId: req.params.userId });
    if (!user) {
      return res.status(404).json({ message: "Cannot find this user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

module.exports = router;
