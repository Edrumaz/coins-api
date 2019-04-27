import Express from 'express'
import BodyParser from 'body-parser'
import FileUpload from 'express-fileupload'
import Mongoose from 'mongoose'
import GameRoutes from './routes/coinRoutes'


const app = Express()

Mongoose.connect('mongodb://Vorbote:dontprayforme159%2A@cluster0-nflr2.gcp.mongodb.net/test?retryWrites=true',{useNewUrlParser: true})

app.use(FileUpload())
app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())

app.use('/api', CoinRoutes)

export default app
