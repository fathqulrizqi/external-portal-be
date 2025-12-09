
import { niterraappdb } from "../../../config/database.js";
import { createMenuValidation,updateMenuValidation } from "../validation/menuValidation.js";
import { ResponseError } from "../../../error/responseError.js";

const handleValidationError = (error) => {
    const firstError = error.details[0].message;
    throw new ResponseError(404,firstError);
}

const create = async (payload) =>{
    try {
        await createMenuValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }
    const existing = await niterraappdb.menu.findFirst({
        where : {menuName : payload.menuName}
    })

    if(existing){
        throw new ResponseError(409,'Menu name already exists');
    }

    await niterraappdb.menu.create({
        data: {
            sequence : payload.sequence,
            parentId : payload.parentId,
            icon     : payload.icon,
            menuName : payload.menuName,
            redirect : payload.redirect,
            isGlobal : payload.isGlobal,
            isShow   : payload.isShow,
            isActive : payload.isActive
        }
    })

    return true;
}
const getAll = async () =>{
    const menu = await niterraappdb.menu.findMany();
    return menu;
}

const update = async (menuId,payload) =>{
    try {
        await updateMenuValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const existing = await niterraappdb.menu.findFirst({
        where : {menuId : menuId}
    })

    if(!existing){
        throw new ResponseError(404,'Menu Not Found');
    }

    await niterraappdb.menu.update({
        where : {menuId : menuId},
        data : {
            sequence : payload.sequence,
            parentId : payload.parentId,
            icon     : payload.icon,
            menuName : payload.menuName,
            redirect : payload.redirect,
            isGlobal : payload.isGlobal,
            isShow   : payload.isShow,
            isActive : payload.isActive
        }
    })

    return true;
    
}
const remove = async (menuId) =>{
    
    const menu = await niterraappdb.menu.findUnique({
        where : {menuId : menuId}
    })

    if(!menu){
        throw new ResponseError(404,'Menu not found');
    }

    try {
        await niterraappdb.menu.delete({
            where: { menuId: menuId }
        });
    } catch (error) {
        if (error.code === 'P2025') { 
            throw new ResponseError(404,'Menu not found');
        }
        throw error;
    }
}

export default {
    create,
    getAll,
    update,
    remove
}