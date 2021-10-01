import express from 'express'

const routes = express.Router()
routes.use('/bar', foo)

export default routes