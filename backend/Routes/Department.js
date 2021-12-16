const router = require("express").Router();
const Department = require('../Models/Department')

// Add New Staff
router.post('/adddept', async (req, res) => {
    let {deptName, deptAbbrevation, id} = req.body
    const department = new Department({
        departmentName: deptName,
        deptAbbrevation: deptAbbrevation,
        HOD: id
    })
    const regDept = department.save()
    res.status(200).json(regDept)
})

router.get('/getdept', async(req, res) => {
  
    Department.find().populate('HOD').then(p => {
        console.log(p);
        if(p){
            res.status(200).json(p)
        }
    })
})


module.exports = router