const User = require("../models/User.Schema");
const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username: username,
      email: email,
      password: password,
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 60 * 60 * 24,
    });
    console.log(user);
    res.json({
      auth: true,
      token,
    });
  } catch (e) {
    return next(e);
  }
};
module.exports = createUser;
