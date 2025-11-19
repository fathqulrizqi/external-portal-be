import { ResponseError } from "../../../error/responseError.js"
import { ebidding } from "../../../config/database.js"

const regisVerification = async(userId)=> {
    try{
        await ebidding.user.update({
            where:{
                userId : userId
            },
            data:{
                isActive: true
            }
        })
    }catch(e){
        throw new ResponseError(400,'Failed Verification User')
    }
}

export default {
    regisVerification
}