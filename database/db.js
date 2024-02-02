import Sequelize from "sequelize";

export const sequelize = new Sequelize("hms_DB", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
