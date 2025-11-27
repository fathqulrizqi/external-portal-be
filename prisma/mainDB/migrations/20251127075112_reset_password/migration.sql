-- CreateTable
CREATE TABLE "ResetPassword" (
    "resetId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "token" UUID NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResetPassword_pkey" PRIMARY KEY ("resetId")
);

-- AddForeignKey
ALTER TABLE "ResetPassword" ADD CONSTRAINT "ResetPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
