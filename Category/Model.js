const SequelizeORM = require("sequelize")
const Database = require("./../database/Database")
const Article = require("./../Article/Model") // importando para criar um relacionamento 1-N

const Category = Database.define(
    "categories",
    {
        title: {
            type: SequelizeORM.STRING,
            allowNull: false
        },
        slug: {
            type: SequelizeORM.STRING,
            allowNull: false
        }
    }
)

Category.hasMany(Article)

Category.sync( {force: false} )
.then(() => console.log("\nCategorySync...\n"))
.catch((error) => console.log("CategoryErrorSync: " + error))

module.exports = Category