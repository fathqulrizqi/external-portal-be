import { ebidding } from "../../config/database.js"

const buildMenuHierarchy = (menus, parentId = null) => {
    return menus
        .filter(item => item.parentId === parentId)
        .map(item => ({
            ...item, 
            children: buildMenuHierarchy(menus, item.id)
        }));
};

const getMenuSidebar = async(userId) => {

    const userAccesses = await ebidding.userHasRoleAccess.findMany({
        where: {
            userId: userId
        },
        include: {
            access: true
        }
    });

    const allMenus = await ebidding.menu.findMany({
        where: {
            isShow: true,
            isActive: true
        },
        orderBy: {
            sequence: 'asc'
        }
    });

    const processedMenus = allMenus.map(menu => {
       
        if (menu.isGlobal) {
            return {
                menuId: menu.menuId, 
                parentId: menu.parentId,
                menuName: menu.menuName,
                icon: menu.icon,
                redirect: menu.redirect,
                access: ['global'] 
            };
        }
        const myAccessToThisMenu = userAccesses.filter(ua => ua.menuId === menu.id);

        if (myAccessToThisMenu.length > 0) {
            const accessList = myAccessToThisMenu.map(ua => ua.access.accessName); 

            return {
                menuId: menu.id,
                parentId: menu.parentId,
                menuName: menu.menuName,
                icon: menu.icon,
                redirect: menu.redirect,
                access: accessList
            };
        }
        return {
            menuId: menu.id,
            parentId: menu.parentId,
            menuName: menu.menuName,
            icon: menu.icon,
            redirect: menu.redirect,
            access: ['lock']
        };
    });

    const hierarchyResult = buildMenuHierarchy(processedMenus, null);
    return hierarchyResult;
}

export default {getMenuSidebar};