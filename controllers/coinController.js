import CoinModel from '../models/coinModel'

const addCoin = (req, res) => {
    let newCoin = new CoinModel({
        _id: res.locals.coinInfo._id,
        name: res.locals.coinInfo.name,
        desc: res.locals.coinInfo.desc,
        year: res.locals.coinInfo.year,
        available: res.locals.coinInfo.available,
        symbol: res.locals.coinInfo.symbol,
        img: res.locals.coinInfo.img,
    })
    newCoin.save().then(()=>{
        return res.status(201).send({newCoin})
    }).catch(err => { return res.status(500).send({error: err}) })
}

const getCoin = (req, res) => {
    CoinModel.findOne({title: req.query.t}).then(coin=>{
        return res.status(201).send({coin})
    }).catch(err => {
        return res.status(500).send({error: err})
    })
}

export default {
    addCoin,
    getCoin
}
