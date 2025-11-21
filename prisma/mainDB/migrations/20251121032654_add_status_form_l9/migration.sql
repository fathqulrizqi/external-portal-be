/*
  Warnings:

  - Added the required column `status` to the `ebidding_form_l9` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ebidding_form_l9" ADD COLUMN     "status" VARCHAR(50) NOT NULL;
