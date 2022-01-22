const User = require("../models/User.Schema");
const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const getUser = async (req, res, next) => {
  const token = req.headers["x-accesss-token"];
  if (!token) {
    return res.status(401).json({
      auth: false,
      massage: "No haz sido aprovado!",
    });
  }
  const decoder = jwt.verify(token, config.secret);
  const user = await User.findById(decoder.id, { password: 0 });
  if (!user) {
    return res.status(404).res.send("user not found");
  }
  res.json(user);
};
module.exports = getUser;
