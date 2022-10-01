const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

//get each message
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: {
      PostId: postId,
    },
  }); // find by primary key
  res.json(comments);
});

//create a message
router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
