/** requires */
const express = require("express")

/** configs */
const route = express.Router()

/** routes */
route.get("/", (req, res) => {

    res.send("<h1>todas as categorias</h1>")
})

route.get("/categorias/nova", (req, res) => {

    res.send("<h1>Nova categoria</h1>")
})

/** modules */
module.exports = route