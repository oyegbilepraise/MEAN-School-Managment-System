const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    coursecode: {
      type: String,
      required: true,
    },
    coursetitle: {
      type: String,
      required: true
    },
    courseunit: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("courses", courseSchema);