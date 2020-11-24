/** requires */
const express = require("express")
const Category = require("./Model") /** Model de categorias */
const slugify = require("slugify")

/** configs */
const route = express.Router()

/** routes */
route.get("/", (req, res) => {

    Category.findAll()
    .then((categories) => {

        res.render("app/categories/all.ejs", { categories })
    })
    .catch((error) => {

        console.log("findAllCategoriesError: " + error)
        res.render("<h1>Estamos com um erro aqui...</h1>")
    })
})

route.get("/nova", (req, res) => {

    res.render("app/categories/new.ejs")
})

route.post("/nova", (req, res) => {

    let title = req.body.categname
    let slug = title && slugify( title ) || false

    if (title && slug)
    {
        Category.create( {title, slug} )
        .then(() => {

            res.redirect("/app/categorias")
            return true
        })
        .catch((error) => {

            res.redirect("/app/categorias/nova")
            return false
        })
    }
    else
    {
        res.redirect("/app/categorias/nova")
        return false
    }
})

/** modules */
module.exports = route