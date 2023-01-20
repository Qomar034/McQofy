const router = require('express').Router()

const foodRouter = require('./foodRoute')

router.use('/food', foodRouter)

module.exports = router