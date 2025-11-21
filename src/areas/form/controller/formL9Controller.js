import formL9Service from "../service/formL9Service.js";

const create = async (req, res, next) => {
    try{
        const userId = req.user.userId;
        const payload = {
            //FormL9GeneralInformation
            companyName: req.body.companyName,
            companyFoundingDate : req.body.companyFoundingDate,
            companyStatus       : req.body.companyStatus,
            companyTelpFax      : req.body.companyTelpFax,
            companyAddress      : req.body.companyAddress,
            companyEmail        : req.body.companyEmail,
            npwp                : req.body.npwp,
            totalCapital        : req.body.totalCapital || null,
            segmentId           : req.body.segmentId,

            //FormL9GeneralInformationContinue
            permitsHeld         : req.body.permitsHeld || null, //array

            //FormL9BankInfo
            beneficiaryName    : req.body.beneficiaryName,
            beneficiaryAddress : req.body.beneficiaryAddress,
            bankName           : req.body.bankName,
            bankAddress        : req.body.bankAddress,
            noRek              : req.body.noRek,
            swiftCode          : req.body.swiftCode,
            IBAN               : req.body.IBAN,

            //FormL9Management
            position           : req.body.position, //array
            name               : req.body.name, //array
            noTelpFaxHp        : req.body.noTelpFaxHp, //array

            //FormL9Employe
            totalEmployees     : req.body.totalEmployees || null,
            qualityControl     : req.body.qualityControl || null,
            engineering        : req.body.engineering || null,
            production         : req.body.production || null,
            management         : req.body.management || null,
            other              : req.body.other || null,


            //FormL9WorkExperience
            customerOrLocation    : req.body.customerOrLocation || null, //array
            typeOfWork            : req.body.typeOfWork || null, //array
            score                 : req.body.score || null, //array
            customerContactPerson : req.body.customerContactPerson || null, //array
            customerTelpFaxHp     : req.body.customerTelpFaxHp || null, //array

            //FormL9Other
            haveCertificateISO                        : req.body.haveCertificateISO,
            haveCompanyOrganizationalStructure        : req.body.haveCompanyOrganizationalStructure,
            haveQualityControlOrganizationalStructure : req.body.haveQualityControlOrganizationalStructure,
            haveProductWarranty                       : req.body.haveProductWarranty,
            haveExpiryDate                            : req.body.haveExpiryDate,
            haveAPD                                   : req.body.haveAPD,
            haveAPDRegulation                         : req.body.haveAPDRegulation,
            isTopApplicable                           : req.body.isTopApplicable,

            //FormL9CertificateISO
            isoName            : req.body.isoName|| null, //array
            validityPeriodFrom : req.body.validityPeriodFrom || null, //array
            validityPeriodTo   : req.body.validityPeriodTo || null, //array
            remakes            : req.body.remakes || null, //array
        }

        await formL9Service.create(userId, payload);
        res.status(201).json({
            status: "Success",
            message: "Form L9 created successfully",
        });
    }catch(e){
        next(e)
    }
};

const update = async (req, res, next) => {
    try{
        const userId = req.user.userId;
        const formL9Id = req.params.formL9Id;
        const payload = {
            //FormL9GeneralInformation
            companyName         : req.body.companyName,
            companyFoundingDate : req.body.companyFoundingDate,
            companyStatus       : req.body.companyStatus,
            companyTelpFax      : req.body.companyTelpFax,
            companyAddress      : req.body.companyAddress,
            companyEmail        : req.body.companyEmail,
            npwp                : req.body.npwp,
            totalCapital        : req.body.totalCapital || null,
            segmentId           : req.body.segmentId,

            //FormL9GeneralInformationContinue
            permitsHeld         : req.body.permitsHeld || null, //array

            //FormL9BankInfo
            beneficiaryName    : req.body.beneficiaryName,
            beneficiaryAddress : req.body.beneficiaryAddress,
            bankName           : req.body.bankName,
            bankAddress        : req.body.bankAddress,
            noRek              : req.body.noRek,
            swiftCode          : req.body.swiftCode,
            IBAN               : req.body.IBAN,

            //FormL9Management
            position           : req.body.position, //array
            name               : req.body.name, //array
            noTelpFaxHp        : req.body.noTelpFaxHp, //array

            //FormL9Employe
            totalEmployees     : req.body.totalEmployees || null,
            qualityControl     : req.body.qualityControl || null,
            engineering        : req.body.engineering || null,
            production         : req.body.production || null,
            management         : req.body.management || null,
            other              : req.body.other || null,


            //FormL9WorkExperience
            customerOrLocation    : req.body.customerOrLocation || null, //array
            typeOfWork            : req.body.typeOfWork || null, //array
            score                 : req.body.score || null, //array
            customerContactPerson : req.body.customerContactPerson || null, //array
            customerTelpFaxHp     : req.body.customerTelpFaxHp || null, //array

            //FormL9Other
            haveCertificateISO                        : req.body.haveCertificateISO,
            haveCompanyOrganizationalStructure        : req.body.haveCompanyOrganizationalStructure,
            haveQualityControlOrganizationalStructure : req.body.haveQualityControlOrganizationalStructure,
            haveProductWarranty                       : req.body.haveProductWarranty,
            haveExpiryDate                            : req.body.haveExpiryDate,
            haveAPD                                   : req.body.haveAPD,
            haveAPDRegulation                         : req.body.haveAPDRegulation,
            isTopApplicable                           : req.body.isTopApplicable,

            //FormL9CertificateISO
            isoName            : req.body.isoName|| null, //array
            validityPeriodFrom : req.body.validityPeriodFrom || null, //array
            validityPeriodTo   : req.body.validityPeriodTo || null, //array
            remakes            : req.body.remakes || null, //array
        }

        await formL9Service.update(userId,formL9Id, payload);
        res.status(200).json({
            status: "Success",
            message: "Form L9 updated successfully",
        });
    }catch(e){
        next(e)
    }
}

const destroy = async (req, res, next) => {
    try{

        const userId = req.user.userId;
        const formL9Id = req.params.formL9Id;

        await formL9Service.destroy(userId,formL9Id);
        res.status(200).json({
            status: "Success",
            message: "Form L9 deleted successfully",
        });
    }catch(e){
        next(e)
    }
}

const getAll = async (req, res, next) => {
    try {
        // Memanggil service
        const result = await formL9Service.getAll();

        // Mengirim response sukses
        res.status(200).json({
            status: "Success",
            message: "All forms retrieved successfully",
            data: result
        });
    } catch (e) {
        // Mengirim error ke middleware error handling
        next(e);
    }
};

const getByUserId = async (req, res, next) => {
    try {
        // Ambil userId dari token/session (Middleware Auth)
        const userId = req.user.userIdd; 

        // Memanggil service (Pastikan service menerima parameter userId)
        const result = await formL9Service.getByUserId(userId);

        res.status(200).json({
            status: "Success",
            message: "User form retrieved successfully",
            data: result
        });
    } catch (e) {
        next(e);
    }
};

const getDetailByIdForUser = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const formL9Id = req.params.formL9Id;

        const result = await formL9Service.getDetailByIdForUser(userId, formL9Id);

        res.status(200).json({
            status: "Success",
            message: "Form detail retrieved successfully",
            data: result
        });
    } catch (e) {
        next(e);
    }
};

const getDetailByIdForAdmin = async (req, res, next) => {
    try {
        const formL9Id = req.params.formL9Id;
        const result = await formL9Service.getDetailByIdForAdmin(formL9Id);

        res.status(200).json({
            status: "Success",
            message: "Form detail retrieved successfully (Admin View)",
            data: result
        });
    } catch (e) {
        next(e);
    }
};

export default {
    create,
    update,
    destroy,
    getAll,
    getByUserId,
    getDetailByIdForUser,
    getDetailByIdForAdmin
}