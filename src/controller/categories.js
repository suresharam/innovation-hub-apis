const Categories = require('../models/Categories'); 

const getCategories = (req, res) => {
    Categories.find()
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
    getCategories
};
