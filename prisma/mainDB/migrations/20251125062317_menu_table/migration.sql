-- DropIndex
DROP INDEX "UserHasRoleAccess_userId_accessId_idx";

-- AlterTable
ALTER TABLE "UserHasRoleAccess" ADD COLUMN     "menuId" INTEGER;

-- CreateTable
CREATE TABLE "Menu" (
    "menuId" SERIAL NOT NULL,
    "sequence" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "menuName" VARCHAR(50) NOT NULL,
    "redirect" TEXT NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "isShow" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuId")
);

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_accessId_menuId_idx" ON "UserHasRoleAccess"("userId", "accessId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_roleId_menuId_idx" ON "UserHasRoleAccess"("userId", "roleId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_roleId_menuId_idx" ON "UserHasRoleAccess"("roleId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_accessId_menuId_idx" ON "UserHasRoleAccess"("accessId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_userId_menuId_idx" ON "UserHasRoleAccess"("userId", "menuId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_accessId_idx" ON "UserHasRoleAccess"("accessId");

-- CreateIndex
CREATE INDEX "UserHasRoleAccess_menuId_idx" ON "UserHasRoleAccess"("menuId");

-- AddForeignKey
ALTER TABLE "UserHasRoleAccess" ADD CONSTRAINT "UserHasRoleAccess_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;
