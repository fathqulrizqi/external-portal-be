import accessService from '../service/accessService.js';

const createAccess = async (req, res, next) => {
    try {
        const payload = {
            accessName: req.body.accessName || null,
        };
        const result = await accessService.create(payload);
        res.status(201).json({
            status: "Success",
            message: "Access created successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getAllAccess = async (req, res, next) => {
    try {
        const result = await accessService.getAll();
        res.status(200).json({
            status: "Success",
            message: "Accesses retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getAccessById = async (req, res, next) => {
    try {
        const payload = {
            accessId: parseInt(req.params.accessId, 10) || null, 
        };
        const result = await accessService.getById(payload);
        res.status(200).json({
            status: "Success",
            message: "Access retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const updateAccess = async (req, res, next) => {
    try {
        const payload = {
            accessId: parseInt(req.params.accessId, 10) || null,
            accessName: req.body.accessName || null,
        };
        const result = await accessService.update(payload);
        res.status(200).json({
            status: "Success",
            message: "Access updated successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const deleteAccess = async (req, res, next) => {
    try {
        const payload = {
            accessId: parseInt(req.params.accessId, 10) || null,
        };
        await accessService.remove(payload);
        res.status(200).json({
            status: "Success",
            message: "Access deleted successfully",
        });
    } catch (e) {
        next(e);
    }
};


export default {
    createAccess,
    getAllAccess,
    getAccessById,
    updateAccess,
    deleteAccess
};