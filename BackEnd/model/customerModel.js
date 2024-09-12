import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
const Customer= db.define('customer',{
    id:{
        type:DataTypes.INTEGER ,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    },
    name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    dob:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fatherName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    motherName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    mobile:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    address:{
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
