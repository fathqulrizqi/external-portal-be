/*
  Warnings:

  - A unique constraint covering the columns `[segmentName]` on the table `CompanySegment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanySegment_segmentName_key" ON "CompanySegment"("segmentName");
