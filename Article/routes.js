/** requires */
const express = require("express")

/** configs */
const route = express.Router()

/** routes */
route.get("/", (req, res) => {

    res.send("<h1>todas os artigos</h1>")
})

route.get("/novo", (req, res) => {

    res.render("app/articles/new.ejs")
})

/** module */
module.exports = route