if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const mongoose = require('mongoose');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');



app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//setup mongo-atlas
const dbUrl = process.env.MONGO_URL 
mongoose.connect(dbUrl), {
    addNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('database connected')
})

//routes

app.get('/', (req, res) =>{
    res.render('app')
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

