/*
  Warnings:

  - You are about to drop the column `questionId` on the `AnswerOption` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Question` table. All the data in the column will be lost.
  - Added the required column `question_Id` to the `AnswerOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template_Id` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AnswerOption" DROP CONSTRAINT "AnswerOption_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_templateId_fkey";

-- AlterTable
ALTER TABLE "AnswerOption" DROP COLUMN "questionId",
ADD COLUMN     "question_Id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "templateId",
ADD COLUMN     "template_Id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_template_Id_fkey" FOREIGN KEY ("template_Id") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerOption" ADD CONSTRAINT "AnswerOption_question_Id_fkey" FOREIGN KEY ("question_Id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
