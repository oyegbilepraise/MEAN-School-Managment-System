const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
    departmentName:{
        type: String,
        required:true
    },
    deptAbbrevation: {
        type: String,
        required: true
    },
    HOD:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'instructor'
    }
})

module.exports = mongoose.model('department', departmentSchema)