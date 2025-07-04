/*
  Warnings:

  - The `value` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "value",
ADD COLUMN     "value" TEXT[];
