/*
  Warnings:

  - You are about to drop the column `city` on the `Distro_PO_Incentive` table. All the data in the column will be lost.
  - You are about to drop the column `customerCode` on the `Distro_PO_Incentive` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `Distro_PO_Incentive` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Distro_PO_Incentive" DROP COLUMN "city",
DROP COLUMN "customerCode",
DROP COLUMN "customerName";
