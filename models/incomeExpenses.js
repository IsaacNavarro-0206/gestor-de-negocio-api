import DataTypes from "sequelize";
import { sequelize as db } from "../database/db.js";

export const IncomeExpenses = db.define("ingresos_egresos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_producto: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.INTEGER,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  valor: {
    type: DataTypes.DOUBLE,
  },
  // fecha_registro: {
  //   type: DataTypes.DATE,
  // },
});
