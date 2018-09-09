const express = require('express')
const route = express()
const notice = require('../../db').notice

route.get('/', (req, res) => {
    // We want to send an array of all notices
    // From our database here

    notice.findAll()
        .then((notices) => {
            res.status(200).send(notices)
            
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive notices"
            })
        })

})

route.post('/', (req, res) => {
    // We expect the req to have notice in it
    // We will create a new notice

    notice.create({
        id : req.body.id , 
        notice : req.body.notice
    }).then((user) => {
        res.status(201).send(user)
        console.log("Added")
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new notice"
        })
    })
})

exports = module.exports = route
