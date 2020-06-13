module.exports = {
    port: process.env.PORT || 8000,
    db : process.env.MONGODB || 'mongodb://172.19.0.2:27017/shop',
    SECRET_TOKEN: 'miclavetoken'
}