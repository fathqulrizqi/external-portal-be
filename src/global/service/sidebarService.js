import { ebidding } from "../../config/database.js"

const buildMenuHierarchy = (menus, parentId = null) => {
    return menus
        .filter(item => {
            const itemParent = (item.parentId === undefined || item.parentId === '') ? null : item.parentId;
            const targetParent = (parentId === undefined || parentId === '') ? null : parentId;

            const isMatch = String(itemParent) === String(targetParent);

            const isSelfReferencing = String(item.id) === String(itemParent);

            return isMatch && !isSelfReferencing;
        })
        .map(item => ({
            ...item, 
            children: buildMenuHierarchy(menus, item.id)
        }));
};

const getMenuSidebar = async(userId) => {

    const userAccesses = await ebidding.userHasRoleAccess.findMany({
        where: { userId: userId },
        include: { access: true }
    });

    const allMenus = await ebidding.menu.findMany({
        where: { isShow: true, isActive: true },
        orderBy: { sequence: 'asc' }
    });

    const processedMenus = allMenus.map(menu => {
        
        const realId = menu.menuId || menu.id; 

        let mappedMenu = {
            id: realId, 
            parentId: menu.parentId,
            menuName: menu.menuName,
            icon: menu.icon,
            redirect: menu.redirect,
            access: [] 
        };

        if (menu.isGlobal) {
            mappedMenu.access = ['global'];
            return mappedMenu;
        }

        const myAccessToThisMenu = userAccesses.filter(ua => String(ua.menuId) === String(realId));

        if (myAccessToThisMenu.length > 0) {
            mappedMenu.access = myAccessToThisMenu.map(ua => ua.access.accessName);
        } else {
            mappedMenu.access = ['lock'];
        }

        return mappedMenu;
    });

    const hierarchyResult = buildMenuHierarchy(processedMenus, null);
    
    return hierarchyResult;
}

export default { getMenuSidebar };