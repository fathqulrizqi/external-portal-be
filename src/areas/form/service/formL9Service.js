import { ebidding } from '../../../config/database.js';
import { ResponseError } from '../../../error/responseError.js';
import {createValidation , updateValidation} from '../validation/formL9Validation.js'


const handleValidationError = (error) => {
    const firstError = error.details[0].message;
    throw new ResponseError(400,firstError);
}

const create = async (userId, payload) => {
    try {
        await createValidation.validateAsync(payload, { abortEarly: false });

        await ebidding.$transaction(async (tx) => {
            
            const company = await tx.company.create({
                data: {
                    companyName: payload.companyName,
                    companyFoundingDate: payload.companyFoundingDate,
                    companyStatus: payload.companyStatus,
                    companyTelpFax: payload.companyTelpFax,
                    companyAddress: payload.companyAddress,
                    companyEmail: payload.companyEmail,
                    npwp: payload.npwp,
                    totalCapital: payload.totalCapital,
                    segmentId: payload.segmentId,
                }
            });

            const user = tx.profile.update({
                where : {userId : userId},
                data : {
                    companyId : company.companyId
                }
            })

            const formL9 = await tx.formL9.create({
                data: {
                    companyId: company.companyId,
                    status: 'not verified'
                }
            });

            const parallelTasks = [];

            const taskGenInfo = async () => {
                const genInfo = await tx.formL9GeneralInformation.create({
                    data: {
                        formL9Id: formL9.formL9Id,
                        companyName: payload.companyName, 
                        companyFoundingDate: payload.companyFoundingDate,
                        companyStatus: payload.companyStatus,
                        companyTelpFax: payload.companyTelpFax,
                        companyAddress: payload.companyAddress,
                        companyEmail: payload.companyEmail,
                        npwp: payload.npwp,
                        totalCapital: payload.totalCapital,
                        segmentId: payload.segmentId,
                    }
                });

                if (payload.permitsHeld?.length > 0) {
                    const permitsData = payload.permitsHeld.map(p => ({
                        formGeneralInformationId: genInfo.formGeneralInformationId,
                        permitsHeld: p
                    }));
                    await tx.formL9GeneralInformationContinue.createMany({ data: permitsData });
                }
            };
            parallelTasks.push(taskGenInfo());

            const taskOthers = async () => {
                const others = await tx.formL9Others.create({
                    data: {
                        formL9Id: formL9.formL9Id,
                        haveCertificateISO: payload.haveCertificateISO,
                        haveCompanyOrganizationalStructure: payload.haveCompanyOrganizationalStructure,
                        haveQualityControlOrganizationalStructure: payload.haveQualityControlOrganizationalStructure,
                        haveProductWarranty: payload.haveProductWarranty,
                        haveExpiryDate: payload.haveExpiryDate,
                        haveAPD: payload.haveAPD,
                        haveAPDRegulation: payload.haveAPDRegulation,
                        isTopApplicable: payload.isTopApplicable,
                    }
                });

                if (payload.isoName?.length > 0 && payload.haveCertificateISO) {
                    const isoData = payload.isoName.map((name, i) => ({
                        formL9OthersId: others.formL9OthersId,
                        isoName: name,
                        validityPeriodFrom: payload.validityPeriodFrom?.[i] || null,
                        validityPeriodTo: payload.validityPeriodTo?.[i] || null,
                        remakes: payload.remakes?.[i] || null
                    }));
                    await tx.formL9CertificateISO.createMany({ data: isoData });
                }
            };
            parallelTasks.push(taskOthers());

            // Bank Info
            parallelTasks.push(tx.formL9BankInfo.create({
                data: {
                    formL9Id: formL9.formL9Id,
                    beneficiaryName: payload.beneficiaryName,
                    beneficiaryAddress: payload.beneficiaryAddress,
                    bankName: payload.bankName,
                    bankAddress: payload.bankAddress,
                    noRek: payload.noRek,
                    swiftCode: payload.swiftCode,
                    IBAN: payload.IBAN,
                }
            }));

            // Management
            if (payload.position?.length > 0) {
                const mgtData = payload.position.map((pos, i) => ({
                    formL9Id: formL9.formL9Id,
                    position: pos,
                    name: payload.name[i],
                    noTelpFaxHp: payload.noTelpFaxHp[i]
                }));
                parallelTasks.push(tx.formL9Management.createMany({ data: mgtData }));
            }

            //Employee 
            parallelTasks.push(tx.formL9Employe.create({
                data: { 
                    formL9Id: formL9.formL9Id,
                    totalEmployees: payload.totalEmployees,
                    qualityControl: payload.qualityControl,
                    engineering: payload.engineering,
                    production: payload.production,
                    management: payload.management,
                    other: payload.other,
                }
            }));

            //Work Experience
            if (payload.customerOrLocation?.length > 0) {
                const workData = payload.customerOrLocation.map((loc, i) => ({
                    formL9Id: formL9.formL9Id,
                    customerOrLocation: loc,
                    typeOfWork: payload.typeOfWork?.[i] || null,
                    score: payload.score?.[i] || null,            
                    customerContactPerson: payload.customerContactPerson?.[i] || null,
                    customerTelpFaxHp: payload.customerTelpFaxHp?.[i] || null,    
                }));
                parallelTasks.push(tx.formL9WorkExperience.createMany({ data: workData }));
            }

            await Promise.all(parallelTasks);
        });

        return true;

    } catch (error) {
        if (error.isJoi) handleValidationError(error);
        throw error; 
    }
};

const update = async (userId,formL9Id, payload) => {
    try {

        await updateValidation.validateAsync(payload, { abortEarly: false });

        const existingForm = await ebidding.formL9.findUnique({
            where: { formL9Id: formL9Id },
            select: { companyId: true } 
        });

        if (!existingForm) {
            throw new ResponseError(404,"Form L9 not found");
        }

        const user = await ebidding.profile.findUnique({
            where : {userId : userId },
            select: {companyId: true}
        })

        if(existingForm.companyId !== user.companyId){
            throw new ResponseError(403, "Forbidden: You do not have permission to access this form");
        }

        await ebidding.$transaction(async (tx) => {
            
            const parallelTasks = [];

            if (payload.companyName || payload.npwp) {
                parallelTasks.push(tx.company.update({
                    where: { companyId: existingForm.companyId },
                    data: {
                        companyName: payload.companyName,
                        companyFoundingDate: payload.companyFoundingDate,
                        companyStatus: payload.companyStatus,
                        companyTelpFax: payload.companyTelpFax,
                        companyAddress: payload.companyAddress,
                        companyEmail: payload.companyEmail,
                        npwp: payload.npwp,
                        totalCapital: payload.totalCapital,
                        segmentId: payload.segmentId,
                    }
                }));
            }
            const taskGenInfo = async () => {
                const genInfo = await tx.formL9GeneralInformation.upsert({
                    where: { formL9Id: formL9Id }, 
                    update: {
                        companyName: payload.companyName, 
                        companyFoundingDate: payload.companyFoundingDate,
                        companyStatus: payload.companyStatus,
                        companyTelpFax: payload.companyTelpFax,
                        companyAddress: payload.companyAddress,
                        companyEmail: payload.companyEmail,
                        npwp: payload.npwp,
                        totalCapital: payload.totalCapital,
                        segmentId: payload.segmentId,
                    },
                    create: {
                        formL9Id: formL9Id,
                        companyName: payload.companyName, 
                        companyFoundingDate: payload.companyFoundingDate,
                        companyStatus: payload.companyStatus,
                        companyTelpFax: payload.companyTelpFax,
                        companyAddress: payload.companyAddress,
                        companyEmail: payload.companyEmail,
                        npwp: payload.npwp,
                        totalCapital: payload.totalCapital,
                        segmentId: payload.segmentId,
                    }
                });

                if (payload.permitsHeld) {
                    await tx.formL9GeneralInformationContinue.deleteMany({
                        where: { formGeneralInformationId: genInfo.formGeneralInformationId }
                    });

                    if (payload.permitsHeld.length > 0) {
                        const permitsData = payload.permitsHeld.map(p => ({
                            formGeneralInformationId: genInfo.formGeneralInformationId,
                            permitsHeld: p
                        }));
                        await tx.formL9GeneralInformationContinue.createMany({ data: permitsData });
                    }
                }
            };
            parallelTasks.push(taskGenInfo());

            const taskOthers = async () => {
                const others = await tx.formL9Others.upsert({
                    where: { formL9Id: formL9Id },
                    update: {
                        haveCertificateISO: payload.haveCertificateISO,
                        haveCompanyOrganizationalStructure: payload.haveCompanyOrganizationalStructure,
                        haveQualityControlOrganizationalStructure: payload.haveQualityControlOrganizationalStructure,
                        haveProductWarranty: payload.haveProductWarranty,
                        haveExpiryDate: payload.haveExpiryDate,
                        haveAPD: payload.haveAPD,
                        haveAPDRegulation: payload.haveAPDRegulation,
                        isTopApplicable: payload.isTopApplicable,
                    },
                    create: {
                        formL9Id: formL9Id,
                        haveCertificateISO: payload.haveCertificateISO,
                        haveCompanyOrganizationalStructure: payload.haveCompanyOrganizationalStructure,
                        haveQualityControlOrganizationalStructure: payload.haveQualityControlOrganizationalStructure,
                        haveProductWarranty: payload.haveProductWarranty,
                        haveExpiryDate: payload.haveExpiryDate,
                        haveAPD: payload.haveAPD,
                        haveAPDRegulation: payload.haveAPDRegulation,
                        isTopApplicable: payload.isTopApplicable,
                    }
                });

                if (payload.isoName) { 
                    await tx.formL9CertificateISO.deleteMany({
                        where: { formL9OthersId: others.formL9OthersId }
                    });

                    if (payload.isoName.length > 0) {
                        const isoData = payload.isoName.map((name, i) => ({
                            formL9OthersId: others.formL9OthersId,
                            isoName: name,
                            validityPeriodFrom: payload.validityPeriodFrom?.[i] || null,
                            validityPeriodTo: payload.validityPeriodTo?.[i] || null,
                            remakes: payload.remakes?.[i] || null
                        }));
                        await tx.formL9CertificateISO.createMany({ data: isoData });
                    }
                }
            };
            parallelTasks.push(taskOthers());

            parallelTasks.push(tx.formL9BankInfo.upsert({
                where: { formL9Id: formL9Id },
                update: {
                    beneficiaryName: payload.beneficiaryName,
                    beneficiaryAddress: payload.beneficiaryAddress,
                    bankName: payload.bankName,
                    bankAddress: payload.bankAddress,
                    noRek: payload.noRek,
                    swiftCode: payload.swiftCode,
                    IBAN: payload.IBAN,
                },
                create: {
                    formL9Id: formL9Id,
                    beneficiaryName: payload.beneficiaryName,
                    beneficiaryAddress: payload.beneficiaryAddress,
                    bankName: payload.bankName,
                    bankAddress: payload.bankAddress,
                    noRek: payload.noRek,
                    swiftCode: payload.swiftCode,
                    IBAN: payload.IBAN,
                }
            }));

            parallelTasks.push(tx.formL9Employe.upsert({
                where: { formL9Id: formL9Id },
                update: {
                    totalEmployees: payload.totalEmployees,
                    qualityControl: payload.qualityControl,
                    engineering: payload.engineering,
                    production: payload.production,
                    management: payload.management,
                    other: payload.other,
                },
                create: {
                    formL9Id: formL9Id,
                    totalEmployees: payload.totalEmployees,
                    qualityControl: payload.qualityControl,
                    engineering: payload.engineering,
                    production: payload.production,
                    management: payload.management,
                    other: payload.other,
                }
            }));

           
            if (payload.position) { 
                const taskManagement = async () => {
                    await tx.formL9Management.deleteMany({
                        where: { formL9Id: formL9Id }
                    });

                    if (payload.position.length > 0) {
                        const mgtData = payload.position.map((pos, i) => ({
                            formL9Id: formL9Id,
                            position: pos,
                            name: payload.name?.[i],
                            noTelpFaxHp: payload.noTelpFaxHp?.[i]
                        }));
                        await tx.formL9Management.createMany({ data: mgtData });
                    }
                };
                parallelTasks.push(taskManagement());
            }

            if (payload.customerOrLocation) {
                const taskWorkExp = async () => {
                    await tx.formL9WorkExperience.deleteMany({
                        where: { formL9Id: formL9Id }
                    });

                    if (payload.customerOrLocation.length > 0) {
                        const workData = payload.customerOrLocation.map((loc, i) => ({
                            formL9Id: formL9Id,
                            customerOrLocation: loc,
                            typeOfWork: payload.typeOfWork?.[i] || null,
                            score: payload.score?.[i] || null,            
                            customerContactPerson: payload.customerContactPerson?.[i] || null,
                            customerTelpFaxHp: payload.customerTelpFaxHp?.[i] || null,    
                        }));
                        await tx.formL9WorkExperience.createMany({ data: workData });
                    }
                };
                parallelTasks.push(taskWorkExp());
            }

            await Promise.all(parallelTasks);
        });

        return true;

    } catch (error) {
        if (error.isJoi) handleValidationError(error); 
        throw error;
    }
};

const destroy = async (userId, formL9Id) => {
    try{
        const existingForm = await ebidding.formL9.findUnique({
            where: { formL9Id: formL9Id },
            select: { companyId: true } 
        });

        if (!existingForm) {
            throw new ResponseError(404,"Form L9 not found");
        }

        const user = await ebidding.profile.findUnique({
            where : {userId : userId },
            select: {companyId: true}
        })

        if(existingForm.companyId !== user.companyId){
            throw new ResponseError(403, "Forbidden: You do not have permission to access this form");
        }

        await ebidding.formL9.delete({
            where : { formL9Id : formL9Id}
        })

        return true;
    }catch(e){
        next(e)
    }
}

const getAll = async () => {
    try{
        const data = await ebidding.formL9.findMany({
            orderBy: { segmentId: 'asc' }
        })

        return data;
    }catch(e){
        next(e)
    }
}

const getByUserId = async () => {
    try{
        const profile = await ebidding.profile.findFirst({
            where : {userId : userId},
            select : {
                companyId : true
            }
        })

        const data = await ebidding.formL9.findFirst({
            where  : {companyId : profile.companyId}, 
            orderBy: { createdAt : 'asc' }
        })

        return data;
    }catch(e){
        next(e)
    }
}

const getDetailByIdForUser = async (userId, formL9Id) => {
    try{

        const existingForm = await ebidding.formL9.findUnique({
            where: { formL9Id: formL9Id },
            select: { companyId: true } 
        });

        if (!existingForm) {
            throw new ResponseError(404,"Form L9 not found");
        }

        const user = await ebidding.profile.findUnique({
            where : {userId : userId },
            select: {companyId: true}
        })

        if(existingForm.companyId !== user.companyId){
            throw new ResponseError(403, "Forbidden: You do not have permission to access this form");
        }

        const data = ebidding.formL9.findUnique({
            where : {formL9Id : formL9Id},
            include: {
                generalInformation: {
                    include: {
                        generalInfoContinue: true 
                    }
                },

                others: {
                    include: {
                        certificateISOs: true
                    }
                },
                bankInfo: true,
                management: true,
                employe: true,
                workExperience: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        return data;
    }catch(e){
        next(e)
    }
}
const getDetailByIdForAdmin = async (formL9Id) => {
    try{
        const existingForm = await ebidding.formL9.findUnique({
            where: { formL9Id: formL9Id },
            select: { companyId: true } 
        });

        if (!existingForm) {
            throw new ResponseError(404,"Form L9 not found");
        }


        const data = ebidding.formL9.findUnique({
            where : {formL9Id : formL9Id},
            include: {
                generalInformation: {
                    include: {
                        generalInfoContinue: true 
                    }
                },

                others: {
                    include: {
                        certificateISOs: true
                    }
                },
                bankInfo: true,
                management: true,
                employe: true,
                workExperience: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        return data;
    }catch(e){
        next(e)
    }
}

export default {
    create,
    update,
    destroy,
    getAll,
    getByUserId,
    getDetailByIdForUser,
    getDetailByIdForAdmin
}