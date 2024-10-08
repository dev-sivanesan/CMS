import Customer from "../model/customerModel.js";
const createUser = async (data) => {
    try {
    const {email,age,name,dob,gender,fatherName,motherName,mobile,address,location}=data
        if (!name || !email || !dob || !gender|| !fatherName || !mobile || !motherName || !address || !location) {
            return {Message:"Name, email, password and role are required.",status:false};
        }
        const users= await Customer.findOne({ where: { email: email } });
        if (users) {
            return {Message:"User already exists." , status:false};;
        }
        else{
            await Customer.create({
            name:name,
            email: email,
            age: age,
            dob: dob,
            gender: gender,  
            fatherName: fatherName,
            motherName: motherName,
            mobile: mobile,
            address: address,
            location: location
        });
        return {Message:"created",status:true};
    } 
}catch (error) {
        return {Message:error.Message,status:false};
    }
};
const getUser = async (data) => {
    try {
        const {id}=data.params;
        const user = await Customer.findOne({ where: { id:id } });
        if (user) {
            return {Message:user,status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};
const updateUser = async (data) => {
    try {
        const {id}=data.params;
        const {email,age,name,dob,gender,fatherName,motherName,mobile,address,location}=data.body ;

        const user = await Customer.findOne({ where: { id: id } });
        if (user) {
            await user.update({
                name:name,
                email: email,
                age: age,
                dob: dob,
                gender: gender,  
                fatherName: fatherName,
                motherName: motherName,
                mobile: mobile,
                address: address,
                location: location
            });
            return {Message:user,status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};
const deleteUser = async (data) => {
    try {
        const {id}=data.params;

        const user = await Customer.findOne({ where: { id:id } });
        if (user) {
            await user.destroy();
            return {Message:"User deleted successfully.",status:true};
        }
        else{
            return {Message:"User not found.",status:false};
        }
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};

const getAllUsers = async () => {
    try {
        const users = await Customer.findAll();
        return {Message:users,status:true};
    } catch (error) {
        return {Message:error.Message,status:false};
    }
};

export {createUser,getUser,updateUser,deleteUser,getAllUsers};