const mongoose = require("mongoose");

const connect = async () => {
  const { URI } = process.env;
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(URI, options);
  } catch (error) {
    throw error;
  }
};

module.exports = { connect };
