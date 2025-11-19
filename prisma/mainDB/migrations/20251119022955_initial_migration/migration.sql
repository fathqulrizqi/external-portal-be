-- CreateTable
CREATE TABLE "AllowedIpCors" (
    "ip" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "sessionExpireDate" TIMESTAMP(3) NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "otpVerifikasi" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "otpVerifikasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogsLogin" (
    "logsId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "device" TEXT,
    "ip" VARCHAR(45),
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LogsLogin_pkey" PRIMARY KEY ("logsId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" SERIAL NOT NULL,
    "roleName" VARCHAR(50) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "Access" (
    "accessId" SERIAL NOT NULL,
    "accessName" VARCHAR(50) NOT NULL,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("accessId")
);

-- CreateTable
CREATE TABLE "UserHasRoleAccess" (
    "userId" UUID NOT NULL,
    "roleId" INTEGER NOT NULL,
    "accessId" INTEGER NOT NULL,

    CONSTRAINT "UserHasRoleAccess_pkey" PRIMARY KEY ("userId","roleId","accessId")
);

-- CreateTable
CREATE TABLE "LinkedDevice" (
    "deviceId" UUID NOT NULL,
    "clientDeviceUuid" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "LinkedDevice_pkey" PRIMARY KEY ("deviceId")
);

-- CreateTable
CREATE TABLE "CompanySegment" (
    "segmentId" SERIAL NOT NULL,
    "segmentName" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "CompanySegment_pkey" PRIMARY KEY ("segmentId")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" UUID NOT NULL,
    "fullName" VARCHAR(150),
    "urlImage" TEXT,
    "companyName" VARCHAR(150) NOT NULL,
    "npwp" VARCHAR(50) NOT NULL,
    "deedNumber" VARCHAR(100),
    "establishedDate" DATE,
    "npwpUrl" TEXT NOT NULL,
    "deedUrl" TEXT NOT NULL,
    "description" TEXT,
    "segmentId" INTEGER,
    "companyAddress" VARCHAR(255),
    "companyPhone" VARCHAR(50),
    "website" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "AllowedIpCors_ip_key" ON "AllowedIpCors"("ip");

-- CreateIndex
CREATE INDEX "AllowedIpCors_ip_idx" ON "AllowedIpCors"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

-- CreateIndex
CREATE INDEX "User_email_isActive_idx" ON "User"("email", "isActive");

-- CreateIndex
CREATE INDEX "otpVerifikasi_userId_code_idx" ON "otpVerifikasi"("userId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "LogsLogin_token_key" ON "LogsLogin"("token");

-- CreateIndex
CREATE INDEX "LogsLogin_userId_idx" ON "LogsLogin"("userId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_accessId_idx" ON "UserHasRoleAccess"("userId", "accessId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_roleId_idx" ON "UserHasRoleAccess"("roleId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_idx" ON "UserHasRoleAccess"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedDevice_clientDeviceUuid_key" ON "LinkedDevice"("clientDeviceUuid");

-- CreateIndex
CREATE INDEX "LinkedDevice_userId_idx" ON "LinkedDevice"("userId");

-- CreateIndex
CREATE INDEX "Profile_userId_segmentId_idx" ON "Profile"("userId", "segmentId");

-- CreateIndex
CREATE INDEX "Profile_segmentId_idx" ON "Profile"("segmentId");

-- AddForeignKey
ALTER TABLE "otpVerifikasi" ADD CONSTRAINT "otpVerifikasi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogsLogin" ADD CONSTRAINT "LogsLogin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_accessId_fkey" FOREIGN KEY ("accessId") REFERENCES "Access"("accessId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedDevice" ADD CONSTRAINT "LinkedDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "CompanySegment"("segmentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
