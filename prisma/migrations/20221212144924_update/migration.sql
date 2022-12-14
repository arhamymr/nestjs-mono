/*
  Warnings:

  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "article";

-- CreateTable
CREATE TABLE "Article" (
    "title" TEXT,
    "author_id" TEXT NOT NULL,
    "last_update" TEXT,
    "link" TEXT,
    "category" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_author_id_key" ON "Article"("author_id");
