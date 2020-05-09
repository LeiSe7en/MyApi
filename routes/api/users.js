var router = require('express').Router()

router.get('/user', function (req, res, next){
  res.cookie('test_cookie', 'nelson_set')
  return res.json({user: {name: 'Nelson'}})
})

router.post('/user', function (req, res, next) {
  console.log(req.get('origin'))
  return res.json({msg: 'ok'})
})

module.exports = router