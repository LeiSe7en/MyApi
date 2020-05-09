var router = require('express').Router()
const user = {
  name: 'Nelson',
  age: '20',
  job: 'FE-programmer'
}
router.get('/jsonp', function (req, res, next) {
  console.log(req.query)
  res.send(req.query.callback + '(' + JSON.stringify(user) + ')')
})

module.exports = router