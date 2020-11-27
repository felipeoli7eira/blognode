/** requires */

const express = require("express")
const Database = require("./database/Database")
const CategoryRoutes = require("./Category/routes")
const ArticleRoutes = require("./Article/routes")

const Article = require("./Article/Model")
const Category = require("./Category/Model")

/** configs */

const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))

app.set("view engine", "ejs") /** O ejs precisa que exista uma pasta chamada "views" */
app.use(express.static("./public"))

/** Database */
Database.authenticate()
.then(() => console.log("\nConnected...\n"))
.catch((error) => console.log("DatabaseAuthError: " + error))


/** routes */

app.use("/app/categorias", CategoryRoutes)
app.use("/app/artigos", ArticleRoutes)

app.get("/", (req, res) => {

    Article.findAll( { order: [ ["id", "DESC"] ] } )
    .then((articles) => {

        res.render("index", {articles})
    })
    .catch((error) => {

        res.send("<h1>Erro</h1>")
    })
})

app.get("/artigo/:slug", (req, res) => {

    const {slug} = req.params

    Article.findOne({ where: { slug } })
    .then((article) => {

        res.send(article.body)
    }).catch(error => {

        res.send("<h1>Erro</h1>")
    })
})


/** server */

app.listen(8080, "localhost", () => console.log("running..."))