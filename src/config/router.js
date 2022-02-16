const express = require("express");
const { ideas } = require("../controller");
const { categories } = require("../controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ status: "Up" });
});

router.get("/categories", categories.getCategories);

router.post("/ideas", ideas.createIdea);
router.get("/ideas", ideas.getIdeas);

module.exports = router;
