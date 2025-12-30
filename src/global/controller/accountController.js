import accountService from'../service/accountService.js'

const getProfile = async(req,res,next)=>{
    try{
        const userId = req.user.userId;
        const result = await accountService.getProfile(userId);
        res.status(200).json({
            status: "Success",
            message: "Profile retrieved successfully",
            data: result,
        });
    }catch(e){
        next(e)
    }
}

const updateProfile = async(req,res,next)=>{
    try{
        let profileImage = undefined;

        if (req.file) {
            let baseFolder = "misc";
            if (["image/jpeg", "image/jpg", "image/png"].includes(req.file.mimetype)) {
                baseFolder = "images";
            } else if (req.file.mimetype === "application/pdf") {
                baseFolder = "documents";
            }
            const subFolder = req.query.mainFolder || "default";
            profileImage = `/public/${baseFolder}/${subFolder}/${req.file.filename}`;
        }
        const userId = req.user.userId;
        const payload = {
            fullName : req.body.fullName,
            urlImage : profileImage,
            phone    : req.body.phone,
        }
        await accountService.updateProfile(userId, payload);
        res.status(200).json({
            status: "Success",
            message: "Profile updated successfully",
        });
    }catch(e){
        next(e)
    }
}

const updatePassword = async(req,res,next)=>{
    try{
        const userId = req.user.userId;
        const payload = {
            password : req.body.password,
            passwordConfirm : req.body.passwordConfirm,
        }
        const oldPassword = req.body.oldPassword;
        await accountService.updatePassword(userId,oldPassword,payload);
        res.status(200).json({
            status: "Success",
            message: "Password updated successfully",
        });
    }catch(e){
        next(e)
    }
}

const sendingEmailResetPassword = async(req,res,next)=>{
    try{
        const email = req.body.email;
        const application = req.body.application;
        await accountService.sendingEmailResetPassword(email,application);
        res.status(200).json({
            status: "Success",
            message: "A password reset link has been sent to your email.",
        });
    }catch(e){
        next(e)
    }
}

const resetPassword = async(req,res,next)=>{
    try{
        const token = req.query.token;
         const payload = {
            password : req.body.password,
            passwordConfirm : req.body.passwordConfirm,
        }
        await accountService.resetPassword(token,payload);
        res.status(200).json({
            status: "Success",
            message: "Password reset successfully",
        });
    }catch(e){
        next(e)
    }
}

export default {
    getProfile,
    updateProfile,
    updatePassword,
    sendingEmailResetPassword,
    resetPassword
}