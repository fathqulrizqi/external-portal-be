-- CreateTable
CREATE TABLE "Distro_PO_Header" (
    "id" SERIAL NOT NULL,
    "poNumber" TEXT NOT NULL,
    "distributorName" TEXT NOT NULL,
    "customerCode" TEXT NOT NULL,
    "poDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "approvedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distro_PO_Header_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distro_PO_Line" (
    "id" SERIAL NOT NULL,
    "vehicleCategory" TEXT NOT NULL,
    "spType" TEXT NOT NULL,
    "partName" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 0,
    "purchaseOrderId" INTEGER NOT NULL,

    CONSTRAINT "Distro_PO_Line_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Distro_PO_Header_poNumber_key" ON "Distro_PO_Header"("poNumber");

-- AddForeignKey
ALTER TABLE "Distro_PO_Line" ADD CONSTRAINT "Distro_PO_Line_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "Distro_PO_Header"("id") ON DELETE CASCADE ON UPDATE CASCADE;
