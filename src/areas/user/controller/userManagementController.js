import userManagementService from '../service/userManagemenntService.js'

const regisVerification = async (req,res,next)=>{
    try{
        const userId = req.user.userId;
        await userManagementService.regisVerification(userId);
        res.status(200).json({
            status: "Success",
            message: "Verification User successfully",
        });
    }catch(e){
        next(e)
    }
}

export default {regisVerification}