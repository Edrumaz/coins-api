import Mongoose from 'mongoose'

const CoinSchema = Mongoose.Schema({
        _id: Mongoose.Schema.Types.ObjectId,
        name: String,
        desc: String,
        year: String,
        available: Boolean,
        Symbol: String,
        img: String,
})

export default Mongoose.model('Coin', CoinSchema)
