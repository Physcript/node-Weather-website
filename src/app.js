const express = require('express')
const path = require('path')
const hbs = require('hbs')
const weatherCode = require('../public/util/geocode.js')

const app = express()


// directory
const defaultDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(defaultDirectory, '/templates/views')
const partialsDirectory = path.join(defaultDirectory, '/templates/partials')
// setup
app.use(express.static(defaultDirectory))
app.set('view engine', 'hbs' )
app.set('views', viewsDirectory)

//hbs
hbs.registerPartials(partialsDirectory)

app.get('', (req,res) => {
    res.render('index')
})


app.get('/weather', (req,res) => {
    
    weatherCode(req.query.address, (error,response) =>{
        if(error){
            return res.send({
                error
            })
        }else{
                return res.send({
                forcast: response
            })
        }
    })
})

app.get('/about', (req,res) => {
    res.render('about')
})


app.get('*' , (req,res) => {
    res.send('<h1>Invalid</h1>')
})

app.listen(3000, () => {
    console.log('port 3000')
})