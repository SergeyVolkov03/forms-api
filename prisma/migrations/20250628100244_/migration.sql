-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "_TemplateFillers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TemplateFillers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TemplateFillers_B_index" ON "_TemplateFillers"("B");

-- AddForeignKey
ALTER TABLE "_TemplateFillers" ADD CONSTRAINT "_TemplateFillers_A_fkey" FOREIGN KEY ("A") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TemplateFillers" ADD CONSTRAINT "_TemplateFillers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
