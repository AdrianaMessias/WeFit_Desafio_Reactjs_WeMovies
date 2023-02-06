// server.js
const jsonServer = require('json-server')
const cors = require('cors')
const port = process.env.PORT || 3004;

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db;

const rules = ({
  products:640
})



app.use(cors())
app.use(router)
app.listen(port, () => {
  console.log(`Servidor está rodando na porta: ${port}`)
})