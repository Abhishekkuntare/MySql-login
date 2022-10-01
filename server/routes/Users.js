const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//create posts
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("Success");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) res.json({ error: "Invalid Creaditional!" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Invalid Creaditional" });

    res.json("You logged In");
  });
});

module.exports = router;
