const { Sequelize } = require("sequelize");

// Carregar variáveis de ambiente
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  timezone: "-03:00",
});

try {
  sequelize.authenticate();
  console.log("Conectou ao MySQL no banco de dados barzerich !");
} catch (error) {
  console.log("Erro ao conectar ao banco de dados barzerich - " + error);
}

module.exports = sequelize;
