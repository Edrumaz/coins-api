const Mongoose = require('mongoose')

const Coin = Mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    desc: String,
    year: String,
    available: Boolean,
    symbol: String,
    picture: String
})

export default Mongoose.model('Coin', CoinSchema)
