const config = require("./index");

const db = config.db;
console.log("DB", db);

const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;
// console.log(db);

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};
