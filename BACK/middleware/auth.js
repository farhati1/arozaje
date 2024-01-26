const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log("Token from request headers:", token);
console.log("Decoded token:", decodedToken);


    // find user in database
    const user = await User.findById(userId);

    // check if password is correct
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordCorrect) {
      req.auth = { userId };
      next();
    } else {
      throw "Invalid authentication credentials";
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};
