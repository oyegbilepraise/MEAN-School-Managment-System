const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      default: '0000',
      // required: true,
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    }]
  },
  {timestamps: true}
);

module.exports = mongoose.model("instructor", instructorSchema);