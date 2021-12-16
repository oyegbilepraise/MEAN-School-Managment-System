const router = require("express").Router();
const Instructors = require('../Models/Instructors')
const nodemailer = require('nodemailer')


// Add new Instructor
router.post('/addinstructor', async (req, res) => {
    try {
        Instructors.find().then(response => {
            let a = response.map(val => val.email)
            if (a.includes(req.body.email)) {
                res.json('email already exist')
            }
            else {
                const instructor = new Instructors({
                    name: req.body.name,
                    email: req.body.email,
                    courses: req.body.option
                })
                const regInstructor = instructor.save()                                                                                                                                                                                                             

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_LOGIN,
                        pass: process.env.GMAIL_PASSWORD
                    }
                });
                console.log(req.body.email);
                const mailOptions = {
                    from: process.env.GMAIL_LOGIN, 
                    to: req.body.email, 
                    subject: "Staff Registration",
                    html: '<p>`Hello, ${req.body.name} you have been registered as an instructor @ myFavSchool.com and you login details are as follows email: ${req.body.email}, password: ${req.body.password}... Thanks.`, // Subject line</p>'// plain text body
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err)
                    else
                        console.log(info);
                });

                res.status(200).json(regInstructor)
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all instructors
router.get('/getinstructors', async (req, res) => {
    try {
        // res.json('Haga')
        await Instructors.find().populate('courses').then(response => {
            if(response){
                res.status(200).json(response)
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete existing Instructor
// router.delete('/deleteinstructor', (req, res) => {

// })
module.exports = router