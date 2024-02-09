import DataTypes from "sequelize";
import { sequelize as db } from "../database/db.js";

export const CategoryProduct = db.define('categoria_producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING
  },
  // fecha_registro: {
  //   type: DataTypes.DATE
  // }
});