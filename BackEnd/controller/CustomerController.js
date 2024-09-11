import express from "express";
import { createUser,getAllUsers,getUser,updateUser,deleteUser } from "../service/CustomerService.js";

const createUserController=async(req,res)=>{
    try{
        const user = await createUser(req.body);
        return res.json({Message:user.Message,status:user.status});
    }
    catch(err){
        return res.json({Message:err.Message,status:false});
    }
}

const getallUserController=async(req,res)=>{
    try{
        const user= await getAllUsers();
        return res.json({message:user.Message,staus:user.status});
    }
    catch(err){
        return res.json({Message:err.message,status:false});
    }
}

const getUserController=async(req,res)=>{
    try{
        const user=await getUser(req.body);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.message,status:false});
    }
}
const updateUserController=async(req,res)=>{
    try{
        const user=await updateUser(req.body);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.Message,staus:false});
    }
}

const deleteUserController = async(req,res)=>{
    try{
        const user=await deleteUser(req.body);
        return res.json({Message:user.Message,status:true});
    }
    catch(err){
        return res.json({Message:err.Message,status:false});
    }
}

export {createUserController,getUserController,getallUserController,updateUserController,deleteUserController};