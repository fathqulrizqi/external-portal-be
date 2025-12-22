-- CreateTable
CREATE TABLE "Distro_PO_Incentive" (
    "id" SERIAL NOT NULL,
    "customerCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "city" TEXT,
    "rangeFrom" INTEGER NOT NULL,
    "rangeTo" INTEGER NOT NULL,
    "vehicle" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "periodYear" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distro_PO_Incentive_pkey" PRIMARY KEY ("id")
);
