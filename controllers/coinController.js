import CoinModel from '../models/coinModel'

const addCoin = (req, res) => {
    let newCoin = new coinModel({
        name: res.locals.gameInfo.name,
        desc: res.locals.gameInfo.desc,
        year: res.locals.gameInfo.year,
        available: res.locals.gameInfo.available,
        symbol: res.locals.gameInfo.symbol,
        picture: res.locals.gameInfo.picture
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
