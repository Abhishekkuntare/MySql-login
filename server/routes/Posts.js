const express = require("express");
const router = express.Router();
const { Posts } = require("../models");


//get all posts
router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

//get each post
router.get("/byId/:id", async(req,res)=>{
  const id = req.params.id;
  const post = await Posts.findByPk(id) // find by primary key
  res.json(post)
})


//create posts
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;