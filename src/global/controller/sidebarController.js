import sidebarService from '../service/sidebarService.js'

const getMenuSidebar = async(req,res,next)=>{
    try{
        const userId = req.user.userId;
        const result = await sidebarService.getMenuSidebar(userId);
        res.status(200).json({
                status: "Success",
                message: "Sidebar retrieved successfully",
                data: result,
            });
    }catch(e){
        next(e);
    }
}

export default { getMenuSidebar}