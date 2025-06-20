/*
  Warnings:

  - You are about to drop the column `question_Id` on the `AnswerOption` table. All the data in the column will be lost.
  - You are about to drop the column `template_Id` on the `Question` table. All the data in the column will be lost.
  - Added the required column `question_id` to the `AnswerOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template_id` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AnswerOption" DROP CONSTRAINT "AnswerOption_question_Id_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_template_Id_fkey";

-- AlterTable
ALTER TABLE "AnswerOption" DROP COLUMN "question_Id",
ADD COLUMN     "question_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "template_Id",
ADD COLUMN     "template_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "template_id" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerOption" ADD CONSTRAINT "AnswerOption_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;
