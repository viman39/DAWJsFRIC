if ( process.env.NODE_ENV !== 'production' ){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')

app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)