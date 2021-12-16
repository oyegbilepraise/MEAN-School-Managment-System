const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')
const multer = require('multer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')
const courses = require('./Routes/Courses')
const instructor = require('./Routes/Instructor')
const staff = require('./Routes/Staff')
const adminRoute = require('./Routes/Admin')
const department = require('./Routes/Department')
const student = require('./Routes/Student')
const nodemailer = require('nodemailer')

dotenv.config()


// Mongoose Connection
const URI = process.env.URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, ()=> {
    console.log("Database Connected");
})

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:4200"
}))

app.use('/admin', adminRoute)
app.use('/courses', courses)
app.use('/instructor', instructor)
app.use('/staff', staff)
app.use('/department', department)
app.use('/student', student)

app.get('/', (req, res) => {
    res.send('Home Works!')
})


// const smtpTransport = nodemailer.createTransport({
//     host: 'smtp-relay.sendinblue.com',
//     port: 587,
//     secure: true,
//     auth: {
//         user: 'oluwadhammieh@gmail.com',
//         pass: '07001779'
//     }
// })

// async function run() {
//     let sendResult = await smtpTransport.sendMail({
//         from: 'oluwadhammieh@gmail.com',
//         to: 'talk2oyeps2@gmail.com',
//         subject: 'Hello Praise from Nodemailer',
//         text: "Lorem Hello Praise",
//         html: '<h1>Hello</h1>'
//     })
//     console.log(sendResult);
// }

// run().catch(err => console.log(err))

app.listen(4500, ()=> {
    console.log('Server connected to port 4500');
})