-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password_hash" TEXT,
    "public_address" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'model_owner',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "AI_Model" (
    "model_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "model_name" TEXT NOT NULL,
    "description" TEXT,
    "version" TEXT,
    "training_data_info" TEXT,
    "performance_metrics" JSONB,
    "license_type" TEXT,
    "model_file_path" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AI_Model_pkey" PRIMARY KEY ("model_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_public_address_key" ON "User"("public_address");

-- AddForeignKey
ALTER TABLE "AI_Model" ADD CONSTRAINT "AI_Model_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
