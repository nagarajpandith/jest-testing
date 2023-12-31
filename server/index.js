// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 9999, () => {
  console.log('JSON Server is running')
})
