import DataTypes from "sequelize";
import { sequelize as db } from "../database/db.js";

export const Product = db.define('producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING
  },
  cantidad: {
    type: DataTypes.INTEGER
  },
  fecha_registro: {
    type: DataTypes.DATE
  }
});