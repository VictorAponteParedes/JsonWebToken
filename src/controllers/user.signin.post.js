const User = require("../models/User.Schema");
const jwt = require("jsonwebtoken");
const config = require("../config/secret");

const createAccessUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send("no existe este correo!");
  }
  const passwordValid = await user.validatePassword(password);
  if (!passwordValid) {
    return res.status(401).json({
      auth: false,
      token: null,
    });
  }
  const token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 60 * 60 * 24,
  });
  res.json({
    auth: true,
    token,
  });
};
module.exports = createAccessUser;
