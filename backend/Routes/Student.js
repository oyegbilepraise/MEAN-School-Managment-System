const router = require("express").Router();
const Student = require('../Models/Student')
const bcrypt = require('bcrypt')



router.get('/getAllStudents', async (req, res) => {
    try {
        Student.find().then((p) => {
            if(p){
                res.status(200).json(p)
            }
        })
    } catch (error) {
        res.status(403).json(error)
    }  
})

router.post('/regStudent', async (req, res) => {
    try {
        let {id, full_name, email, password, phoneNo, address, gender, state, date} = req.body

        Student.find().then(response => {
            let a = response.map(val => val.email)
            if(a.includes(email)){
                res.json('email already exist')
            }
            else{
                const newStudent = new Student({
                    id: id, fName: full_name, email:email, password:password, gender:gender, phoneNo: phoneNo, State: state, address:address, DOB: date
                })
                const newStd = newStudent.save()
                res.status(200).json(newStd)
            }
        })

    } catch (error) {
        res.status(200).json(error)
    }
})

router.post('/studentLogin', (req, res) => {
    let {email, password} = req.body
    try {
        Student.findOne({email}).then(response => {
            if(response){
                let pass = password
                let hash = response.password
                bcrypt.compare(pass, hash, function(err, result) {
                    if(result){
                        res.status(200).json(response)
                    }
                    else{
                        res.status(404).json(err)
                    }
                })
            }
        })
    } catch (error) {
        res.status(403).json(error)
    }
})



module.exports = router