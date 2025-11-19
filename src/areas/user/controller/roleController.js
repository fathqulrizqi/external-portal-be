import roleService from '../service/roleService.js';

const createRole = async (req, res, next) => {
    try {
        const payload = {
            roleName: req.body.roleName || null,
        };
        const result = await roleService.create(payload);
        res.status(201).json({
            status: "Success",
            message: "Role created successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getAllRoles = async (req, res, next) => {
    try {
        const result = await roleService.getAll();
        res.status(200).json({
            status: "Success",
            message: "Roles retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getRoleById = async (req, res, next) => {
    try {
        const payload = {
            roleId: parseInt(req.params.roleId, 10) || null, 
        };
        const result = await roleService.getById(payload);
        res.status(200).json({
            status: "Success",
            message: "Role retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const updateRole = async (req, res, next) => {
    try {
        const payload = {
            roleId: parseInt(req.params.roleId, 10) || null,
            roleName: req.body.roleName || null,
        };
        const result = await roleService.update(payload);
        res.status(200).json({
            status: "Success",
            message: "Role updated successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const deleteRole = async (req, res, next) => {
    try {
        const payload = {
            roleId: parseInt(req.params.roleId, 10) || null,
        };
        await roleService.remove(payload);
        res.status(200).json({
            status: "Success",
            message: "Role deleted successfully",
        });
    } catch (e) {
        next(e);
    }
};


export default {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
};