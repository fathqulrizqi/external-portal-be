import { ResponseError } from "../../../error/responseError.js"
import { niterraappdb } from "../../../config/database.js"
import { logger } from "../../../config/logging.js";

const getAllUser = async () => {
    try {
        const usersWithRoleUser = await niterraappdb.user.findMany({
            where: {
                UserHasRoleAccess: {
                    some: {
                        roleId: 1
                    }
                }
            },
            select: {
                userId: true,
                email: true,
                isActive: true,
                
                profile: {
                    select: {
                        company: {
                            select: {
                                companyName: true
                            }
                        }
                    }
                }
            }
        });

        return usersWithRoleUser;
        
    } catch(e) {
        logger.error("Error fetching users:", e);
        
        throw new ResponseError(500, 'Failed to get all users');
    }
};

const getUserByid = async(userId)=>{
    try {
        const usersWithRoleUser = await niterraappdb.user.findMany({
            where: {
                userId : userId,
                UserHasRoleAccess: {
                    some: {
                        roleId: 1
                    }
                }
            },
            select: {
                userId: true,
                email: true,
                isActive: true,
                
                profile: {
                    select: {
                        company: {
                            select: {
                                companyName: true
                            }
                        }
                    }
                }
            }
        });

        return usersWithRoleUser;
        
    } catch(e) {
        logger.error("Error fetching users:", e);
        
        throw new ResponseError(500, 'Failed to get user');
    }
}

const getAllAdmin = async () => {
    try {
        const usersWithOtherRoles = await niterraappdb.user.findMany({
            where: {
                UserHasRoleAccess: {
                    some: {
                        roleId: {
                            not: 1 
                        }
                    }
                }
            },
            select: {
                userId: true,
                email: true,
                isActive: true,
                
                profile: {
                    select: {
                        company: {
                            select: {
                                companyName: true
                            }
                        }
                    }
                }
            }
        });

        return usersWithOtherRoles;
        
    } catch(e) {
        logger.error("Error fetching admin users:", e);
        throw new ResponseError(500, 'Failed to get all admin users');
    }
};

const getAdminById = async(userId) => {
    try {
        const adminUser = await niterraappdb.user.findMany({ 
            where: {
                userId: userId,
                UserHasRoleAccess: {
                    some: {
                        roleId: {
                            not: 1 
                        }
                    }
                }
            },
            select: {
                userId: true,
                email: true,
                isActive: true,
                
                profile: {
                    select: {
                        company: {
                            select: {
                                companyName: true
                            }
                        }
                    }
                }
            }
        });

        return adminUser;
        
    } catch(e) {
        logger.error("Error fetching admin user:", e);
        throw new ResponseError(500, 'Failed to get admin user');
    }
}


export default {
    getAllUser,
    getUserByid,
    getAllAdmin,
    getAdminById
}