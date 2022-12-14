/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `article` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `article` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "article_title_key";

-- AlterTable
ALTER TABLE "article" ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "article_id_key" ON "article"("id");
