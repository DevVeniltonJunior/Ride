/*
  Warnings:

  - The primary key for the `subscription` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "subscription" DROP CONSTRAINT "subscription_pkey",
ADD CONSTRAINT "subscription_pkey" PRIMARY KEY ("id", "user_id");
