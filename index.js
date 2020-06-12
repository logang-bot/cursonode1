const express = require('express')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')

const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req,res)=>{
    res.send(200, {products: []})
})

app.get('api/product/:productId', (req, res) => {

})

app.post('/api/product', (req,res)=>{
    console.log(req.body)
    res.status(404).send({message: 'El producto se ha recibido'})
})

app.put('api/prodcut/:productId', (req,res)=>{

})

app.delete('api/product/:productId', (req,res)=>{

})

mongoose.connect("mongodb://172.19.0.2:27017/shop", (err, res)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')

    app.listen(port, () =>{
        console.log(`corriendo en ${port} :)`)
    })
})
