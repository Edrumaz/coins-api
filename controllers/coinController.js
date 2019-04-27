import CoinModel from '../models/coinModel'

const addCoin = (req, res) => {
    let newCoin = new coinModel({
        name: res.locals.coinInfo.name,
        desc: res.locals.coinInfo.desc,
        year: res.locals.coinInfo.year,
        available: res.locals.coinInfo.available,
        symbol: res.locals.coinInfo.symbol,
        picture: res.locals.coinInfo.picture
    })
    newCoin.save().then(()=>{
        return res.status(201).send({newCoin})
    }).catch(err => { return res.status(500).send({error: err}) })
}

const getCoin = (req, res) => {
    CoinModel.findOne({name: req.query.c}).then(coin=>{
        return res.status(201).send({coin})
    }).catch(err => {
        return res.status(500).send({error: err})
    })
}

export default {
    addCoin,
    getCoin
}
