
import menuService from '../service/menuService.js'

const create = async(req,res,next)=>{
    try{
        const payload = {
            sequence : req.body.sequence,
            parentId : req.body.parentId,
            icon     : req.body.icon,
            menuName : req.body.menuName,
            redirect : req.body.redirect,
            isGlobal : req.body.isGlobal,
            isShow   : req.body.isShow,
            isActive : req.body.isActive
        }    

        await menuService.create(payload);
        
        res.status(201).json({
            status: "Success",
            message: "Menu created successfully",
        });

    }catch(e){
        next(e)
    }
}

const getAll = async(req,res,next)=>{
    try{
        const result = await menuService.getAll();
        res.status(200).json({
                status: "Success",
                message: "Menu retrieved successfully",
                data: result,
            });
    }catch(e){
        next(e);
    }
}



const update = async (req,res,next)=>{
    try{
        const menuId = req.params.menuId;
        const payload = {
            sequence : req.body.sequence,
            parentId : req.body.parentId,
            icon     : req.body.icon,
            menuName : req.body.menuName,
            redirect : req.body.redirect,
            isGlobal : req.body.isGlobal,
            isShow   : req.body.isShow,
            isActive : req.body.isActive
        }

        await menuService.update(menuId,payload);
        res.status(200).json({
            status: "Success",
            message: "Menu updated successfully",
            data: result,
        });
    }catch(e){
        next()
    }
}

const remove = async (req,res,next)=>{
    try{
        const menuId =  parseInt(req.params.menuId,10) || null;
        await menuService.remove(menuId);

        res.status(200).json({
            status: "Success",
            message: "Menu deleted successfully",
        });
    }catch(e){
        next(e)
    }
}

export default {
    create,
    getAll,
    update,
    remove
}