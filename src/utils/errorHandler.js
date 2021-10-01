import logger from 'utils/logger'
export default (err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
}