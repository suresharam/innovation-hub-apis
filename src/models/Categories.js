const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  categoryId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Categories = model("categories", categoriesSchema);

module.exports = Categories;
