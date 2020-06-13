
var mongoose = require('mongoose')
const app =require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')

    app.listen(config.port, () =>{
        console.log(`corriendo en ${config.port} :)`)
    })
})
