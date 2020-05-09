var router = require('express').Router()

router.use('/', require('./api/users'))
router.use('/', require('./api/jsonp'))
module.exports = router
