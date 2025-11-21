const isLeader = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAccess = userRoleAccess.some(item => {
        return item.access.accessName.toLowerCase() == 'user leader'; 
    });
    if (hasAccess) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Leader Company privileges required."
        });
    }
};

const isAdminCreate = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAccess = userRoleAccess.some(item => {
        return item.access.accessName.toLowerCase() == 'create' || item.access.accessName.toLowerCase() == 'update' || item.access.accessName.toLowerCase() == 'delete' || item.access.accessName.toLowerCase() == 'full access'; 
    });
    if (hasAccess) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Admin Access Update privileges required."
        });
    }
};

const isAdminUpdate = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAccess = userRoleAccess.some(item => {
        return item.access.accessName.toLowerCase() == 'update' || item.access.accessName.toLowerCase() == 'delete' || item.access.accessName.toLowerCase() == 'full access'; 
    });
    if (hasAccess) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Admin Access Update privileges required."
        });
    }
};

const isAdminDelete = (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAccess = userRoleAccess.some(item => {
        return item.access.accessName.toLowerCase() == 'delete' || item.access.accessName.toLowerCase() == 'full access'; 
    });
    if (hasAccess) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Admin Access Delete privileges required."
        });
    }
};

const isAdminFullAccess =  (req, res, next) => {
    
    const userRoleAccess = req.user?.UserHasRoleAccess;
    
    if (!userRoleAccess || userRoleAccess.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User does not have registered roles."
        });
    }
    const hasAccess = userRoleAccess.some(item => {
        return item.access.accessName.toLowerCase() == 'full access'; 
    });
    if (hasAccess) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Admin Access Delete privileges required."
        });
    }
};

export default {
    isLeader,
    isAdminCreate,
    isAdminUpdate,
    isAdminDelete,
    isAdminFullAccess
}