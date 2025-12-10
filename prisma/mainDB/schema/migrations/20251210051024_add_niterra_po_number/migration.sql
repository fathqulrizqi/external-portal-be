/*
  Warnings:

  - You are about to drop the column `approvedBy` on the `Distro_PO_Header` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Distro_PO_Header` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[niterraPO]` on the table `Distro_PO_Header` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `niterraPO` to the `Distro_PO_Header` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distro_PO_Header" DROP COLUMN "approvedBy",
DROP COLUMN "createdBy",
ADD COLUMN     "niterraPO" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Distro_PO_Header_niterraPO_key" ON "Distro_PO_Header"("niterraPO");
