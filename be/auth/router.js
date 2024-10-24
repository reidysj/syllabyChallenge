const router = require('express').Router()
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')
const Users = require('../users/model.js')
const uuid = require('uuid')

router.post('/register', verifyUser, verifyUnique, (req, res) => {
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 12);
    newUser.password = hash;
    newUser.user_id = uuid.v4()
    Users.add(newUser)
    .then(user => {
        const token = generateToken(user, false)
        res.status(201).json({username: user.username, user_id: user.user_id, token})
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/login', verifyUser, (req, res) => {
    const {username, password, rememberMe} = req.body;
    Users.getBy({username})
    .then(user => {
        console.log(user)
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user, rememberMe)
            const response = {user: user.username, user_id: user.user_id, token}
            res.status(200).json(response)
        } else {
            res.status(401).json({message: 'Authentication failed'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

function verifyUser(req, res, next){
    if(req.body.username && req.body.password){
        next()
    } else {
        res.status(400).json({message: 'Users must have a username and a password.'})
    }
}

function verifyUnique(req, res, next){
    Users.getBy({'username': req.body.username})
    .then(user => {
        if(user){
            res.status(400).json({message: "Username already exists."})
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({err: err})
    })
}

module.exports = router