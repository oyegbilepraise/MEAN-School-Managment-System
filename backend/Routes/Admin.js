const router = require('express').Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.JWT_SECRET
const adminLogin = process.env.ADMIN_LOGIN
const adminPassword = process.env.ADMIN_PASSWORD

const verifyjwt = (req, res, next) => {
    let {authorization} = req.headers
    let token = authorization.split(' ')[1]
    let verifiedToken = jwt.verify(token, secret)
    if(verifiedToken){
        next()
    }
    else{
        res.send({fail: 'failed'})
    }
}

router.post('/login', (req, res) => {
    let {email, password} = req.body
    if(email === adminLogin && password === adminPassword){
        console.log(email, adminLogin, password, adminPassword);
        let claims = {email: email, password:password}
        let myRes = jwt.sign(claims, secret, {issuer: 'localhost'})
        res.status(200).json(myRes)
    }
    else{
        res.status(403).json('Forbbiden')
    }
})

router.get('/d', verifyjwt, (req, res) => {
    
})


module.exports = router;