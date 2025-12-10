-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "companyCode" TEXT;

-- CreateTable
CREATE TABLE "Distro_PO_MasterItem" (
    "id" SERIAL NOT NULL,
    "Vehicle" TEXT NOT NULL,
    "VehicleID" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "PRODUCT NAME" TEXT NOT NULL,
    "S_P_type" TEXT,
    "ITEMID" TEXT NOT NULL,
    "IsActive" BOOLEAN NOT NULL DEFAULT true,
    "PRICE" INTEGER,

    CONSTRAINT "Distro_PO_MasterItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Distro_PO_MasterItem_ITEMID_key" ON "Distro_PO_MasterItem"("ITEMID");
