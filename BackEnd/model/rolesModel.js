import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const  Roles = db.define("Role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
    }
}
);

export default Roles;
