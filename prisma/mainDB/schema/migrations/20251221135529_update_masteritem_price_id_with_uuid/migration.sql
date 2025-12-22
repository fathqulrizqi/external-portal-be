/*
  Warnings:

  - The primary key for the `Distro_PO_MasterItem_Price_Header` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Distro_PO_MasterItem_Price_Line" DROP CONSTRAINT "Distro_PO_MasterItem_Price_Line_headerId_fkey";

-- AlterTable
ALTER TABLE "Distro_PO_MasterItem_Price_Header" DROP CONSTRAINT "Distro_PO_MasterItem_Price_Header_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Distro_PO_MasterItem_Price_Header_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Distro_PO_MasterItem_Price_Header_id_seq";

-- AlterTable
ALTER TABLE "Distro_PO_MasterItem_Price_Line" ALTER COLUMN "headerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Distro_PO_MasterItem_Price_Line" ADD CONSTRAINT "Distro_PO_MasterItem_Price_Line_headerId_fkey" FOREIGN KEY ("headerId") REFERENCES "Distro_PO_MasterItem_Price_Header"("id") ON DELETE CASCADE ON UPDATE CASCADE;
