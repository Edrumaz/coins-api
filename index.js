import App from './app'
import Config from './config'

App.listen(Config.port, ()=>console.log('Server Up!'))