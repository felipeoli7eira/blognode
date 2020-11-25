const { Sequelize } = require("sequelize")
const SequelizeORM = require("sequelize")

const Database = new SequelizeORM(
    "blognode",
    "felipe",
    "root",
    { host: "localhost", dialect: "mysql", timezone: "-03:00" }
)

module.exports = Database