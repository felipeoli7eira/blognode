const SequelizeORM = require("sequelize")
const Database = require("./../database/Database")

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

module.exports = Article