/** requires */
const express = require("express")

/** configs */
const route = express.Router()

/** routes */
route.get("/", (req, res) => {

    res.send("<h1>todas os artigos</h1>")
})

route.get("/novo", (req, res) => {

    res.send("<h1>Novo artigo</h1>")
})

/** module */
module.exports = route