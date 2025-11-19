const isAdmin = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAdminRole = userRoleAccess.some(item => {
        return item.role.roleName.toLowerCase() != 'user'; 
    });
    if (hasAdminRole) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Administrator privileges required."
        });
    }
};

const isUser = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAdminRole = userRoleAccess.some(item => {
        return item.role.roleName.toLowerCase() == 'user'; 
    });
    if (hasAdminRole) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User privileges required."
        });
    }
};

export default {
    isAdmin,
    isUser
}