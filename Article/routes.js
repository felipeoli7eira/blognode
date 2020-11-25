/** requires */
const express = require("express")
const Category = require("./../Category/Model")
const Article = require("./Model")
const slugify = require("slugify")

/** configs */
const route = express.Router()

/** routes */
route.get("/", (req, res) => {

    res.send("<h1>todas os artigos</h1>")
})

route.get("/novo", (req, res) => {

    Category.findAll()
    .then((categories) => {

        res.render("app/articles/new.ejs", {categories})
    })
    .catch((error) => {

        console.log("findAllCategoriesOnArticleError: " + error)
        res.send("Erro ao buscar pelas categorias")
    })
})

route.post("/novo", (req, res) => {

    const { title, body, category } = req.body
    const slug = slugify( title )

    Article.create(
        {
            title,
            body,
            slug,
            categoryId: category
        }
    )
    .then(() => {

        res.redirect("/app/artigos")
    })
    .catch((error) => {

        res.send("<h1>Erro ao tentar criar um novo artigo</h1>")
    })
})

/** module */
module.exports = route