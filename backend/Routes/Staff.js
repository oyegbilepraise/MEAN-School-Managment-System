const router = require('express').Router()
const Instructors = require('../Models/Instructors')
const nodemailer = require('nodemailer')

router.post('/login', async (req, res) => {
    let {email, password} = req.body
    await Instructors.find().then(p => {
        let a = p.find(val => val.email === email)
        if(a){
            res.status(200).json(a)
        }
        else{
            res.status(403).json('NotRegistered')
        }
    })
})

router.get('/getstaff', async (req, res) => {
 let p = await  Instructors.find().populate('courses');
        if(p){
            res.status(200).json(p)
        }
})


module.exports = router;