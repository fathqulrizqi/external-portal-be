/*
  Warnings:

  - You are about to drop the column `companyFoundingDate` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `totalCapital` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "companyFoundingDate",
DROP COLUMN "totalCapital",
DROP COLUMN "website",
ADD COLUMN     "companyCity" TEXT,
ALTER COLUMN "application" SET DEFAULT 'External Portal';
