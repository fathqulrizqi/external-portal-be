/*
  Warnings:

  - You are about to drop the column `vehicleCategory` on the `Distro_PO_Line` table. All the data in the column will be lost.
  - Added the required column `category` to the `Distro_PO_Line` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle` to the `Distro_PO_Line` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `Distro_PO_Line` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distro_PO_Line" DROP COLUMN "vehicleCategory",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "vehicle" TEXT NOT NULL,
ADD COLUMN     "vehicleId" TEXT NOT NULL;
