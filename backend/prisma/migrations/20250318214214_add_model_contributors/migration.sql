-- CreateTable
CREATE TABLE "Model_Contributor" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_Contributor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model_Contributor" ADD CONSTRAINT "Model_Contributor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model_Contributor" ADD CONSTRAINT "Model_Contributor_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "AI_Model"("model_id") ON DELETE CASCADE ON UPDATE CASCADE;
