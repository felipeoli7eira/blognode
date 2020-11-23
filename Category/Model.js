const SequelizeORM = require("sequelize")
const Database = require("./../database/Database")

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

module.exports = Category