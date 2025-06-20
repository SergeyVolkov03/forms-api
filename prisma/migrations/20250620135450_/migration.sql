-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "template_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;
