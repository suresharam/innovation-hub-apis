const express = require("express");
const { ideas } = require("../controller");
const { categories } = require("../controller");


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Testing Innovation Hub app");
});

router.get("/categories", categories.getCategories);

router.post("/ideas", ideas.createIdea);
router.get("/ideas", ideas.getIdeas);

module.exports = router;
