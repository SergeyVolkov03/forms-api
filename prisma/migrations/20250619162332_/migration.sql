-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_author_id_fkey";

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
