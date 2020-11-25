const SequelizeORM = require("sequelize")
const Database = require("./../database/Database")
const Category = require("./../Category/Model")

const Article = Database.define(
    "articles",
    {
        title: {
            type: SequelizeORM.STRING,
            allowNull: false
        },
        slug: {
            type: SequelizeORM.STRING,
            allowNull: false
        },
        body: {
            type: SequelizeORM.TEXT,
            allowNull: false
        }
    }
)

Category.hasMany(Article) // uma categoria tem muitos artigos
Article.belongsTo(Category) // um artigo pertence a uma categoria

// Article.sync( {force: true} )
// .then(() => console.log("\nArticleSync...\n"))
// .catch((error) => console.log("ArticleErrorSync: " + error))

module.exports = Article