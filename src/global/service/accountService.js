import { niterraappdb } from "../../config/database.js";
import bcrypt from 'bcryptjs';
import { ResponseError } from "../../error/responseError.js";
import { updatePasswordValidation, updateProfileValidation } from "../validation/accountValidation.js";
import mailerTemplate from "../../utils/mailerTemplate.js";
import { logger } from "../../config/logging.js";
const getProfile = async(userId)=>{
    try{
        const profile = await niterraappdb.profile.findFirst({
            where : {userId: userId}
        })
        return profile;
    }catch(e){
        logger.error("Error fetching user profile:", e);
        throw new ResponseError(500, 'Failed to retrieve user profile data.');
    }
}

const updateProfile = async(userId, payload) => {
    try {
        try {
            await updateProfileValidation.validateAsync(payload, {
                abortEarly: false,
            });
        } catch (error) {
            const firstError = error.details[0].message;
            throw new ResponseError(401,firstError);
        }
        const updatedProfile = await niterraappdb.profile.update({
            where: {
                userId: userId,
            },
            data: {
                fullName: payload.fullName,
                urlImage: payload.urlImage,
                phone: payload.phone,
            },
        });

        return updatedProfile; 
    } catch (e) {
        if (e.code === 'P2025') {
             logger.error(`Error updating user profile for userId ${userId}: Profile not found.`);
             throw new ResponseError(404, 'Profile not found.');
        }

        logger.error("Error updating user profile:", e);
        throw new ResponseError(500, 'Failed to update user profile.');
    }
}

const updatePassword = async(userId,oldPassword,payload)=>{
    try{
        try {
            await updatePasswordValidation.validateAsync(payload,{abortEarly: false})
        } catch (error) {
            const firstError = error.details[0].message;
            throw new ResponseError(401,firstError);
        }
        const user = niterraappdb.user.findFirst({
            where:{
                userId : userId
            }
        })

        const isMatch = await bcrypt.compare(oldPassword, user.password);

        if (!isMatch) {
            throw new ResponseError(401,'Invalid old password');
        }

        await niterraappdb.user.update({
            where : {userId : userId},
            data : {password : payload.password}
        })
        return true;
    }catch(e){
        logger.error("Error updating user password:", e);
        throw new ResponseError(500, 'Failed to update password.');
    }
}

const sendingEmailResetPassword = async(email)=>{
    try{
        const user = await niterraappdb.user.findFirst({where : {email: email}})
        const token = await niterraappdb.resetPassword.create({data: {
            userId : user.userId,
            expireDate : new Date(Date.now() + 6 * 60 * 60 * 1000) 
        }})

        await mailerTemplate.resetPassword(email,token.token);
    }catch(e){
        logger.error("Error sending reset password email:", e);
        throw new ResponseError(500, 'Failed to process request or send password reset email.');
    }
}

const resetPassword = async(token,payload)=>{
    try {
        try {
            await updatePasswordValidation.validateAsync(payload, {
                abortEarly: false,
            });
        } catch (error) {
            const firstError = error.details[0].message;
            throw new ResponseError(401,firstError);
        }
        
        const existing = await niterraappdb.resetPassword.findFirst({
            where : {token : token}
        })

        if(!existing || existing.expireDate < new Date()){
            throw new ResponseError(404,'Token Invalid');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(payload.password, salt);

        const updatedUser = await niterraappdb.user.update({
            where: {
                userId: existing.userId,
            },
            data: {
                password: hashedPassword,
            },
        });

        return updatedUser; 
    }catch(e){
        logger.error("Error completing password reset:", e);
        throw new ResponseError(500, 'Failed to complete the password reset process.');
    }
}

export default {
    getProfile,
    updateProfile,
    updatePassword,
    sendingEmailResetPassword,
    resetPassword
}