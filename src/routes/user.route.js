const { Router } = require("express");
const route = Router();

const createUser = require("../controllers/user.post");
const getUser = require("../controllers/user.get");
const accessUser = require("../controllers/user.signin.post");

route.post("/login", createUser);
route.get("/perfil", getUser);
route.post("/signin", accessUser);

module.exports = route;
