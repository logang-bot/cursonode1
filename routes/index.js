'use strict'

const express = require('express')
const productctrl = require('../controllers/product')

const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productctrl.getProducts)
api.get('/product/:productId', productctrl.getProduct)
api.post('/product', productctrl.saveProduct)
api.put('/product/:productId', productctrl.updateProduct)
api.delete('/product/:productId', productctrl.deleteProduct)

api.get('/private', auth, (req,res)=>{
    res.status(200).send({message: 'tienes acceso'})
})

module.exports = api
