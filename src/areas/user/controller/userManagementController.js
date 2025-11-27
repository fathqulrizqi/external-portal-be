import userManagementService from '../service/userManagemenntService.js'

const getAllUser = async (req,res,next)=>{
    try{
        const result = await userManagementService.getAllUser();
        res.status(200).json({
            status: "Success",
            message: "User retrieved successfully",
            data: result,
        });
    }catch(e){
        next(e)
    }
}

const getUserByid = async(req,res,next)=>{
    try{
        const userId = req.params.userId;
        const result = await userManagementService.getUserById(userId);
        res.status(200).json({
            status: "Success",
            message: "User retrieved successfully",
            data: result,
        });
    }catch(e){
        next(e)
    }
}
const getAllAdmin = async (req,res,next)=>{
    try{
        const result = await userManagementService.getAllAdmin();
        res.status(200).json({
            status: "Success",
            message: "Admin retrieved successfully",
            data: result,
        });
    }catch(e){
        next(e)
    }
}

const getAdminByid = async(req,res,next)=>{
    try{
        const userId = req.params.userId;
        const result = await userManagementService.getAdminById(userId);
        res.status(200).json({
            status: "Success",
            message: "Admin retrieved successfully",
            data: result,
        });
    }catch(e){
        next(e)
    }
}



export default {
    getAllUser,
    getUserByid,
    getAllAdmin,
    getAdminByid
}