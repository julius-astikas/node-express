import { Sequelize } from "sequelize";
import dbConfig from "./db.js";

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.server,
    port: dbConfig.port,
    dialect: "mssql",
    dialectOptions: dbConfig.options,
  },
);

export default sequelize;
