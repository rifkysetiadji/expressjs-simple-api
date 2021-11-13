const express = require('express')
const hello = require('./api/hello')
const app = express()
const port = 3000

app.use(express.json({extended:false}))

app.use("/api/hello",hello)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})