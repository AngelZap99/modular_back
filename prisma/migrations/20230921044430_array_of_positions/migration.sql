/*
  Warnings:

  - You are about to drop the column `position_name` on the `Position` table. All the data in the column will be lost.
  - Added the required column `name` to the `Position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Position" DROP COLUMN "position_name",
ADD COLUMN     "name" CHAR(40) NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
