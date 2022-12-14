/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - Made the column `title` on table `Article` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Article_author_id_key";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "author_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_key" ON "Article"("title");
