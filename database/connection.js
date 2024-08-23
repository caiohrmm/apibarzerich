const { Sequelize } = require("sequelize");

// Carregar variáveis de ambiente
require("dotenv").config();

const sequelize = new Sequelize(
  "mysql://root:kDIagJpTzggHophsyvMeMNsKrvRYgxSQ@junction.proxy.rlwy.net:41776/railway",
  {
    dialect: "mysql",
    timezone: "-03:00",
  }
);

try {
  sequelize.authenticate();
  console.log("Conectou ao MySQL no banco de dados barzerich !");
} catch (error) {
  console.log("Erro ao conectar ao banco de dados barzerich - " + error);
}

module.exports = sequelize;
