-- AlterTable
ALTER TABLE "AI_Model" ADD COLUMN     "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Model_Contributor" ALTER COLUMN "status" SET DEFAULT 'active';
