import Express from 'express'
import BodyParser from 'body-parser'
import FileUpload from 'express-fileupload'
import Mongoose from 'mongoose'
import CoinRoutes from './routes/coinRoutes'


// const Express = require("express");
//const BodyParser = require("body-parser");
//const MongoClient = require("mongodb").MongoClient;
//const ObjectId = require("mongodb").ObjectID;
//
//const CONNECTION_URL = "mongodb+srv://<USERNAME>:<PASSWORD>@nraboy-sample-a22jr.mongodb.net/test?retryWrites=true";
//const DATABASE_NAME = "example";
//
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
//
//var database, collection;
//
//app.listen(3000, () => {
//    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//        if(error) {
//            throw error;
//        }
//        database = client.db(DATABASE_NAME);
//        collection = database.collection("people");
//        console.log("Connected to `" + DATABASE_NAME + "`!");
//    });
//});

//const app = Express()
//const connectionString = "mongodb+srv://Vorbote:dontprayforme159%2A@cluster0-nflr2.gcp.mongodb.net/test?retryWrites=true";
//
//Mongoose.connect(connectionString, {useNewUrlParser: true})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Vorbote:dontprayforme159%2A@cluster0-nflr2.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(FileUpload())
app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())

app.use('/api', CoinRoutes)

export default app
