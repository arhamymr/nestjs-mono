/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Article` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Article_link_key";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "link" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");
