import Mongoose from 'mongoose'

const GameSchema = Mongoose.Schema({
        title: String,
        year: String,
        img: String,
        description: String,
        Developer: String,
        Publisher: String,
        Platform: [String],
        Genre: String,
})

export default Mongoose.model('Game', GameSchema)