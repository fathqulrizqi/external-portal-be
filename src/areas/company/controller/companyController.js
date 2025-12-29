import { getAllCompanies } from '../service/companyService.js';
import { 
    createCompany, 
    getCompanyByUser, 
    updateCompany, 
    deleteCompany, 
    addUserToCompany 
} from '../service/companyService.js';

const getAllCompaniesController = async (req, res, next) => {
    try {
        const { application, companyStatus } = req.query;
        const companies = await getAllCompanies({ application, companyStatus });
        res.status(200).json(companies);
    } catch (e) {
        next(e);
    }
};

const create = async (req, res, next) => {
    try {
        const companyImage = req.file.companyImage ? req.file.companyImage : null;
        console.log(companyImage);
        const userId = req.user.userId;
        const payload = {
            companyName         : req.body.companyName,
            companyStatus       : req.body.companyStatus,
            companyTelpFax      : req.body.companyTelpFax,
            companyAddress      : req.body.companyAddress,
            companyEmail        : req.body.companyEmail,
            npwp                : req.body.npwp,
            companyCode         : req.body.companyCode,
            companyType         : req.body.companyType,
            companyCity         : req.body.companyCity,
            urlImage            : companyImage ,
            application         : req.body.application,
            segments            : Array.isArray(req.body.segments) ? req.body.segments.map(Number) : req.body.segments ? [Number(req.body.segments)] : []
        }
        
        const result = await createCompany(userId,payload);
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
        const result = await getAllCompany();
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
        const result = await getCompanyById(payload);
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
        const result = await getCompanyByUser(req.user.userId);
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
        const companyImage = req.file.companyImage ? req.file.companyImage : null;
        const userId = req.user.userId;
        const payload = {
            companyCode        : req.body.companyCode,
            companyName        : req.body.companyName,
            companyStatus      : req.body.companyStatus,
            companyTelpFax     : req.body.companyTelpFax,
            companyAddress     : req.body.companyAddress,
            companyEmail       : req.body.companyEmail,
            npwp               : req.body.npwp,
            companyType        : req.body.companyType,
            companyCity        : req.body.companyCity,
            urlImage           : companyImage ?? undefined,
            segments           : Array.isArray(req.body.segments) ? req.body.segments.map(Number) : req.body.segments ? [Number(req.body.segments)] : []
        }
        const result = await updateCompany(userId,payload);
        res.status(200).json({
            status: "Success",
            message: "Company  updated successfully",
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
    deleteCompany,
    getAllCompaniesController
};