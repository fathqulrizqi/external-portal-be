export const userVerifiedMiddleware = (req, res, next) => {
    
    const user = req.user;
    
    if (!user || user.length === 0) {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: User is not logged in."
        });
    }
    if (req.user.isVerified != false) {
        next(); 
    } else {
        return res.status(403).json({
            status: "error",
            message: "Access Denied: Form L9 must be verified."
        });
    }
};