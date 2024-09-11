import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Roles from "./rolesModel.js";

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Roles,
      key: "role_number",
    },
  }
}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

Roles.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Roles, { foreignKey: 'role_id' });

export default User;
