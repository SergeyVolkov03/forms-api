/*
  Warnings:

  - A unique constraint covering the columns `[form_id,question_id]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Answer_form_id_question_id_key" ON "Answer"("form_id", "question_id");
