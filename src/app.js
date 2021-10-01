import path from 'path'
import config from '../config'
import express from 'express'
import routes from './routes'
import compress from 'compression'
import cookieSession from 'cookie-session'
import cors from 'cors'
import helmet from 'helmet'
import errorHandler from 'utils/errorHandler'

const configuration = async ( req, res, next ) => {
	req.config = config
	req.currentUrl = config.env == 'production' ? config.host: `${config.host}:${config.port}`
	req.frontEndUrl = config.feDomain
	req.rootDir = path.join( __dirname,'/' )
	next()
}

const app = express()

app.use( cookieSession({name: 'session',	keys: [config.secret]}) )
app.use( '/files', express.static( './src/public/files' ) )
app.use( cors() )
app.use(configuration)
app.use( helmet() )
app.use( compress() )
app.use( express.json() )
app.use( express.urlencoded({extended: true}) )
app.use( routes )
app.use( errorHandler )
//app.use( express.errorHandler({logger}) )

export default app