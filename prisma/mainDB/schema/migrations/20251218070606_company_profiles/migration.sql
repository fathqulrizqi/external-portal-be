-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "companyType" TEXT;

-- CreateTable
CREATE TABLE "Distro_PO_MasterAchievement" (
    "id" SERIAL NOT NULL,
    "Customer Code" TEXT NOT NULL,
    "Customer Name" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Target QTY" INTEGER NOT NULL,
    "Target Amount" BIGINT NOT NULL,
    "Vehicle" TEXT NOT NULL,
    "Vechicle ID" TEXT NOT NULL,
    "Period Year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distro_PO_MasterAchievement_pkey" PRIMARY KEY ("id")
);
