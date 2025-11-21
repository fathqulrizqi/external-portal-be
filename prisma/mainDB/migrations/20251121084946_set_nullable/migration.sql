/*
  Warnings:

  - Added the required column `updatedAt` to the `ebidding_form_l9_bank_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_certificate_iso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_employe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_general_information` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_general_information_continue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_management` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_others` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ebidding_form_l9_work_experience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_segmentId_fkey";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "segmentId" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "companyFoundingDate" DROP NOT NULL,
ALTER COLUMN "companyStatus" DROP NOT NULL,
ALTER COLUMN "companyTelpFax" DROP NOT NULL,
ALTER COLUMN "companyAddress" DROP NOT NULL,
ALTER COLUMN "companyEmail" DROP NOT NULL,
ALTER COLUMN "npwp" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_bank_info" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "beneficiaryName" DROP NOT NULL,
ALTER COLUMN "beneficiaryAddress" DROP NOT NULL,
ALTER COLUMN "bankName" DROP NOT NULL,
ALTER COLUMN "bankAddress" DROP NOT NULL,
ALTER COLUMN "noRek" DROP NOT NULL,
ALTER COLUMN "swiftCode" DROP NOT NULL,
ALTER COLUMN "IBAN" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_certificate_iso" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "isoName" DROP NOT NULL,
ALTER COLUMN "validityPeriodFrom" DROP NOT NULL,
ALTER COLUMN "validityPeriodTo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_employe" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "totalEmployees" DROP NOT NULL,
ALTER COLUMN "qualityControl" DROP NOT NULL,
ALTER COLUMN "engineering" DROP NOT NULL,
ALTER COLUMN "production" DROP NOT NULL,
ALTER COLUMN "management" DROP NOT NULL,
ALTER COLUMN "other" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_general_information" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "companyFoundingDate" DROP NOT NULL,
ALTER COLUMN "companyStatus" DROP NOT NULL,
ALTER COLUMN "companyTelpFax" DROP NOT NULL,
ALTER COLUMN "companyAddress" DROP NOT NULL,
ALTER COLUMN "companyEmail" DROP NOT NULL,
ALTER COLUMN "npwp" DROP NOT NULL,
ALTER COLUMN "segmentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_general_information_continue" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "permitsHeld" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_management" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "position" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "noTelpFaxHp" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_others" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "paymentTime" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ebidding_form_l9_work_experience" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "customerOrLocation" DROP NOT NULL,
ALTER COLUMN "typeOfWork" DROP NOT NULL,
ALTER COLUMN "score" DROP NOT NULL,
ALTER COLUMN "customerContactPerson" DROP NOT NULL,
ALTER COLUMN "customerTelpFaxHp" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "CompanySegment"("segmentId") ON DELETE SET NULL ON UPDATE CASCADE;
