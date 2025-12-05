import companyService from '../service/companyService.js';

const create = async (req, res, next) => {
    try {
        const companyImage = req.files.companyImage ? req.files.companyImage[0] : null;
        const userId = req.user.userId;
        const payload = {
            companyName         : req.body.companyName,
            companyFoundingDate : req.body.companyFoundingDate,
            companyStatus       : req.body.companyStatus,
            companyTelpFax      : req.body.companyTelpFax,
            companyAddress      : req.body.companyAddress,
            companyEmail        : req.body.companyEmail,
            npwp                : req.body.npwp,
            website             : req.body.website || null,
            segmentId           : req.body.segmentId,
            urlImage            : companyImage 
        }
        
        const result = await companyService.create(userId,payload);
        res.status(201).json({
            status: "Success",
            message: "Company  created successfully",
        });
    } catch (e) {
        next(e);
    }
};

const getAllCompany = async (req, res, next) => {
    try {
        const result = await companyService.getAll();
        res.status(200).json({
            status: "Success",
            message: "Company s retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getCompanyById = async (req, res, next) => {
    try {
        const payload = {
            companyId: parseInt(req.params.companyId, 10) || null, 
        };
        const result = await companyService.getById(payload);
        res.status(200).json({
            status: "Success",
            message: "Company retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};
const getCompanyByUserId = async (req, res, next) => {
    try {
        const result = await companyService.getByUserId(req.user.userId);
        res.status(200).json({
            status: "Success",
            message: "Company retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const companyImage = req.files.companyImage ? req.files.companyImage[0] : null;
        const userId = req.user.userId;
        const payload = {
            companyName         : req.body.companyName ,
            companyFoundingDate : req.body.companyFoundingDate ,
            companyStatus       : req.body.companyStatus ,
            companyTelpFax      : req.body.companyTelpFax ,
            companyAddress      : req.body.companyAddress ,
            companyEmail        : req.body.companyEmail ,
            npwp                : req.body.npwp ,
            website             : req.body.website ,
            segmentId           : req.body.segmentId ,
            urlImage            : companyImage ?? undefined
        }
        const result = await companyService.update(userId,payload);
        res.status(200).json({
            status: "Success",
            message: "Company  updated successfully",
        });
    } catch (e) {
        next(e);
    }
};

const deleteCompany = async (req, res, next) => {
    try {
        const payload = {
            companyId: parseInt(req.params.companyId, 10) || null,
        };
        await companyService.remove(payload);
        res.status(200).json({
            status: "Success",
            message: "Company  deleted successfully",
        });
    } catch (e) {
        next(e);
    }
};


export default {
    create,
    getAllCompany,
    getCompanyById,
    getCompanyByUserId,
    update,
    deleteCompany
};