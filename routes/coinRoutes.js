import Express from 'express'
import CoinController from '../controllers/coinController'
import UploadImage from '../middlewares/uploadImg'

const api = Express.Router()

api.post('/coin', UploadImage, CoinController.addCoin)
api.get('/coin', CoinController.getCoin)

export default api
