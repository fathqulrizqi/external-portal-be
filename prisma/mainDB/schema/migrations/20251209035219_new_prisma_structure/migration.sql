-- CreateTable
CREATE TABLE "CompanySegment" (
    "segmentId" SERIAL NOT NULL,
    "segmentName" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "CompanySegment_pkey" PRIMARY KEY ("segmentId")
);

-- CreateTable
CREATE TABLE "Company" (
    "companyId" UUID NOT NULL,
    "segmentId" INTEGER,
    "urlImage" TEXT,
    "companyName" TEXT,
    "companyFoundingDate" TIMESTAMP(3),
    "companyStatus" TEXT,
    "companyTelpFax" TEXT,
    "companyAddress" TEXT,
    "companyEmail" TEXT,
    "npwp" TEXT,
    "website" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "totalCapital" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9" (
    "formL9Id" UUID NOT NULL,
    "companyId" UUID NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_pkey" PRIMARY KEY ("formL9Id")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_bank_info" (
    "formL9BankInfoid" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "beneficiaryName" TEXT,
    "beneficiaryAddress" TEXT,
    "bankName" TEXT,
    "bankAddress" TEXT,
    "noRek" TEXT,
    "swiftCode" TEXT,
    "IBAN" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_bank_info_pkey" PRIMARY KEY ("formL9BankInfoid")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_general_information" (
    "formGeneralInformationId" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "companyName" TEXT,
    "companyFoundingDate" TIMESTAMP(3),
    "companyStatus" TEXT,
    "companyTelpFax" TEXT,
    "companyAddress" TEXT,
    "companyEmail" TEXT,
    "npwp" TEXT,
    "totalCapital" TEXT,
    "segmentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_general_information_pkey" PRIMARY KEY ("formGeneralInformationId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_general_information_continue" (
    "formL9GeneralInformationContinueId" UUID NOT NULL,
    "formGeneralInformationId" UUID NOT NULL,
    "permitsHeld" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_general_information_continue_pkey" PRIMARY KEY ("formL9GeneralInformationContinueId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_management" (
    "formL9ManagementId" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "position" TEXT,
    "name" TEXT,
    "noTelpFaxHp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_management_pkey" PRIMARY KEY ("formL9ManagementId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_employe" (
    "formL9EmployeId" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "totalEmployees" INTEGER,
    "qualityControl" INTEGER,
    "engineering" INTEGER,
    "production" INTEGER,
    "management" INTEGER,
    "other" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_employe_pkey" PRIMARY KEY ("formL9EmployeId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_work_experience" (
    "formL9WorkExperienceId" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "customerOrLocation" TEXT,
    "typeOfWork" TEXT,
    "score" INTEGER,
    "customerContactPerson" TEXT,
    "customerTelpFaxHp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_work_experience_pkey" PRIMARY KEY ("formL9WorkExperienceId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_others" (
    "formL9OthersId" UUID NOT NULL,
    "formL9Id" UUID NOT NULL,
    "haveCertificateISO" BOOLEAN NOT NULL DEFAULT false,
    "haveCompanyOrganizationalStructure" BOOLEAN NOT NULL DEFAULT false,
    "haveQualityControlOrganizationalStructure" BOOLEAN NOT NULL DEFAULT false,
    "haveProductWarranty" BOOLEAN NOT NULL DEFAULT false,
    "haveExpiryDate" BOOLEAN NOT NULL DEFAULT false,
    "haveAPD" BOOLEAN NOT NULL DEFAULT false,
    "haveAPDRegulation" BOOLEAN NOT NULL DEFAULT false,
    "isTopApplicable" BOOLEAN NOT NULL DEFAULT false,
    "paymentTime" TEXT,
    "agreeToConfidentialInformation" BOOLEAN NOT NULL DEFAULT false,
    "understandingBreachesOfConfidentiality" BOOLEAN NOT NULL DEFAULT false,
    "signConfidentialityAgreement" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_others_pkey" PRIMARY KEY ("formL9OthersId")
);

-- CreateTable
CREATE TABLE "ebidding_form_l9_certificate_iso" (
    "certificateISOId" UUID NOT NULL,
    "formL9OthersId" UUID NOT NULL,
    "isoName" TEXT,
    "validityPeriodFrom" TIMESTAMP(3),
    "validityPeriodTo" TIMESTAMP(3),
    "remakes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ebidding_form_l9_certificate_iso_pkey" PRIMARY KEY ("certificateISOId")
);

-- CreateTable
CREATE TABLE "AllowedIpCors" (
    "ip" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "menuId" SERIAL NOT NULL,
    "sequence" INTEGER NOT NULL,
    "parentId" INTEGER,
    "icon" VARCHAR(50),
    "application" VARCHAR(50) NOT NULL DEFAULT 'E-Bidding',
    "menuName" VARCHAR(50) NOT NULL,
    "redirect" TEXT NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "isShow" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "application" VARCHAR(150) NOT NULL DEFAULT 'E-Bidding',
    "password" VARCHAR(255) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "sessionExpireDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "otpVerifikasi" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "otpVerifikasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogsLogin" (
    "logsId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "device" TEXT,
    "ip" VARCHAR(45),
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LogsLogin_pkey" PRIMARY KEY ("logsId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" SERIAL NOT NULL,
    "roleName" VARCHAR(50) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "Access" (
    "accessId" SERIAL NOT NULL,
    "accessName" VARCHAR(50) NOT NULL,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("accessId")
);

-- CreateTable
CREATE TABLE "ResetPassword" (
    "resetId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "token" UUID NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResetPassword_pkey" PRIMARY KEY ("resetId")
);

-- CreateTable
CREATE TABLE "UserHasRoleAccess" (
    "userId" UUID NOT NULL,
    "roleId" INTEGER NOT NULL,
    "accessId" INTEGER NOT NULL,
    "menuId" INTEGER,

    CONSTRAINT "UserHasRoleAccess_pkey" PRIMARY KEY ("userId","roleId","accessId")
);

-- CreateTable
CREATE TABLE "LinkedDevice" (
    "deviceId" UUID NOT NULL,
    "clientDeviceUuid" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "LinkedDevice_pkey" PRIMARY KEY ("deviceId")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" UUID NOT NULL,
    "companyId" UUID,
    "fullName" VARCHAR(150) NOT NULL,
    "urlImage" TEXT,
    "phone" VARCHAR(15) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "Company_companyName_idx" ON "Company"("companyName");

-- CreateIndex
CREATE INDEX "Company_npwp_idx" ON "Company"("npwp");

-- CreateIndex
CREATE INDEX "Company_companyEmail_idx" ON "Company"("companyEmail");

-- CreateIndex
CREATE INDEX "Company_segmentId_idx" ON "Company"("segmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_companyId_key" ON "ebidding_form_l9"("companyId");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_companyId_idx" ON "ebidding_form_l9"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_bank_info_formL9Id_key" ON "ebidding_form_l9_bank_info"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_bank_info_noRek_idx" ON "ebidding_form_l9_bank_info"("noRek");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_general_information_formL9Id_key" ON "ebidding_form_l9_general_information"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_general_information_companyName_idx" ON "ebidding_form_l9_general_information"("companyName");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_general_information_npwp_idx" ON "ebidding_form_l9_general_information"("npwp");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_general_information_continue_formGeneralIn_key" ON "ebidding_form_l9_general_information_continue"("formGeneralInformationId");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_management_formL9Id_idx" ON "ebidding_form_l9_management"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_management_name_idx" ON "ebidding_form_l9_management"("name");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_management_position_idx" ON "ebidding_form_l9_management"("position");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_employe_formL9Id_key" ON "ebidding_form_l9_employe"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_work_experience_formL9Id_idx" ON "ebidding_form_l9_work_experience"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_work_experience_customerOrLocation_idx" ON "ebidding_form_l9_work_experience"("customerOrLocation");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_work_experience_typeOfWork_idx" ON "ebidding_form_l9_work_experience"("typeOfWork");

-- CreateIndex
CREATE UNIQUE INDEX "ebidding_form_l9_others_formL9Id_key" ON "ebidding_form_l9_others"("formL9Id");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_certificate_iso_formL9OthersId_idx" ON "ebidding_form_l9_certificate_iso"("formL9OthersId");

-- CreateIndex
CREATE INDEX "ebidding_form_l9_certificate_iso_isoName_idx" ON "ebidding_form_l9_certificate_iso"("isoName");

-- CreateIndex
CREATE UNIQUE INDEX "AllowedIpCors_ip_key" ON "AllowedIpCors"("ip");

-- CreateIndex
CREATE INDEX "AllowedIpCors_ip_idx" ON "AllowedIpCors"("ip");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

-- CreateIndex
CREATE INDEX "User_application_idx" ON "User"("application");

-- CreateIndex
CREATE INDEX "User_email_isActive_idx" ON "User"("email", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_application_key" ON "User"("email", "application");

-- CreateIndex
CREATE INDEX "otpVerifikasi_userId_code_idx" ON "otpVerifikasi"("userId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "LogsLogin_token_key" ON "LogsLogin"("token");

-- CreateIndex
CREATE INDEX "LogsLogin_userId_idx" ON "LogsLogin"("userId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_accessId_menuId_idx" ON "UserHasRoleAccess"("userId", "accessId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_roleId_menuId_idx" ON "UserHasRoleAccess"("userId", "roleId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_roleId_menuId_idx" ON "UserHasRoleAccess"("roleId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_accessId_menuId_idx" ON "UserHasRoleAccess"("accessId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_menuId_idx" ON "UserHasRoleAccess"("userId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_roleId_idx" ON "UserHasRoleAccess"("roleId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_idx" ON "UserHasRoleAccess"("userId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_accessId_idx" ON "UserHasRoleAccess"("accessId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_menuId_idx" ON "UserHasRoleAccess"("menuId");

-- CreateIndex
CREATE INDEX "LinkedDevice_userId_idx" ON "LinkedDevice"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedDevice_userId_clientDeviceUuid_key" ON "LinkedDevice"("userId", "clientDeviceUuid");

-- CreateIndex
CREATE INDEX "Profile_userId_companyId_idx" ON "Profile"("userId", "companyId");

-- CreateIndex
CREATE INDEX "Profile_companyId_idx" ON "Profile"("companyId");

-- CreateIndex
CREATE INDEX "Profile_fullName_idx" ON "Profile"("fullName");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "CompanySegment"("segmentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9" ADD CONSTRAINT "ebidding_form_l9_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_bank_info" ADD CONSTRAINT "ebidding_form_l9_bank_info_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_general_information" ADD CONSTRAINT "ebidding_form_l9_general_information_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_general_information_continue" ADD CONSTRAINT "ebidding_form_l9_general_information_continue_formGeneralI_fkey" FOREIGN KEY ("formGeneralInformationId") REFERENCES "ebidding_form_l9_general_information"("formGeneralInformationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_management" ADD CONSTRAINT "ebidding_form_l9_management_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_employe" ADD CONSTRAINT "ebidding_form_l9_employe_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_work_experience" ADD CONSTRAINT "ebidding_form_l9_work_experience_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_others" ADD CONSTRAINT "ebidding_form_l9_others_formL9Id_fkey" FOREIGN KEY ("formL9Id") REFERENCES "ebidding_form_l9"("formL9Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ebidding_form_l9_certificate_iso" ADD CONSTRAINT "ebidding_form_l9_certificate_iso_formL9OthersId_fkey" FOREIGN KEY ("formL9OthersId") REFERENCES "ebidding_form_l9_others"("formL9OthersId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otpVerifikasi" ADD CONSTRAINT "otpVerifikasi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogsLogin" ADD CONSTRAINT "LogsLogin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResetPassword" ADD CONSTRAINT "ResetPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_accessId_fkey" FOREIGN KEY ("accessId") REFERENCES "Access"("accessId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedDevice" ADD CONSTRAINT "LinkedDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;
