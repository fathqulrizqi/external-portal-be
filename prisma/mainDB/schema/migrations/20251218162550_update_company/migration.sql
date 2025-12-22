/*
  Warnings:

  - You are about to drop the column `segmentId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_segmentId_fkey";

-- DropIndex
DROP INDEX "Company_segmentId_idx";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "segmentId";

-- CreateTable
CREATE TABLE "CompanySegmentLink" (
    "id" SERIAL NOT NULL,
    "companyId" UUID NOT NULL,
    "segmentId" INTEGER NOT NULL,

    CONSTRAINT "CompanySegmentLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanySegmentLink_companyId_segmentId_key" ON "CompanySegmentLink"("companyId", "segmentId");

-- AddForeignKey
ALTER TABLE "CompanySegmentLink" ADD CONSTRAINT "CompanySegmentLink_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySegmentLink" ADD CONSTRAINT "CompanySegmentLink_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "CompanySegment"("segmentId") ON DELETE RESTRICT ON UPDATE CASCADE;
