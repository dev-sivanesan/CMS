import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
const Customer= db.define('info',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    DOB:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    Gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    FatherName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    MotherName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Mobile:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    Address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
});

export default Customer;
