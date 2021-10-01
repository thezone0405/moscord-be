import 'app-module-path/register'
import logger from 'utils/logger'
import app from './app'
import config from '../config'

const serverUp = ( app ) => {
	const server = app.listen( config.port )
	process.on( 'unhandledRejection', ( reason, p ) =>
		logger.error( `Unhandled Rejection at: Promise ${p} ${reason}` )
	)
	server.on( 'listening', () =>{
		logger.info( `Application started on http://${config.host}:${config.port}` )
    })
}
serverUp( app )