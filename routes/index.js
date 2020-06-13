'use strict'

const express = require('express')
const productctrl = require('../controllers/product')
const api = express.Router()

api.get('/product', productctrl.getProducts)
api.get('/product/:productId', productctrl.getProduct)
api.post('/product', productctrl.saveProduct)
api.put('/product/:productId', productctrl.updateProduct)
api.delete('/product/:productId', productctrl.deleteProduct)

module.exports = api
