var express = require('express'),
    path = require('path'),
    methods = require('methods'),
    bodyParser = require('body-parser')
    cors = require('cors')
const app = express();
app.set('etag', 'strong');  
app.use(cors())
app.use(require('morgan')('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', require('./routes'))

// app.get('/', function (req, res) {
//   console.log(req.get('Origin'))
//   console.log(req.body)
//   res.send('Hello world')
// })

app.listen(3000, function() {
  console.log('listening on port 3000')
})