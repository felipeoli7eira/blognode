/** requires */

const express = require("express")
const Database = require("./database/Database")

/** configs */

const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))

app.set("view engine", "ejs") /** O ejs precisa que exista uma pasta chamada "views" */
app.use(express.static("./public"))

/** Database Conn Auth */
Database.authenticate()
.then(() => console.log("Connected..."))
.catch((error) => console.log("DatabaseAuthError: " + error))


/** routes */

app.get("/", (req, res) => {

    res.render("index")
})

/** server */

app.listen(8080, "localhost", () => console.log("running..."))