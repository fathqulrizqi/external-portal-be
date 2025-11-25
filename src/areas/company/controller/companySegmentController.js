import companySegmentService from '../service/companySegmentService.js';

const createCompanySegment = async (req, res, next) => {
    try {
        const payload = {
            segmentName: req.body.segmentName || null,
            description: req.body.description || null,
        };
        
        const result = await companySegmentService.create(payload);
        res.status(201).json({
            status: "Success",
            message: "Company segment created successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getAllCompanySegments = async (req, res, next) => {
    try {
        const result = await companySegmentService.getAll();
        res.status(200).json({
            status: "Success",
            message: "Company segments retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const getCompanySegmentById = async (req, res, next) => {
    try {
        const payload = {
            segmentId: parseInt(req.params.segmentId, 10) || null, 
        };
        const result = await companySegmentService.getById(payload);
        res.status(200).json({
            status: "Success",
            message: "Company segment retrieved successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const updateCompanySegment = async (req, res, next) => {
    try {
        const payload = {
            segmentId: parseInt(req.params.segmentId, 10) || null,
            segmentName: req.body.segmentName || null,
            description: req.body.description || null,
        };
        const result = await companySegmentService.update(payload);
        res.status(200).json({
            status: "Success",
            message: "Company segment updated successfully",
            data: result,
        });
    } catch (e) {
        next(e);
    }
};

const deleteCompanySegment = async (req, res, next) => {
    try {
        const payload = {
            segmentId: parseInt(req.params.segmentId, 10) || null,
        };
        await companySegmentService.remove(payload);
        res.status(200).json({
            status: "Success",
            message: "Company segment deleted successfully",
        });
    } catch (e) {
        next(e);
    }
};


export default {
    createCompanySegment,
    getAllCompanySegments,
    getCompanySegmentById,
    updateCompanySegment,
    deleteCompanySegment
};