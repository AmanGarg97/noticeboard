const route = require('express').Router()

route.use('/add', require('./add'))

exports = module.exports = {
    route
}