/*
  Warnings:

  - A unique constraint covering the columns `[niterraSO]` on the table `Distro_PO_Header` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `niterraSO` to the `Distro_PO_Header` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distro_PO_Header" ADD COLUMN     "niterraSO" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Distro_PO_Header_niterraSO_key" ON "Distro_PO_Header"("niterraSO");
