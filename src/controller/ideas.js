const Ideas = require("../models/Ideas");

const createIdea = (req, res) => {
  const { body } = req;
  Ideas.create(body)
    .then((idea) => {
      if (idea) {
        res.send(idea);
      } else {
        res.send({});
      }
      //
    })
    .catch((error) => {
      res.send(error);
    });
};

const getIdeas = (req, res) => {
  Ideas.find()
    .then((ideas) => {
      if (ideas) {
        res.send(ideas);
      } else {
        res.send([]);
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  createIdea,
  getIdeas,
};
