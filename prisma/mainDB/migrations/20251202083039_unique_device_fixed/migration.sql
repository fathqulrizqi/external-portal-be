/*
  Warnings:

  - A unique constraint covering the columns `[userId,clientDeviceUuid]` on the table `LinkedDevice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LinkedDevice_clientDeviceUuid_key";

-- CreateIndex
CREATE UNIQUE INDEX "LinkedDevice_userId_clientDeviceUuid_key" ON "LinkedDevice"("userId", "clientDeviceUuid");
