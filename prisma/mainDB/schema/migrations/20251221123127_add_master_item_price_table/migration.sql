/*
  Warnings:

  - You are about to drop the column `PRICE` on the `Distro_PO_MasterItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Distro_PO_MasterItem" DROP COLUMN "PRICE";

-- CreateTable
CREATE TABLE "Distro_PO_MasterItem_Price_Header" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distro_PO_MasterItem_Price_Header_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distro_PO_MasterItem_Price_Line" (
    "id" SERIAL NOT NULL,
    "headerId" INTEGER NOT NULL,
    "customerCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "activationDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distro_PO_MasterItem_Price_Line_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Distro_PO_MasterItem_Price_Line" ADD CONSTRAINT "Distro_PO_MasterItem_Price_Line_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "Distro_PO_MasterItem_Price_Header"("id") ON DELETE CASCADE ON UPDATE CASCADE;
