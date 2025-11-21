import Joi from 'joi';

const msg = (label) => ({
    'string.base': `${label} harus berupa teks.`,
    'string.empty': `${label} tidak boleh kosong.`,
    'string.email': `${label} harus berupa format email yang valid.`,
    'number.base': `${label} harus berupa angka.`,
    'number.integer': `${label} harus berupa angka bulat.`,
    'date.base': `${label} harus berupa tanggal yang valid (YYYY-MM-DD).`,
    'boolean.base': `${label} harus berupa pilihan Yes/No (Boolean).`,
    'array.base': `${label} harus berupa list/array.`,
    'any.required': `${label} wajib diisi.`,
    'any.only': `${label} memiliki nilai yang tidak valid.`
});

const baseSchema = {
    companyName: Joi.string().min(3).max(100).messages(msg('Nama Perusahaan')),
    companyFoundingDate: Joi.date().iso().messages(msg('Tanggal Berdiri Perusahaan')),
    companyStatus: Joi.string().messages(msg('Status Perusahaan')),
    companyTelpFax: Joi.string().messages(msg('No Telp/Fax Perusahaan')),
    companyAddress: Joi.string().messages(msg('Alamat Perusahaan')),
    companyEmail: Joi.string().email().messages(msg('Email Perusahaan')),
    npwp: Joi.string().messages(msg('NPWP')),
    
    totalCapital: Joi.alternatives().try(Joi.number(), Joi.string())
        .allow(null, '').messages(msg('Total Modal')),
    segmentId: Joi.string().messages(msg('Segment ID')),

    permitsHeld: Joi.array().items(Joi.string()).allow(null).messages(msg('Izin yang Dimiliki')),

    beneficiaryName: Joi.string().messages(msg('Nama Penerima (Beneficiary)')),
    beneficiaryAddress: Joi.string().messages(msg('Alamat Penerima')),
    bankName: Joi.string().messages(msg('Nama Bank')),
    bankAddress: Joi.string().messages(msg('Alamat Bank')),
    noRek: Joi.string().messages(msg('Nomor Rekening')),
    swiftCode: Joi.string().messages(msg('Swift Code')),
    IBAN: Joi.string().messages(msg('IBAN')),

    position: Joi.array().items(Joi.string().required().messages(msg('Item Posisi')))
        .messages(msg('List Posisi')),
    name: Joi.array().items(Joi.string().required().messages(msg('Item Nama')))
        .messages(msg('List Nama Management')),
    noTelpFaxHp: Joi.array().items(Joi.string().required().messages(msg('Item No HP')))
        .messages(msg('List No HP Management')),

    totalEmployees: Joi.number().integer().allow(null).messages(msg('Total Karyawan')),
    qualityControl: Joi.number().integer().allow(null).messages(msg('Jml Quality Control')),
    engineering: Joi.number().integer().allow(null).messages(msg('Jml Engineering')),
    production: Joi.number().integer().allow(null).messages(msg('Jml Production')),
    management: Joi.number().integer().allow(null).messages(msg('Jml Management')),
    other: Joi.number().integer().allow(null).messages(msg('Jml Lainnya')),

    customerOrLocation: Joi.array().items(Joi.string()).allow(null).messages(msg('Customer/Location')),
    typeOfWork: Joi.array().items(Joi.string()).allow(null).messages(msg('Jenis Pekerjaan')),
    score: Joi.array().items(Joi.alternatives().try(Joi.number(), Joi.string())).allow(null).messages(msg('Nilai/Score')),
    customerContactPerson: Joi.array().items(Joi.string()).allow(null).messages(msg('Contact Person Customer')),
    customerTelpFaxHp: Joi.array().items(Joi.string()).allow(null).messages(msg('No Telp Customer')),

    haveCertificateISO: Joi.boolean().messages(msg('Sertifikat ISO')),
    haveCompanyOrganizationalStructure: Joi.boolean().messages(msg('Struktur Organisasi Perusahaan')),
    haveQualityControlOrganizationalStructure: Joi.boolean().messages(msg('Struktur Organisasi QC')),
    haveProductWarranty: Joi.boolean().messages(msg('Garansi Produk')),
    haveExpiryDate: Joi.boolean().messages(msg('Tanggal Kadaluarsa')),
    haveAPD: Joi.boolean().messages(msg('APD')),
    haveAPDRegulation: Joi.boolean().messages(msg('Regulasi APD')),
    isTopApplicable: Joi.boolean().messages(msg('TOP Applicable')),

    isoName: Joi.array().items(Joi.string()).allow(null).messages(msg('Nama ISO')),
    validityPeriodFrom: Joi.array().items(Joi.date().allow(null)).allow(null).messages(msg('Masa Berlaku (Dari)')),
    validityPeriodTo: Joi.array().items(Joi.date().allow(null)).allow(null).messages(msg('Masa Berlaku (Sampai)')),
    remakes: Joi.array().items(Joi.string().allow('', null)).allow(null).messages(msg('Keterangan ISO')),
};


const createValidation = Joi.object({
    ...baseSchema,
    
    companyName: baseSchema.companyName.required(),
    companyFoundingDate: baseSchema.companyFoundingDate.required(),
    companyStatus: baseSchema.companyStatus.required(),
    companyTelpFax: baseSchema.companyTelpFax.required(),
    companyAddress: baseSchema.companyAddress.required(),
    companyEmail: baseSchema.companyEmail.required(),
    npwp: baseSchema.npwp.required(),
    segmentId: baseSchema.segmentId.required(),

    beneficiaryName: baseSchema.beneficiaryName.required(),
    beneficiaryAddress: baseSchema.beneficiaryAddress.required(),
    bankName: baseSchema.bankName.required(),
    bankAddress: baseSchema.bankAddress.required(),
    noRek: baseSchema.noRek.required(),
    swiftCode: baseSchema.swiftCode.required(),
    IBAN: baseSchema.IBAN.required(),

    position: baseSchema.position.required(),
    name: baseSchema.name.required(),
    noTelpFaxHp: baseSchema.noTelpFaxHp.required(),

    haveCertificateISO: baseSchema.haveCertificateISO.required(),
    haveCompanyOrganizationalStructure: baseSchema.haveCompanyOrganizationalStructure.required(),
    haveQualityControlOrganizationalStructure: baseSchema.haveQualityControlOrganizationalStructure.required(),
    haveProductWarranty: baseSchema.haveProductWarranty.required(),
    haveExpiryDate: baseSchema.haveExpiryDate.required(),
    haveAPD: baseSchema.haveAPD.required(),
    haveAPDRegulation: baseSchema.haveAPDRegulation.required(),
    isTopApplicable: baseSchema.isTopApplicable.required(),
});

const updateValidation = Joi.object(baseSchema);

export {
    createValidation,
    updateValidation,
};