const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const studentSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    fName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    address: {
        type: String,
        required: true,
      },
    gender: {
          type: String,
          required: true
      },
    phoneNo: {
          type: Number, 
          required: true
      },
    DOB: {
          type: String,
          required: true
      },
    State: {
        type: String,
        required: true
      },
    password: {
        type: String, 
        required:true, 
        minLength: 8
    },
    admitted : false
},
    {timestamps: true}
)

studentSchema.pre('save', async function(next){
  let {password} = this
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(password, salt)
    next()
})

module.exports = mongoose.model("student", studentSchema);