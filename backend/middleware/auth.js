const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.authentication.split(" ")[1];
    const decordedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decordedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};
