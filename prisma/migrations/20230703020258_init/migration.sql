/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'INOPERATIVE';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "nickname" CHAR(30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_nickname_key" ON "Users"("nickname");
