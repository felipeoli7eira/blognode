const { Sequelize } = require("sequelize")
const SequelizeORM = require("sequelize")

const Database = new SequelizeORM("blognode", "felipe", "root", { host: "localhost", dialect: "mysql" })

module.exports = Database